export default function getSvg({fill = "#ff00ff", stroke = "#000000", resize = 2}) {
    return `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${Math.round(230 * resize)}"
    height="${Math.round(230 * resize)}" 
    opacity="1"
    fill="${fill}"
    stroke="${stroke}"
    viewBox="-8 -8 66 45"
>

<g aria-label="让她那里水流不止" style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">

<g aria-label="快看" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;line-height:1.25;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0;word-spacing:0;writing-mode:lr-tb;text-anchor:start;stroke-opacity:1">

<path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="m84.869 40.644.098-.005q1.674.936 1.674 1.489v.258q-.129.656-.506.667h-.052q-.18-.104-.403-.099-.103 0-.914.12 0-.089.506-.31v-.052q0-.099-.15-.099-.63.362-.713.362.61-.46.61-.517l-.408.005v-.046l.304-.109v-.046q-.196.005-.196-.103h.098v-.047l-.454-.046q0-.124.201-.155v-.052q0-.052-.915-.894.884-.315 1.22-.32zm-4.723-1.788.03-.046h-.103l-.005.015-.082-.036.03-.03V38.7q-.248-.103-.537-.098 0 1.747.212 4.315 0 .63-.811.874l-.264.222q-.274-.507-.434-1.344.114-.217.114-.377 0-.083-.042-.202-.036-.118.088-.124v-.046q0-.269-.103-3.457-.269.005-.486.976-.29.223-.48.223l-.057.005q-.595-.507-.595-1.116v-.057q0-.186.595-.874.377-.527.377-.599h.052q0 .217.056.212l.212-.109q0 .372.326.367l.057-.103v-1.457l-.383-.419.486-1.194.594-.01.378-.062q.18.594.91 1.064l.056.104q-.32.894-.32 1.188h-.057v-.211h-.052v.645h-.052l-.165-.428h-.052l-.057.537h.109v.057h.057q.806.14 1.085.34v-.195q0-.192 1.271-.378 0-.18-.051-.454 0-.052.051-.052-.222-1.313-.765-1.302.91-.827 1.122-.832 1.266.305 1.266 1.199v.196q0 .14-.258.511l-.047.46h.047q.635-.01 1.12-.578 1.195.444 1.267.687v.253q0 .124-.305.662-.15.8-.15.92l.15-.006.625-.248.15-.005q.765.543.765 1.106v.046q-.15.564-.408.569-.579-.088-1.54-.191-2.13.155-2.13.284 0 1.452-.862 2.65l-.403.363q-.104-.12-.104-.197-.222.202-.248.202l-.057.005.057-.253v-.104h-.057q0 .202-.604.367.253-.31.253-.46-.403.362-.76.367l-.253-.046q1.173-.9 1.52-2.253.103-.006.103-.357-1.261.377-1.421.377-.507.01-.507-.904v-.506l.378-.43.082.032q-.01.051-.051.14h.051l.067-.11.434.182q-.02.005-.046.015v.057l.098-.005q1.168-.223 1.168-.32.103-.574.103-.77-.15.004-.408.113-.176-.031-.387-.28.04.115.04.239 0 .49-.593.739zm-.667-.573v.103l.377.052.104-.005q0-.078-.16-.155zm.052-.274v.16l.269-.005q0-.114-.27-.155zm0-.212v.109l.217.051q0-.082-.217-.16zm0-.108v.056q.057-.005.16.052h.057v-.057q-.062 0-.166-.051zm3.638 1.188q1.013-.119 1.013-.217v-.052q0-.258.051-.76l-.201.006q-.812.015-.812.212-.051.517-.051.811zm1.24 4.098v.052l-.098.005v-.052zm-4.718-5.772q-.16 0-.16.269v.056l.269.047.108-.16q-.083 0-.217-.212zM92.414 39.87l-.336-.047v.522l2.026-.372q.537.372.537.496 0 .579-1.483.64-.217.01-1.013.16v.46q.858-.092 1.891-.31.672.238.672.61-.114.409-.604.43-.765.03-1.892.196v.403l.812-.093.878-.036.806.025.135-1.395q-.088-2.077-.27-2.072zm-2.848-.512v.057q1.225-.507 1.225-.574h-.062q-1.044.326-1.163.517zm5.344-1.39v.056l.258-.01q.837-.093 1.354-.119l.062-.119-.062.006zm.646-.32v.061l.32-.015q.357-.073.517-.083v-.057l-.32.016q-.357.072-.517.077zm-.13-.166v.057l.45-.02.258-.068v-.057h-.062zm-5.601.01v.057h.067q.207-.124.32-.13v-.118l-.067.005q-.212.181-.32.186zm.067.346.062-.005q1.592-.429 1.607-.475.13-.238.13-.352l-.063.006q-.914.423-1.416.465zm3.214-.775.197-.01.129-.408.129-.005v.227l-.067.119h.067q1.674-.191 1.995-.202-.347-.393-.708-.377-1.613.072-1.613.362zm.584-3.844q1.349-.057 1.349.522-.341.997-1.349 1.038-.057.005-1.033.28v.056q.196-.01.646.145l1.157-.341q1.096.248 1.096.708v.17l-.068.295q.869-.036 2.254.713.067.315.067.46 0 .517-1.483.697-3.54.342-3.54.615l-.13.238h.068q2.372-.568 2.573-.573.651-.031 1.483 1.38 0 .118-.325.242l-.641 4.367q-.3.418-.837.444-.615.026-.966-.423v-.057q.19-.01.19-.124l-.061.005q-.316.01-2.45.393-.899.04-1.286-.925.33-.13.516-.14l-.19-2.191q-.28.176-.585.434-.13.005-.13-.17-.325.248-.381.248v-.057q.062-.104.062-.233-.347.243-.641.259 0-.057.253-.362-.739.44-1.416.47.64-.372 1.416-1.106 1.06-.971 1.163-1.493.129-.005.129-.124-1.132.454-1.225.46-1.028-.155-1.028-.884 0-.057-.067-.052 0-.098 1.674-1.405-.093.005-.388-.331v-.227q0-.357 1.163-1.096.109.057.253.047l-.062.118q.062 0 .062.057-.129.026-.129.12l.196-.006q0-.078.708-.553l-.837.155q-.625.026-1.224-.76v-.056q1.002-.853 1.674-.884 0 .119-.191.124v.119q.19-.01.19.046.698-.03 2.321-.852z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-opacity:1" transform="matrix(2.4071 0 0 2.35537 -183.935 -77.73)"/>

</g>

</g>

</svg>


    `;
}
