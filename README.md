<!-- Title -->
<div align="center">
    <h1>Tjakra Markup Language</h1>
</div>

<!-- Badges -->
<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
</div>
<br>
<!-- Image -->
<div align="center">
    <img src="https://github.com/naufalhanif25/tjakra-markup-language/blob/main/img/tjakra.png" alt="Tjakra" style="width: 120px; heigh: auto; vertical-align: middle;"/>
</div>

<!-- Descriptions -->
<h2>
    📝 Description
</h2>
<p align="justify">
Tjakra (cakra) is a markup language that can be used to create PDF documents with simple syntax. The name Tjakra is taken from the name of one of the cultural heritage sites in Aceh, namely the Cakra Donya Bell. Tjakra is made of using Javascript, HTML, and CSS. Tjakra is expected to be an easier and more powerful markup language than other markup languages such as LaTeX dan Markdown.
</p>

<!-- Installation -->
<h2>
    🛠️ Installation
</h2>
<h4>Linux & MacOS</h4>
<ol>
    <li>
        Download build/tjakra-linux via the following link:
        <ul>
            <li><a href="https://raw.githubusercontent.com/naufalhanif25/tjakra-markup-language/refs/heads/main/build/tjakra-linux" download>Linux</a></li>
            <li><a href="https://raw.githubusercontent.com/naufalhanif25/tjakra-markup-language/refs/heads/main/build/tjakra-macos" download>MacOS</a></li>
        </ul>
    </li>
    <li>
        Download setup.sh via the following link: <a href="https://raw.githubusercontent.com/naufalhanif25/tjakra-markup-language/refs/heads/main/setup/setup.sh" download>setup.sh</a>
    </li>
    <li>
        Change setup.sh permission to executable
<pre><code>
chmod +x setup.sh
</code></pre>
    </li>
    <li>
        Run setup.sh
<pre><code>
./setup.sh
</code></pre>
    </li>
    <li>
        Check Tjakra installation
<pre><code>
tjakra --version
</code></pre>
    </li>
</ol>

<h4>Windows</h4>
<ol>
    <li>
        Download build/tjakra-linux via the following link: <a href="https://raw.githubusercontent.com/naufalhanif25/tjakra-markup-language/refs/heads/main/build/tjakra-win.exe" download>Windows</a>
    </li>
    <li>
        Copy tjakra-win.exe
    </li>
    <li>
        Create a new folder in C: with the name Tjakra
    </li>
    <li>
        Paste tjakra-win.exe into the Tjakra folder
    </li>
    <li>
        Copy the path of the directory
<pre><code>
C:\Tjakra
</code></pre>
    </li>
    <li>
        Open Environment Variables
    </li>
    <li>
        Add C:\Tjakra to the Path variable
    </li>
    <li>
        Check Tjakra installation
<pre><code>
tjakra --version
</code></pre>
    </li>
</ol>

<!-- Documentation -->
<h2>
    📚 Documentation
</h2>
<h4>Tjakra Elements</h4>
<table style="font-weight: normal;">
    <thead>
        <tr>
            <th align="center">Element</th>
            <th align="center">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">config</td>
            <td align="justify">To configure the document</td>
        </tr>
        <tr>
            <td align="center">pages</td>
            <td align="justify">As a container for the entire contents of the document</td>
        </tr>
        <tr>
            <td align="center">header</td>
            <td align="justify">The top container of a page</td>
        </tr>
        <tr>
            <td align="center">main</td>
            <td align="justify">The main container that can be filled with various elements and properties</td>
        </tr>
        <tr>
            <td align="center">footer</td>
            <td align="justify">The bottom container of a page</td>
        </tr>
        <tr>
            <td align="center">h1 - h6</td>
            <td align="justify">Header element (Same as HTML h1-h6 tag)</td>
        </tr>
        <tr>
            <td align="center">p</td>
            <td align="justify">Paragraf element (Same as HTML p tag)</td>
        </tr>
        <tr>
            <td align="center">ul</td>
            <td align="justify">Unordered list element (Same as HTML ul tag)</td>
        </tr>
        <tr>
            <td align="center">ol</td>
            <td align="justify">Ordered list element (Same as HTML ol tag)</td>
        </tr>
        <tr>
            <td align="center">li</td>
            <td align="justify">List element (Same as HTML li tag)</td>
        </tr>
        <tr>
            <td align="center">img</td>
            <td align="justify">Image element (Same as HTML img tag)</td>
        </tr>
        <tr>
            <td align="center">link</td>
            <td align="justify">Hyperlink element (Same as HTML a tag)</td>
        </tr>
        <tr>
            <td align="center">table</td>
            <td align="justify">Table element (Same as HTML table tag)</td>
        </tr>
        <tr>
            <td align="center">thead</td>
            <td align="justify">Table head section element (Same as HTML thead tag)</td>
        </tr>
        <tr>
            <td align="center">tbody</td>
            <td align="justify">Table body section element (Same as HTML tbody tag)</td>
        </tr>
        <tr>
            <td align="center">tfoot</td>
            <td align="justify">Table footer element (Same as HTML tfoot tag)</td>
        </tr>
        <tr>
            <td align="center">tr</td>
            <td align="justify">Table row element (Same as HTML tr tag)</td>
        </tr>
        <tr>
            <td align="center">th</td>
            <td align="justify">Table header element (Same as HTML th tag)</td>
        </tr>
        <tr>
            <td align="center">td</td>
            <td align="justify">Table data element (Same as HTML td tag)</td>
        </tr>
    </tbody>
</table>

<h4>Tjakra Special Elements</h4>
<table style="font-weight: normal;">
    <thead>
        <tr>
            <th align="center">Element</th>
            <th align="center">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">!line-break</td>
            <td align="justify">For a line break, same as "enter" or HTML br tag</td>
        </tr>
        <tr>
            <td align="center">!tracer-round</td>
            <td align="justify">Horizontal line (Same as HTML hr tag)</td>
        </tr>
    </tbody>
</table>

<h4>Tjakra Properties</h4>
<table style="font-weight: normal;">
    <thead>
        <tr>
            <th align="center">Property</th>
            <th align="center">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">line-height</td>
            <td align="justify">To determine the row height (px (pixel), pt(point), em, rem, % (percent), vh/vw (viewport height/width), vmin/vmax, pt (point), cm, mm, in (inch), or ex/ch)</td>
        </tr>
        <tr>
            <td align="center">space-bp</td>
            <td align="justify">To determine the spacing before a paragraph</td>
        </tr>
        <tr>
            <td align="center">space-ap</td>
            <td align="justify">To determine the spacing after a paragraph</td>
        </tr>
        <tr>
            <td align="center">font-family</td>
            <td align="justify">To select a font family (Same as CSS) such as Arial, Helvetica, Verdana, Tahoma, Trebuchet MS, Lucida Sans Unicode, Times New Roman, Georgia, Palatino Linotype, Book Antiqua, Courier New, Lucida Console, Impact, and Comic Sans MS</td>
        </tr>
        <tr>
            <td align="center">font-size</td>
            <td align="justify">To determine the font size (px (pixel), pt(point), em, rem, % (percent), vh/vw (viewport height/width), vmin/vmax, cm, mm, in (inch), or ex/ch)</td>
        </tr>
        <tr>
            <td align="center">font-weight</td>
            <td align="justify">To determine the font weight (normal, bold, lighter, bolder, or 100-900)</td>
        </tr>
        <tr>
            <td align="center">font-style</td>
            <td align="justify">To determine the font style (normal, italic, oblique)</td>
        </tr>
        <tr>
            <td align="center">color</td>
            <td align="justify">To change the text color, the value can be a color name (red, green, blue), hex code, hsl or rgb</td>
        </tr>
        <tr>
            <td align="center">text-align</td>
            <td align="justify">To change the text align (left, center, right)</td>
        </tr>
        <tr>
            <td align="center">text-decoration</td>
            <td align="justify">To change the text decoration (none, underline, overline, line-through, blink, inherit, initial, unset)</td>
        </tr>
        <tr>
            <td align="center">width</td>
            <td align="justify">To determine the width of the element (px (pixel), pt(point), em, rem, % (percent), vh/vw (viewport height/width), vmin/vmax, cm, mm, in (inch), or ex/ch)</td>
        </tr>
        <tr>
            <td align="center">height</td>
            <td align="justify">To determine the height of the element (px (pixel), pt(point), em, rem, % (percent), vh/vw (viewport height/width), vmin/vmax, cm, mm, in (inch), or ex/ch)</td>
        </tr>
    </tbody>
</table>

<h4>Tjakra Special Properties</h4>
<table style="font-weight: normal;">
    <thead>
        <tr>
            <th align="center">Property</th>
            <th align="center">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">papersize</td>
            <td align="justify">To determine the paper size (letter, legal, tabloid, ledger, A0, A1, A2, A3, A4, A5, A6, or custom paper sizes in inches (e.g., "8.27*12.99", " [width][height]"))</td>
        </tr>
        <tr>
            <td align="center">margin</td>
            <td align="justify">To determine the margin (normal, narrow, moderate, wide, or custom margins in inches (e.g., "3+3+3+4", "[top][right][bottom][left]")</td>
        </tr>
        <tr>
            <td align="center">align</td>
            <td align="justify">To align elements within a container (header or footer) (left, center, or right)</td>
        </tr>
        <tr>
            <td align="center">src</td>
            <td align="justify">Image source (can be a link or a path)</td>
        </tr>
        <tr>
            <td align="center">alt</td>
            <td align="justify">Alternative text displayed if the image is not available</td>
        </tr>
        <tr>
            <td align="center">ref</td>
            <td align="justify">Specifies the destination link</td>
        </tr>
    </tbody>
</table>

<h4>Tjakra Inline Styles</h4>
<table style="font-weight: normal;">
    <thead>
        <tr>
            <th align="center">Element</th>
            <th align="center">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">{b: ...}</td>
            <td align="justify">Bold text</td>
        </tr>
        <tr>
            <td align="center">{i: ...}</td>
            <td align="justify">Italic text</td>
        </tr>
        <tr>
            <td align="center">{u: ...}</td>
            <td align="justify">Underline text</td>
        </tr>
        <tr>
            <td align="center">{sup: ...}</td>
            <td align="justify">Superscript</td>
        </tr>
        <tr>
            <td align="center">{sub: ...}</td>
            <td align="justify">Subscript</td>
        </tr>
        <tr>
            <td align="center">{hl: ...}</td>
            <td align="justify">Highlight text</td>
        </tr>
        <tr>
            <td align="center">{del: ...}</td>
            <td align="justify">Deleted text</td>
        </tr>
        <tr>
            <td align="center">{line-break}</td>
            <td align="justify">For a line break, same as "enter" or HTML br tag</td>
        </tr>
        <tr>
            <td align="center">{tracer-round}</td>
            <td align="justify">Horizontal line (Same as HTML hr tag)</td>
        </tr>
    </tbody>
</table>
Further documentation can be seen in the following document: <a href="https://github.com/naufalhanif25/tjakra-markup-language/blob/main/output/tjakra.pdf">Tjakra Documentation</a>

<!-- Example Code -->
<h2>
    📄 Example Code
</h2>
<pre><code>
// helloworld.tj
// Document configuration
config: {
    papersize: A4;
    margin: normal;
    line-height: 1.0;
    space-bp: none;
    space-ap: none;
    font-family: Times New Roman; 
    font-size: 12pt; 
    font-weight: normal;
    font-style: normal;
    text-align: left;
}
pages: {
    // Page 1
    // Header section
    header: {
        align: left;
        p: {
            content: "Hello World";
            text-align: left;
            font-size: 10pt;
        }
    }
    // Main section
    main: {
        // Title
        h1: {
            content: "Hello World";
            text-align: center;
            font-size: 16pt;
            font-weight: bold;
        }
    }
    // Footer section
    footer: {
        align: right;
        p: {
            content: "Hello World";
            text-align: right;
            font-size: 10pt;
        }
    }
}
</code></pre>

Run the Tjakra code using the following command:
<pre><code>
tjakra -s helloworld.tj -p helloworld.pdf
</code></pre>
or
<pre><code>
tjakra -s helloworld.tj
</code></pre>

<!-- Donation -->
<h2>
    ❤️ Support us
    <h5>
        <a href="https://saweria.co/minkudeveloper" target="_blank" style="justify: center;"> 
            <button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n797tizOh5Lk4p0xeQsYjsVkW6mZ7uN4BipecBl7My2s4LFc-sU_MGhrz-mS4s5k6N8&usqp=CAU" alt="Donate via Saweria" style="width: 200px; height: 120px; vertical-align: middle;">
            </button> 
        </a>
    </h5>
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://buymeacoffee.com/minkudev" target="_blank" style="justify: center;">
            <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" style="width: 160px; heigh: 64px; vertical-align: middle;" >
        </a>
    </h5>
</h2>
