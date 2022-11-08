export default function getSvg({fill = "#ff00ff", stroke = "#000000", resize = 2}) {
    return `
    
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${Math.round(800 * resize)}"
        height="${Math.round(108 * resize)}" 
        opacity="1"
        fill="${fill}"
        stroke="${stroke}"
        viewBox="-3 -3 210 36"
    >

    <g style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">

    <text xml:space="preserve" x="-.375" y="291.171" aria-label="让她那里水流不止" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:25.13465309px;line-height:1.25;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0;word-spacing:0;writing-mode:lr-tb;text-anchor:start" transform="translate(0 -266)">

    <tspan x="-.375" y="291.171" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:25.13465309px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start">
    今晚展現你的實力
    </tspan>

    </text>

    </g>

    </svg>

    `;
}
