/**
 * Tjakra — Markup language
 *
 * This program contains code to create PDF documents from simple lines of code called "Tjakra".
 *
 * The process involves the following steps:
 * 1. Parsing command-line arguments to retrieve the input file and optional output path.
 * 2. Reading the source file and tokenizing its contents.
 * 3. Converting the tokens into a structured JSON representation.
 * 4. Rendering the JSON into an HTML document.
 * 5. Using Puppeteer to convert the HTML into a styled PDF with specified paper size and margin.
 * 
 * Additional features:
 * - Predefined paper sizes and margin templates.
 * - A built-in loading spinner animation in the terminal during PDF generation.
 * - Comprehensive error handling for input validation and runtime exceptions.
 *
 * Dependencies:
 * - Node.js built-in 'fs' module for file operations.
 * - 'puppeteer' for headless browser-based PDF rendering.
 * - 'commander' for argument parsing and CLI structure.
 */

// Import necessary modules
const fs = require('fs'); // File system module to read and write files
const puppeteer = require('puppeteer'); // Puppeteer for generating PDFs from HTML content using headless Chrome
const { program } = require("commander"); // Commander.js for parsing command-line arguments

// Global variables
// Array to store parsed tokens (could be HTML tokens, markdown tokens, or others depending on context)
const tokens = [];

// Predefined margin configurations (in inches) for PDF layout
const margins = {
    normal: {  // Standard 1-inch margin on all sides
        top: 1, 
        right: 1, 
        bottom: 1, 
        left: 1 
    },
    narrow: {  // Reduced 0.5-inch margins for compact layout
        top: 0.5, 
        right: 0.5, 
        bottom: 0.5, 
        left: 0.5 
    },
    moderate: {  // Slightly narrower horizontal margins
        top: 1, 
        right: 0.75, 
        bottom: 1, 
        left: 0.75 
    },
    wide: {  // Wider horizontal margins for more whitespace
        top: 1, 
        right: 2, 
        bottom: 1, 
        left: 2 
    }
};

// Predefined paper sizes (dimensions in inches) for various standard formats
// Useful for setting PDF output dimensions
const papersizes = {
    letter: {  // US Letter size (commonly used in the US)
        width: 8.5, 
        height: 11 
    },
    legal: {  // US Legal size (longer than Letter)
        width: 8.5, 
        height: 14 
    },
    tabloid: {  // Used for newspapers and larger prints
        width: 11, 
        height: 17 
    },
    ledger: {  // Landscape version of tabloid
        width: 17, 
        height: 11 
    },
    A0: {  // ISO 216 A-series paper sizes (used internationally)
        width: 33.1, 
        height: 46.8 
    },
    A1: { 
        width: 23.4, 
        height: 33.1 
    },
    A2: { 
        width: 16.5, 
        height: 23.4 
    },
    A3: { 
        width: 11.7, 
        height: 16.5 
    },
    A4: {  // Most commonly used paper size worldwide
        width: 8.3, 
        height: 11.7 
    },
    A5: { 
        width: 5.8, 
        height: 8.3 
    },
    A6: { 
        width: 4.1, 
        height: 5.8 
    }
};

// Variables to hold the selected paper size and margin for the PDF
let papersize;
let margin;

// Function to perform tokenization (converting source lines into structured tokens)
function tokenize(line, lineNumber = 0) {   
    // Validate input type
    if (typeof line !== 'string') {
        console.error(`Error at line ${lineNumber}: Invalid input, expected a string.`);

        return;
    }

    line = line.trim();  // Remove leading and trailing spaces

    // Skip empty lines or comment-only lines
    if (!line || line.startsWith('//')) return; 

    try {
        // Handle element declaration line (e.g., main: { )
        if (line.endsWith('{')) {
            const elementName = line.slice(0, -1).trim();

            if (!elementName) {
                throw new Error(`Empty element name before '{' at line ${lineNumber}`);
            }

            // Add the element name token
            tokens.push({ 
                type: 'element', 
                value: line.slice(0, -1).trim() 
            });

            // Add the opening brace token
            tokens.push({ 
                type: 'symbol', 
                value: '{' 
            });
        } 
        // Handle closing brace
        else if (line === '}') {
            tokens.push({ 
                type: 'symbol', 
                value: '}' 
            });
        }
        // Handle special elements (e.g., !line-break, !tracer-round)
        else if (line === '!line-break') {
            tokens.push({
                type: 'element',
                value: 'line-break'
            });
        } 
        else if (line === '!tracer-round') {
            tokens.push({
                type: 'element',
                value: 'tracer-round'
            });
        }
        // Handle property declaration (e.g., key: value;)
        else if (line.includes(':')) {
            // Property token (key-value pair)
            const [key, value] = line.split(/:(.+)/);  // Split only on first colon

            if (!key || !value) {
                throw new Error(`Invalid property format at line ${lineNumber}: "${line}"`);
            }

            tokens.push({ 
                type: 'property', 
                key: key.trim(), 
                value: value.trim().replace(/;$/, '')  // Remove optional trailing semicolon
            });
        }
        // Handle anything else as undefined (for warning or debug)
        else {
            console.warn(`Warning at line ${lineNumber}: Unrecognized syntax: "${line}"`);

            // Undefined token type (not recognized)
            tokens.push({ 
                type: 'undefined', 
                value: line 
            });
        }
    }
    catch (error) {
        console.error(`Error in tokenize at line ${lineNumber}: ${error.message}`);
    }
}

// Function to convert a list of tokens into a structured JSON object
function toJson(tokens) {
    // Validate input: must be a non-empty array
    if (!Array.isArray(tokens) || tokens.length === 0) {
        throw new Error("Invalid or empty tokens provided.");
    }

    try {
        const stack = [];  // Stack to handle nested structure of elements
        const root = {};   // Root object to hold the final JSON structure
    
        tokens.forEach(token => {
            if (!token || !token.type) {
                throw new Error(`Invalid token format at index ${index}`);
            }

            // Handle element-type token (start of a block or special element)
            if (token.type === 'element') {
                const elementName = token.value.replace(':', '').trim();

                if (!elementName) {
                    throw new Error(`Missing element name at index ${index}`);
                }

                // Special case: self-contained elements that don't require nesting
                if (["line-break", "tracer-round"].includes(elementName)) {
                    const element = {
                        type: "element",
                        name: elementName,
                        properties: [],
                        elements: []
                    };

                    // Add special element to the current parent or root
                    if (stack.length > 0) {
                        stack[stack.length - 1].elements.push(element);
                    } 
                    else {
                        // Use a unique key to avoid overwrite
                        root[elementName + "_" + Date.now()] = element;
                    }

                    return; // Skip push to stack
                }

                // Regular element: initialize object structure
                const element = { 
                    type: 'element', 
                    name: elementName, 
                    properties: [], 
                    elements: [] 
                };
                
                if (stack.length > 0) {
                    // Nest this element inside its parent
                    const parent = stack[stack.length - 1];
                    
                    parent.elements.push(element);
                } 
                else {
                    // Top-level element (directly added to root)
                    root[elementName] = element;
                }
                
                // Push this element to stack to allow nesting
                stack.push(element);
            }
            // Handle property-type token (key-value pair)
            else if (token.type === 'property') {
                const { key, value } = token;

                if (!key || !value) {
                    throw new Error(`Invalid property at index ${index}`);
                }

                const curElement = stack[stack.length - 1];  // Get current open element

                if (!curElement) {
                    throw new Error(`Property found outside of an element at index ${index}`);
                }
                
                // Add property to the current element
                if (!curElement.properties) curElement.properties = [];
                curElement.properties.push({ key, value });
            } 
            // Handle symbol-type token for closing brace '}'
            else if (token.type === 'symbol' && token.value === '}') {
                if (stack.length === 0) {
                    throw new Error(`Unexpected closing brace '}' at index ${index}`);
                }

                // Closing the most recent open element
                stack.pop();
            }
        });

        // After processing all tokens, ensure all opened elements are closed
        if (stack.length > 0) {
            throw new Error("Unmatched opening braces detected.");
        }
    
        return root;  // Return the fully built JSON structure
    }
    catch (error) {
        console.error(`Error in toJson: ${error.message}`);

        return {};  // Return empty object on failure
    }
}

// Function to convert an image file to a base64-encoded data URI
function imgToBase64(src) {
    try {
        const filePath = src.trim();  // Remove extra whitespace from file path

        // Determine MIME type based on file extension
        const mimeType = filePath.endsWith('.png') ? 'image/png'
                        : filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') ? 'image/jpeg'
                        : filePath.endsWith('.gif') ? 'image/gif'
                        : 'application/octet-stream';  // Fallback for unknown types

        // Read file content synchronously and encode it to base64
        const data = fs.readFileSync(filePath).toString('base64');

        // Return complete data URI with MIME type and base64-encoded content
        return `data:${mimeType};base64,${data}`;
    } catch (err) {
        // In case of failure (e.g., file not found), log warning and return original src
        console.warn(`Warning: Failed to convert image "${src}" to base64.`);

        return src;  // Fallback to using the original path
    }
}

// Function to convert JSON structure to an HTML document string
function jsonToHtml(json) {
    try {
        // Validate existence of configuration object
        if (!json || !json.config || !json.config.properties) {
            throw new Error("Invalid JSON format: Missing configuration.");
        }

        // Extract global style configuration from the config element
        const configStyles = json.config.properties.reduce((acc, prop) => {
            if ([
                "line-height", "space-bp", "space-ap", "font-family", "font-size", "font-weight", "font-style", 
                "color", "text-align", "text-decoration", "width", "height"
            ].includes(prop.key)) {
                acc[prop.key] = prop.value;
            }

            return acc;
        }, {});
    
        // Build global CSS styles applied to all elements in the document
        let globalStyles = `
            * {
                font-family: "${configStyles["font-family"] ?? "sans-serif"}"; 
                font-size: ${configStyles["font-size"] ?? "12pt"}; 
                font-weight: ${configStyles["font-weight"] ?? "normal"};
                font-style: ${configStyles["font-style"] ?? "normal"};
                text-align: ${configStyles["text-align"] ?? "left"};
            }
            h1, h2, h3, h4, h5, h6, p, ol, ul, li, img, table, thead, tbody, tfoot, td, tr, th, section {
                margin-top: ${configStyles["space-bp"] === "none" ? "0" : configStyles["space-bp"] ?? "0"};
                margin-bottom: ${configStyles["space-ap"] === "none" ? "0" : configStyles["space-ap"] ?? "0"};
                padding: ${configStyles["line-height"] ?? "normal"};
            }
        `;
    
        // Recursive function to convert each JSON element into an HTML tag
        function createElement(element) {
            if (!element || !element.name) return '';
    
            let properties = element.properties || [];
            let elements = element.elements || [];
            let elementName = element.name;
            let content = "";
            let styles = [];
            let attributes = [];

            // Handle special elements
            if (element.name === "line-break") {
                return `<br>`;
            }
            else if (element.name === "tracer-round") {
                return `<hr>`;
            }

            // Validate supported HTML tags
            if (![
                "config", "pages", "header", "main", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "img",
                "table", "thead", "tbody", "tr", "th", "td", "section", "link"
            ].includes(elementName)) {
                throw new Error(`Invalid element '${elementName}'`);
            }
    
            // Process element's properties
            properties.forEach(prop => {
                if (prop.key === "content") {
                    // Assign textual content, removing quotes
                    content = prop.value.replace(/^["']|["']$/g, '');
                } 
                else if ([
                    "line-height", "space-bp", "space-ap", "font-family", "font-size", "font-weight", "font-style", 
                    "color", "text-align", "text-decoration", "width", "height"
                ].includes(prop.key)) {
                    styles.push(`${prop.key}: ${prop.value}`);
                } 
                // Ordered list type and start number
                else if (elementName === "ol" && prop.key === "type") {
                    const typeValue = prop.value.split(" ");
                    const listType = typeValue[0];
                    const startValue = typeValue[1];
                
                    if (listType === "letter") {
                        let startNum = 1;

                        if (startValue && /^[A-Z]$/i.test(startValue)) {
                            startNum = startValue.toUpperCase().charCodeAt(0) - 64;
                        }

                        elementName = `ol type="A" start="${startNum}"`;
                    }
                    else if (listType === "number") {
                        elementName = `ol type="1"${startValue ? ` start="${startValue}"` : ''}`;
                    }
                }
                // Header/Footer alignment
                else if (["header", "footer"].includes(elementName)) {
                    if (!["align"].includes(prop.key)) {
                        throw new Error(`Invalid property '${prop.key}' on element '${elementName}'`);
                    }

                    if (prop.key === "align") {
                        styles.push(`justify-content: ${prop.value}`);
                    }
                }
                // link element attributes
                else if (elementName === "link") {
                    let href = "";

                    properties.forEach(prop => {
                        if (prop.key === "ref") {
                            href = prop.value.replace(/^["']|["']$/g, '');

                            attributes.push(`href="${href}"`);
                        } 
                        else if (prop.key === "content") {
                            content = prop.value.replace(/^["']|["']$/g, '');
                        } 
                        else if ([
                            "line-height", "space-bp", "space-ap", "font-family", "font-size", "font-weight", "font-style", 
                            "color", "text-align", "text-decoration", "width", "height"
                        ].includes(prop.key)) {
                            styles.push(`${prop.key}: ${prop.value}`);
                        } 
                        else {
                            throw new Error(`Invalid property '${prop.key}' on element '${elementName}'`);
                      }
                    });
                }                  
                // Image element attributes & base64 conversion
                else if (elementName === "img") {
                    if (!["src", "alt", "width", "height", "align"].includes(prop.key)) {
                        throw new Error(`Invalid property '${prop.key}' on element '${elementName}'`);
                    }

                    if (prop.key === "src") {
                        const base64 = imgToBase64(prop.value.replace(/^["']|["']$/g, ''));

                        attributes.push(`src="${base64}"`);
                    }
                    else if (prop.key === "align") {
                        const alignValue = prop.value.trim();

                        styles.push("display: block");

                        if (alignValue === "left") {
                            styles.push("margin-right: auto");
                        }
                        else if (alignValue === "right") {
                            styles.push("margin-left: auto");
                        }
                        else if (alignValue === "center") {
                            styles.push("margin-left: auto");
                            styles.push("margin-right: auto");
                        }
                    }                   
                    else {
                        attributes.push(`${prop.key}="${prop.value.replace(/^["']|["']$/g, '')}"`);
                    }
                }
                else {
                    throw new Error(`Invalid property '${prop.key}' on element '${elementName}'`);
                }
            });
    
            // Recursively render nested child elements
            let childHtml = elements.map(createElement).join('');
            let styleAttr = styles.length > 0 ? ` style="${styles.join('; ')}"` : '';
            let attrStr = attributes.join(' ');

            // Self-closing image tag
            if (elementName === "img") {
                return `<img ${attrStr}${styleAttr ? ` ${styleAttr}` : ''} />`;
            }
            // Create link element
            else if (elementName === "link") {
                return `<a ${attrStr}${styleAttr ? ` ${styleAttr}` : ``}>${content}</a>`
            }
    
            // Render element with content and children, including inline formatting tags
            return `
                <${elementName}${styleAttr}>${
                    content
                        .replace(/(?<!\\)\{line-break\}/g, '<br>')
                        .replace(/\\\{line-break\}/g, '{line-break}')
                        .replace(/(?<!\\)\{tracer-round\}/g, '<hr>')
                        .replace(/\\\{tracer-round\}/g, '{tracer-round}')
                        .replace(/(?<!\\)\{(b|i|u|sup|sub|hl|del):\s*([^}]+)\}/g, (match, tag, content) => {
                            if (tag === "b") return `<b style="font-weight: bold;">${content}</b>`;
                            if (tag === "i") return `<i style="font-style: italic;">${content}</i>`;
                            if (tag === "u") return `<u>${content}</u>`;
                            if (tag === "sup") return `<sup>${content}</sup>`;
                            if (tag === "sub") return `<sub>${content}</sub>`;
                            if (tag === "hl") return `<mark>${content}</mark>`;
                            if (tag === "del") return `<del>${content}</del>`;
                        })
                        .replace(/\\(\{[^}]+\})/g, '$1') // remove the escape backslash
                }${childHtml}</${elementName}>
            `;
        }
        
        // Determine paper size and margin setting from configuration
        // Get the 'papersize' value from the config
        let rawPapersize = json.config.properties.find(prop => prop.key === "papersize")?.value.replace(/^["']|["']$/g, '');

        // Check if the value is in the format like "8.5*11" (custom dimensions in inches)
        if (rawPapersize && /^\d+(\.\d+)?\*\d+(\.\d+)?$/.test(rawPapersize)) {
            const [width, height] = rawPapersize.split('*').map(Number);
            
            papersize = { width, height };  // Use custom paper size
        } 
        else {
            // Use predefined paper size or default to A4 if the provided value is invalid or not found
            papersize = papersizes[rawPapersize] ?? papersizes["A4"];
        }
        
        // Get the 'margin' value from the config
        let rawMargin = json.config.properties.find(prop => prop.key === "margin")?.value.replace(/^["']|["']$/g, '');

        // Check if the value is in the format like "1+1+1+1" (custom margins in inches)
        if (rawMargin && /^\d+(\.\d+)?\+\d+(\.\d+)?\+\d+(\.\d+)?\+\d+(\.\d+)?$/.test(rawMargin)) {
            const [top, right, bottom, left] = rawMargin.split('+').map(Number);
            
            margin = { top, right, bottom, left };  // Use custom margins
        } 
        else {
            // Use predefined margin or fallback to "normal" if value is invali
            margin = margins[rawMargin] ?? margins["normal"];
        }
    
        // Final HTML document template
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        ${globalStyles}
                        html {
                            height: ${papersize.height}in;
                            width: ${papersize.width}in;
                            padding: 0in ${margin.right}in 0in ${margin.left}in;
                            display: flex;
                            box-sizing: border-box;
                        }
                        body {
                            width: 100%;
                            overflow: hidden;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                        }
                        header {
                            display: flex;
                            align-items: flex-end;
                            height: ${margin.top}in;
                        }
                        main {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            height: calc(${papersize.height}in - ${margin.top}in - ${margin.bottom}in);
                            width: 100%;
                            flex-grow: 1;
                            overflow-hidden;
                            padding: 2% 0;
                            box-sizing: border-box;
                        }
                        footer {
                            display: flex;
                            align-items: flex-start;
                            height: ${margin.bottom}in;
                        }
                        section * {
                            margin: ${json.config.properties.find(prop => prop.key === "line-height")?.value ?? "normal"};
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        table, th, td {
                            border: 1px solid black;
                        }
                    </style>
                </head>
                <body>
                    ${createElement(json.pages)}
                </body>
            </html>
        `;
    } 
    catch (error) {
        console.error(`Error generating HTML: ${error.message}`);

        return "<html><body><h1>Error generating document</h1></body></html>";
    }
}

// Function to convert generated HTML into a PDF
async function HtmlToPdf(html, jsonStruct, options) {
    let browser;

    try {
        // Launch a headless Chromium browser using Puppeteer
        browser = await puppeteer.launch({ headless: "new" });

        // Open a new page/tab in the browser
        const page = await browser.newPage();

        // Load the HTML content and generate PDF simultaneously
        await Promise.all([
            page.setContent(html),  // Set HTML content into the page
            page.pdf({
                path: options.path || options.source.replace(/\.\w+$/, ".pdf"),  // Output file path
                width: `${papersize.width}in`,  // Page width in inches
                height: `${papersize.height}in`,  // Page height in inches
                landscape: false,  // Portrait orientation
                margin: margins[jsonStruct.config.properties.find(prop => prop.key === "margin")?.value] ?? margins["normal"],  // Margins from config
                printBackground: true,  // Include background graphics
                scale: 1  // Default scale
            })
        ]);

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        console.log("PDF successfully created.");
    }
    catch (error) {
        // Catch and log any errors during PDF generation
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        console.error(`Error generating PDF: ${error.message}`);
    } 
    finally {
        // Ensure the browser is closed to free resources
        if (browser) await browser.close();
    }
}

// Function to starts a simple CLI spinner animation in the terminal to indicate a loading process
function startSpinner() {
    const frames = ['|', '/', '-', '\\'];  // Spinner frames to simulate rotation
    let i = 0;  // Index to keep track of the current frame

    // Set up an interval that updates the spinner frame every 100ms
    const spinner = setInterval(() => {
        // '\r' moves the cursor back to the start of the line (overwrites previous character)
        process.stdout.write(`\r${frames[i++ % frames.length]}`);
    }, 100);

    return () => {
        clearInterval(spinner);      // Stop the interval animation
        process.stdout.write('\r');  // Clear the spinner character from the line
    };
}

// ------------------------------------
// CLI Program Setup using Commander.js
// ------------------------------------

program
    .name("Tjakra")  // CLI name
    .description("Tjakra is a language used to create PDF documents using simple lines of code.")
    .version("1.0.0-alpha")
    .option("-s, --source <file>", "Specify the Tjakra source file")  // Source input
    .option("-p, --path <output>", "Specify the output PDF path")  // Optional output path
    .helpOption("-h, --help", "Show help information")  // Help flag
    .showHelpAfterError();  // Automatically show help after errors

program.parse(process.argv);  // Parse command-line arguments

const options = program.opts();  // Get parsed options

// Validate if the source file exists
if (!fs.existsSync(options.source)) {
    console.error(`Error: The file "${options.source}" does not exist.`);
    process.exit(1);  // Exit with failure
}

// Validate source file extension
if (options.source.split(".")[1] !== "tj") {
    console.error(`Error: The file extension "${options.source}" is invalid.`);
    process.exit(1);  // Exit with failure
}

// Check if source file was actually provided
if (!options.source) {
    console.error("Error: Source file is required.\n");
    program.help();  // Show help and exit
}

// -------------------------------------------------
// Read, tokenize, convert to JSON, and generate PDF
// -------------------------------------------------

// Read source file and split it into lines
const lines = fs.readFileSync(options.source, 'utf8').split(/\r?\n/);

// If file is empty, abort
if (lines.length === 0) {
    console.error("Error: The input file is empty.");
    process.exit(1);
}

// Tokenize each line using the tokenizer (assumed defined elsewhere)
lines.forEach(tokenize);

let jsonStruct;

try {
    // Convert tokens into JSON structure
    jsonStruct = toJson(tokens);

    // Validate result of JSON conversion
    if (!jsonStruct || Object.keys(jsonStruct).length === 0) {
        throw new Error("Invalid JSON structure generated.");
    }
} 
catch (error) {
    // Catch and log errors during JSON conversion
    console.error(`Error in JSON conversion: ${error.message}`);
    process.exit(1);
}

try {
    const stopSpinner = startSpinner();

    // Generate HTML from JSON and then convert it to PDF
    HtmlToPdf(jsonToHtml(jsonStruct), jsonStruct, options)
        .then(() => {
            stopSpinner(); 
        })
        .catch(error => {
            stopSpinner();
            process.exit(1);
    });
} 
catch (error) {
    // Handle any unexpected critical error
    console.error(`Critical error: ${error.message}`);
    process.exit(1);
}
