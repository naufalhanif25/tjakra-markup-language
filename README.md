<!-- Title -->
<div align="center">
    <h1>Tjakra Markup Language</h1>
</div>

<!-- Badges -->
<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> 
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
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
Tjakra (cakra) is a markup language that can be used to create PDF documents with simple syntax. The name Tjakra is taken from the name of one of the cultural heritage sites in Aceh, namely the Cakra Donya Bell. Tjakra is made of Javascript, HTML, and CSS. Tjakra is expected to be an easier and more powerful markup language than other markup languages such as LaTeX dan Markdown.
</p>

<!-- About -->
<h4>
    About:
</h4>
<table>
    <tbody>
        <tr>
            <th align="left">Name</th>
            <th align="left" style="font-weight: normal;">Tjakra</th>
        </tr>
        <tr>
            <th align="left">Version</th>
            <th align="left" style="font-weight: normal;">1.0.0-beta</th>
        </tr>
        <tr>
            <th align="left">Author</th>
            <th align="left" style="font-weight: normal;">Minku Developer</th>
        </tr>
    </tbody>
</table>

<!-- Documentation -->
<h2>
    📚 Documentation
</h2>
PDF: <a href="https://github.com/naufalhanif25/tjakra-markup-language/blob/main/output/tjakra.pdf">Tjakra Documentation</a>

<ol style="font-weight: bold">
    <br>
    <li>
        <strong>Tjakra Elements</strong>
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
    </li>
    <br>
    <li>
        <strong>Tjakra Special Elements</strong>
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
    </li>
    <br>
    <li>
        <strong>Tjakra Properties</strong>
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
    </li>
    <br>
    <li>
        <strong>Tjakra Inline Styles</strong>
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
    </li>
</ol>

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
