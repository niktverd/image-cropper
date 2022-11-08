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
    
    <g aria-label="堅挺 助勃" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;line-height:1.25;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0;word-spacing:0;writing-mode:lr-tb;text-anchor:start">
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M4.235 277.47q-.12 0-.259-.088-.134-.093-.263-.273-.124-.181-.192-.305l-.046-.083q-.041-.072-.041-.155 0-.119.093-.31.051-.119.868-.512.186-.088.212-.108l-.17.16.263-.041-.248.119.248-.026q-.202.088-.202.14 0 .03.083.03.103 0 .863-.098l-.031-.269q-.01-.046-.067-.077-.052-.036-.124-.067-.15-.073-.15-.114 0-.031.051-.067.083-.057.197-.16-.217-.01-.486-.01-1.183 0-1.7.165l-.253.087q-.042.181-.088.218-.13.062-.197.103-.067.041-.113.041h-.01q-.047 0-.14-.046l-.041-.021q-.186.088-.31.088-.12 0-.202-.088-.083-.088-.114-.238-.03-.155-.03-.263 0-.021-.006-.036 0-.197.016-.357l.015-.222.103-.083.114-.13q-.03-4.335-.16-4.516-.083-.062-.16-.14l-.181-.19.31-.042-.145-.093.228-.036-.124-.093.32-.088-.124-.103.041-.005q.109-.031.331-.041.243 0 .424.087l.062.042q.062-.036.108-.057.109-.041.248-.083l.357-.088-.041.026q-.212.119-.212.181 0 .026.036.041.067.031.176.031.062 0 .201-.015.145-.02.6-.181.397-.16.584-.305.222-.15.34-.15.052 0 .104.016.232.051.393.062.14.01.212.041.077.026.129.088.057.062.108.134.036.057.078.104.015.015.015.051 0 .12-.14.419-.134.294-.216.429-.021.03-.212.057-.098.01-.233.03.02.037.02.094v.072l-.04.207q-.037.108-.243.325.155-.041.227-.067.15-.067.315-.067.336 0 .636.532.201.377.227.574l.192-.078-.15-.098q.072-.036.387-.093.073-.01.145-.01.165 0 .325.057l.75.32q.129-.31.238-.636l.02-.062q.042-.093.073-.212.02-.072.02-.118 0-.026-.005-.037-.005-.015-.026-.015-.144 0-.868.253-.512.17-.568.17-.109 0-.259-.113-.15-.114-.31-.284-.16-.176-.269-.315l-.108-.14.253-.16-.356-.155h.134q.093 0 .238-.02l.857-.239q.719-.19 1.055-.305.129-.046.294-.14.17-.097.341-.17.13-.046.233-.046.18 0 .542.196.233.13.32.253.047.068.146.166.356.34.356.568 0 .124-.15.336-.108.145-.227.28-.15.17-.197.263-.222.579-.573 1.214 1.11.512 1.442.78.062.047.098.202.041.15.067.326.031.17.062.268.005.005.01.016.006.01.006.015.005 0 .01.016.01.077.015.186 0 .108-.025.227v.01l-.006.006q-.03.16-.196.273-.124.078-.186.13-.083.067-.14.067-.051 0-.144-.036l-.047-.016q-.269-.057-.46-.057-.103 0-.18.021-.114.041-.238.072-.12.031-.207.047l-.088.02.13-.3-.176.089.088-.223-.16.062.087-.33-.176.057q.006-.005.016-.037.031-.088.108-.248-.139-.113-.506-.356-.232.34-.506.646-.331.361-.76.532-.062-.124-.083-.196-.119.14-.294.155l.113-.285q-.294.197-.63.197h-.036q.212-.145.367-.357-.238.145-.486.207.046.124.046.227 0 .036-.01.104h.005q.28 0 .357-.021.01-.005.026-.005.077 0 .165.191.088.191.114.32l.01.032-.005-.005q-.01 0-.02.046l-.021.145-.021.19q0 .022-.005.037 1.09-.145 1.204-.186l.01-.005q.052-.036.062-.036.031 0 .057.015.031.016.072.031.073.031.217.145.145.114.27.248.128.13.154.202.01.036.01.103 0 .041-.01.15-.005.103-.083.269-.072.16-.253.258-.108.057-.274.057-.103 0-.227-.02-.393-.068-.811-.068-.181 0-.445.02v.032q-.046.398-.103.671.418-.025.723-.03l.43-.006q.278 0 .428.01h.114q.176 0 .553-.108.517-.165.754-.165.253 0 .574.34.398.43.398.72 0 .04-.02.139-.016.103-.26.3-.123.123-.216.123-.073 0-.207-.015-.61-.103-2.067-.134H7.66q-2.16 0-4.15.48-.568.13-.734.13-.201 0-.336-.11-.129-.103-.175-.278-.047-.176-.052-.295 0-.026-.005-.041v-.083q0-.144.02-.315l.026-.253.16-.088.833-.667-.636.672.713-.475-.408.408.217-.119.351-.176q.005 0 .005.01t-.062.104l-.134.202q-.03.04-.03.062 0 .04.082.04.088 0 .382-.05.476-.1 1.845-.239 0-.284-.02-.604l-.295.072q-.615.165-.868.264-.083.025-.155.025zm3.245-4.547q-.13-.083-.269-.166-.682-.408-.692-.408-.099-.062-.192-.134l-.211-.17-.01.02q-.099.134-.213.326-.005.005-.01.015.01.005.02.016.11.103.14.16.016.03.016.093 0 .015-.005.062 0 .046-.083.14-.078.087-.284.16-.17.061-.46.098-.083.03-.166.036l-.124.005q.109.046.212.098.238.109.284.155.031.052.031.13 0 .077-.04.284 0 .005-.006.01.15-.052.222-.052.119 0 .259.15.098.108.18.238.093-.062.192-.14l.258-.207q.264-.201.512-.428.237-.233.439-.491zm-1.339-.905.28-.072-.083-.036q-.026.005-.057.005-.062.01-.14.103zm.326-.217.015-.005-.01-.005q0 .005-.005.01zm-2.884-.739q.073-.093.124-.232.088-.243.088-.419v-.025q-.15.04-.274.067-.16.03-.335.03H3.18q-.005.347-.015.678l.418-.099zm.326 2.31q-.119.037-.227.083-.15.062-.341.124-.15.041-.28.041-.02.419-.046.75.346-.078.915-.181.02-.005.041-.005.041-.166.041-.3 0-.124-.051-.16-.047-.036-.083-.098-.031-.062-.088-.104-.02-.015-.041-.02l-.026-.016.119-.067q.03-.01.067-.047zm.28-1.054-.125-.088.227.073q.083-.01.155-.026l-.093-.073.016.01q.015.006.067.006.103 0 .3-.078.16-.088.16-.356 0-.12-.046-.186-.016-.016-.078-.016-.052 0-.176.016-.201.03-.827.19-.377.094-.45.094-.087 0-.18-.042-.005.254-.015.497.118-.078.258-.166l.108-.067-.19.14.299-.052-.274.114.284-.042q-.232.088-.232.124 0 .026.072.026.103 0 .61-.077l.13-.021zM14.678 276.085v.77h.057v-.775zm-.062-.832q-.118 1.282-.118 1.489v.056h.062q.118-.883.118-1.369v-.18zm2.264-1.948v.12h.062v-.12zm-.238-.351v.418l.119-.005v-.413zm-1.307-.155-.357-.114v.476q0 .465.057.832-.057.294-.057.775v.3l.414-.068.18-.005q.564.408.595.408h.057v-.594q0-.496-.652-1.002v-.12l.176-.004-.057-.114.176-.005-.057-.119.176-.005-.12-.175.358-.005.062-.42v-.531q-.626.434-.951.49zm5.059-3.84q1.132-.015 1.132.46 0 1.132-.894 1.147-.357.166-.357.243.176.233.357.827-.063.32-.063.537v.12l1.313-.321q.775.419.775 1.054-.15.48-.6.491l-1.544.026-.12 1.188.595-.01q.46-.005 1.07.935v.12q-.15.3-.476.304l-.294.005q-1.597.031-2.74.29v.056q2.673.548 5.117.745v.062q-.718.129-.95.428-.776.016-.776.373 0 .217-.413.304v.419h-.063q-2.95-.605-3.69-1.183-.46-.28-.95-.641h-.062q-.207.687-.713 1.147v-.062q0-.114.119-.419h-.062q-.295.404-.295.543h-.062v-.475q-.119 0-.238.361h-.175v-.056q.413-.858.594-1.437h-.062q0 .093-.238.243h-.175l-.476-.408v1.25q0 .062.057.057 0 .692-1.07 1.271l-.237.005q-.083 0-.838-1.235.062-.005.062-.062-.408-.29-.475-.29v-.061l.295-.005v-.057q-.176 0-.295-.233v-.062h.057q.455.29.894.404.3-.005.3-1.2v-.532h-.062q-.755 1.204-1.251 1.21-.269.005-.832-.755.31-.067.357-.067v-.062l-.419-.052v-.057l.18-.005v-.118l-.18.005v-.062q.382-.005 2.207-1.881v-.12q-.796.667-1.075.672-.713-.3-.713-1.116v-.3q0-.072.95-.552h.062l-.118.18v.176l.832-.49q-.057-1.19-.057-1.784l-.062-.294h-.057l-.124.062v-.119l-.119.062v-.18q.651-.843.837-.848.873-.016 1.132.635l.057.295q-.295.108-.295 1.256 0 .062.057.062l.3.051 1.488-.563q.915-.016 1.25.93.057 0 .057.062-.361.522-.475.543 0-.057-.062-.057v.238q-.119 0-.119-.176h-.119q0 .207-.294 1.137 0 .119.057.119.356.155.356.765-.057.697-.294 1.493.635.29.775.284-.181-.284-.3-1.064.16-.005.357.113v-.062q-.078 0-.3-.29l.062-.004q.113.057.18.057l-.123-.176.3.057 1.07-.02v-1.133h-.058q-1.209.32-1.431.326-.295-.274-.295-.889V273q0-.32.538-.723v.062l-.124.18.062-.004q0-.083.18-.181h.057l-.056.119h.056q.031 0 .181-.124h.057q-.119.248-.119.361l.062-.005q.109-.056.832-.19v-.657q0-.44-.18-.47l-.414.005q-.543.01-1.075-.636v-.119q.63-.904 1.132-.91 0 .026-.12.182v.056l.239-.005q.387-.005 1.669-.982zm-4.346 9.126v.12h-.062v-.12zM1.708 289.18v.113l.852-.243v-.114q-.17 0-.852.243zm5.886-.905v.114q.19 0 .284.051h.057v-.057zm.113-.233v.057h.114v-.057zm2.284-.894v.688l.057-.005v-.683zm.057-.29v.12l.057-.005v-.114zm-6.516-.056-.284-.052v.057q-.057.708-.057.744 1.431-.206 1.431-.594v-.63q-.822.47-1.09.475zm6.402-.739q-.056 1.1-.17 1.659.196 0 .227-1.261v-.398zm-4.283-.041v.8h.056v-.8zm-3.318.744q.057.708.057.744.17-.041.17-.46v-.687l-.057-.398q-.17 0-.17.801zm.403-1.034.114-.005v.062h-.114Zm-.057-.34v.682l.057.284q.114 0 .114-.114v-.17l-.057-.114h.113v-.062q0-.057-.056-.052l.056-.119-.056-.113q.056 0 .056-.057zm2.858-.11q0 .332-.062 1.432-.057 0-.057.057h.057q.119-.269.119-.574v-.914zm2.682.755v.057h.057l.29-1.266-.058.005q-.196 0-.29 1.204zm-2.227-1.162v2.056q.263-.005.573.217h.057q.512-1.669.512-1.891-.372.119-.512.119-.077.005-.63-.501zm2.744-.047q0 .755-.858 2.873l1.028.15q.496-.005.63-2.754v-.512q-.8.16-.8.243zm-5.432.78h.057q.703-.186.972-.19h.057l.289.05-.057-.283v-.744q-1.318.646-1.318.826zm.057-2.46.057.399v.175q.558-.18.687-.186l.46.109v-.801h-.062q-.682.129-1.142.305zm1.318-1.85q1.483.264 1.483.776.114.015.17.34-.258.115-.284.233v1.142l.517-.294.228.052q.108-.057.17-.062l-.114.175.114-.057.057-.005-.057.12v.056l.114-.005q.284-.005.284-.119 0-.677-.568-1.245h-.057v-.057q.584-.594.914-.76 1.2.398 1.2 1.582v.057h.056q.496-.124.801-.357 1.54.388 1.54.827.403.413.403.682v.057q-.615.108-.971 3.157-.248 1.778-.574 1.783 0 .274-1.085.59h-.114q-.134-.058-.455-.678-.79-.842-.857-.842h-.057q-.13.542-.858 1.276-.088-.227-.17-.227 0 .227-.176.232v-.346q-.305.238-.512.238.17-.29.17-.403l-.056.005q-.331.29-.574.294l-.398.005q.579-.46.858-1.044l-.346.005q-.393.295-.74.3l-.113.005-.176-.113q-.795.186-2.97.852-.683-.362-.683-1.245.615-.698.682-.698l.114.057q0-.057.062-.062v.057q0 .057-.062.062.088.227.175.222.114 0 .114-.114v-4.227q0-.238-.29-.455.176 0 .176-.118l-.175-.223.175-.005v-.113q-.175.005-.346-.223.29-.005.29-.118 0-.31.914-.703l-.062.119.062-.005q.109-.057.17-.057 0 .057-.056.057.057.17.114.17 1.41-.294 1.829-.604zM17.133 285.474q.233-.16.295-.29l.01-.051-.264.108q-.01.037-.015.068-.031.15-.083.253-.046.103-.15.129-.098.02-.3.186-.139.109-.284.233l.347.082q.361.098.475.186l-.098-.077q-.109-.083-.274-.166-.165-.087-.341-.108l.083.005q.077.005.196.02.119.01.243.047.129.031.227.088l-.026-.036q-.025-.036-.082-.078-.057-.046-.14-.077l.181.02q.18.021.434.13.574.263.853.496.258-.615.274-.853h-.057q-.052 0-.052.067-.186-.16-.362-.175l-.273-.383q-.166.13-.259.155-.062.01-.124.01t-.119-.01q-.051-.01-.113-.01-.093 0-.202.031zm-4.206.858q-.14 0-.192-.166-.108-.434-.532-1.503-.103-.285-.103-.486 0-.13.072-.295.078-.17.227-.284l.073-.072q.103-.109.413-.212l.305-.088.036.078q.042.098.067.186.27-.042 1.473-.305v-.078q0-.155-.03-.434-.15.052-.29.103-.476.181-.698.3-.088.041-.17.041-.093 0-.217-.067-.124-.072-.254-.227-.124-.16-.19-.28-.032-.046-.052-.066-.047-.073-.047-.155 0-.109.067-.295.026-.057.155-.16.181-.135.61-.408.16-.104.186-.13l-.145.17.233-.066-.212.14.222-.052q-.175.098-.175.155 0 .02.04.02l.068-.005q.088-.015.682-.165-.067-.33-.098-.465-.01-.036-.072-.057-.057-.026-.124-.041-.062-.021-.114-.042-.047-.02-.047-.051 0-.021.042-.052.077-.057.17-.145l.181-.18q.093-.094.155-.16l.057-.063.114-.005q.113-.005.274-.015.16-.016.305-.037.144-.02.206-.046.016-.005.036-.005.031 0 .073.036.046.036.093.109.051.072.088.15.036.072.051.108l.005.026q-.005 0-.015.046-.005.042-.02.295l-.006.212q0 .02-.005.041.625-.165.682-.201l.01-.005q.047-.037.062-.037.021 0 .052.01.109.026.269.135.14.098.263.212.124.108.145.17.02.057.026.197 0 .14-.057.3-.057.155-.217.263-.155.103-.434.103h-.109q-.418 0-.863.083-.02.13-.046.269l-.057.315.134-.03q1.561-.352 1.628-.352.176-.093.507-.155.113-.021.212-.021.196 0 .34.083.192.129.321.377.093.18.186.527h.005v.031q.026.098.052.212.01.041.01.083 0 .129-.113.377l.258-.005v-.491q-.165-.977-.47-.966v-.124q.78-.626.945-.63.615-.011.951 1.084v.491l-.052.12h.052q.558-.12.946-.445 1.426.553 1.426.96.315.394.315.662-.578.01-1.266 4.806-.739.998-1.37 1.008h-.05q-.094-.016-.58-.91-.646-.723-.739-.718v-.067h.052l.264.062.051-.005v-.062q-.372-.078-.739-.357-.087.341-.79 1.06-.078-.248-.155-.243 0 .18-.109.186h-.052v-.062l.052-.31q-.33.315-.527.315l.212-.429q-.393.31-.579.315l-.444.01.01-.061h.01q.362-.093 1.163-1.323-.155.01-.346.02-.465.026-.966.068-.062.356-.062.826v.243q.005.17.015.383.01.206.016.243v.025q0 .166-.192.491-.186.331-.65.574-.239.108-.378.108h-.072q-.073 0-.14-.077-.062-.072-.103-.17-.114-.233-.434-.543-.259-.248-.61-.46l.269.052q.289.062.325.082-.15-.108-.413-.175-.259-.068-.584-.27l-.114-.066.114.03q.108.037.263.073.352.088.491.088.057 0 .057-.005 0-.016-.165-.078-.615-.227-.74-.454l.207.082q.207.088.497.186.537.192.8.192.083 0 .145-.021.202-.109.233-.64.015-.249.015-.538v-.042q-.372.068-.64.16-.595.238-.972.43-.429.222-.594.222h-.026q-.155-.042-.362-.186-.207-.145-.258-.403l-.036-.217q-.026-.14-.026-.233 0-.062.03-.098.047-.052.3-.305.259-.258.548-.538.29-.279.434-.387.145-.109.326-.217.155-.098.284-.17-.15-.026-.34-.026l-.166.005.392-.233q.553-.326.626-.326.372.078.666.202.083-.114.176-.233l.537-.702q-.428.14-1.126.553-.18.108-.28.16-.314.155-.495.155-.135 0-.233-.083-.062-.052-.113-.201-.047-.15-.088-.32-.036-.177-.057-.306l-.02-.129.392.119-.434-.367.356.119-.242-.243q-.166.046-.285.077.202.569.202 1.215v.057q-.424.553-.718.553zm.258 2.594q.02 0 .072-.036.073-.052.45-.202.377-.155.822-.305.382-.129.64-.18v-.01q-.268.025-.671.144-.466.134-.853.284-.388.145-.434.196-.042.052-.042.083 0 .026.016.026zm8.247-.672q.16 0 .264-1.659-.103.005-.264 1.66zm-1.477-2.914-.155.733v.068h.051q0-.073.264-.807zm-.791 2.77q.92.232 1.266.227l.264-.005q.423-.248.635-3.323h-.057q-1.054.134-1.054.574-.263.91-1.054 2.527zm-2.078-3.499q.114-.155.207-.341.109-.217.109-.414 0-.103-.031-.201-1.08.088-1.995.315-.91.222-1.509.414l-.13.04.058.027q.119.046.3.046.34 0 1.105-.253.388-.124.564-.15h.01q.29-.16.424-.16.03 0 .051.01l.155.073q.455.17.564.387.046.098.113.196.006.005.006.01zm-1.038 1.762q.207.202.33.398.078-.005.15-.005l.31-.005q.13 0 .212.005l.083.005q.098 0 .098-.03 0-.032-.067-.115-.067-.088-.191-.19-.124-.104-.269-.166l-.367-.155q-.072.062-.145.129-.077.067-.144.13zm-1.09.594q-.099-.186-.249-.372l-.129-.155-.03-.02-.104.067q-.946.589-1.018.739-.047.098-.093.144-.02.026-.02.031v.01h.004q.026 0 .233-.066.6-.223 1.405-.378zm-.435-.558-.036-.02q-.108-.062-.258-.093l-.052.04q-.9.72-.9.786 0 .01.006.01.026 0 .29-.18.273-.197.563-.357.253-.134.387-.186zm1.421-5.818.006.01q0-.005-.006-.01zM15 283.138q0-.005.005-.005h-.005z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="matrix(1.44281 0 0 1.47142 -.144 -394.16)"/>
    
    </g>
    
    </g>
    
    </svg>

    

    `;
}