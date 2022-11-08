export default function getSvg({fill = "#ff00ff", stroke = "#000000", resize = 2}) {
    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${Math.round(800 * resize)}"
        height="${Math.round(108 * resize)}" 
        opacity="1"
        fill="${fill}"
        stroke="${stroke}"
        viewBox="-5 -5 66.356 22.229"
    >
    
    <g aria-label="让她那里水流不止" style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <g aria-label="純草本中藥，一粒下去又硬又CU！" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M27.22 288.977v.057l.811-.015v-.057zm-.574-.046.693-.016.573-.067v-.057l-1.152.021q-.114.02-.114.119zm-1.447-1.189v.176q.595.796.869.79v-.056q-.812-.486-.812-.91zm-.17-.573v.17h.057l-.057.12v.345l.114-.005v-.227l-.057-.403zm-3.695-.052h.057v.17q.026 0 .17-.118h.057q0 .217.522.336l.057.29q-.326 1.105-.806 1.11-.667-.34-.693-.563.3-.424.636-1.225zm3.638-.18v.175q.114 0 .114-.119zm-2.429-.3.12-.005q.516-.01 1.208 1.018-.237.558-.578.76l-.347.004q-.635-.444-.635-.852 0-.383-.285-.63h.057q.109.056.17.056l-.056-.119h.176l-.062-.114.29-.005zm3.406-.233v.114q.093 0 .232-.238l-.113.005q-.12.02-.12.119zm1.214.496q-.114 0-.114-.114l-.232.12v-.114l.057-.12h-.057q-.243.182-.46.187l.17-.295q-.516.222-.516.3v.114q0 .925.403.914 0 .12.403.109l.403-.005q.982-.016.982-.595l-.17-1.266q-.786.75-.869.765zm-5.658-1.52h.056l.403-.061-.113-.233.29-.005-.058-.113h.114v-.057l-.057-.12q.29-.004.29-.118-.057 0-.057-.057l.346-.005q-.057-.227-.057-.403-1.116.982-1.157 1.173zm2.485-1.715v.057l.114.29-.057.289q.227.744.227 1.033l.233-.005v-1.617zm1.959-.325v1.736q1.1-.155 1.1-.543.114-.377.114-.522v-.284q-.29-.403-.46-.398l.057-.119zm-1.266-3.67.516.047.347-.062q.201.615.868.91.191.051.232.227l-.289.636q1.039.217 1.039.733l-.347.93q.435-.294.58-.3 1.095.27 1.095.848 0 .14-.403.76-.233.811-.233.925h.114q.315-1.1.408-1.106v.119q0 .723-.579 1.741.207.088.403.858h.057v-.119l-.113-.573v-.057h.056q.233.656.233.801h.057v-.29h.057q.268.802 1.038 1.37v.17q0 .626-.982 1.06-.537.005-2.31-.078-1.384.026-1.384.372-.982-.382-.982-1.658.403-.43.403-.698v-.522h-.057l-.693.243q-.139.005-.635-.45-.145.005-.75-.274-.465-.108-.578-.108-.088.005-1.215.31v.057h.062l1.096-.248q.098.057.232.051v.057q-.904.021-1.793.729-.108.057-.17.057v.119l.057-.005q.113-.057.17-.057 0 .14.465.455-.579 1.658-.692 1.855-.29.005-.29.124-.45.005-.692-1.085v-.057q0-.207.574-.879l.289-.408q-.636.01-.982-.91 1.282-.465 1.907-1.53h-.057q-.837.42-.925.42h-.057q-.48.01-.75-.796v-.057q0-.388.983-.884.863-1.473.863-1.69v-.17q-.17-.341-.346-.341v-.114q.077 0 .81-.418.616-.01 1.153.785l-.579.703q0 .129-.516 1.281.113-.062.17-.062.114.057.176.057.346-.47.346-.703v-.17h.057q1.039.165 1.039.444l.057.403v.114q.232-.062.408-.067-.579-.615-.579-.91.594-.765 1.214-.775h.057l-.119.176q.021.114.12.114h.056v-.233q0-.057-.057-.057l.057-.113v-.693q-.346-.398-.403-.398.548-.935.636-.935zM37.819 287.18v.05l1.648-.03v-.052zm.821-.28v.052l.662-.01v-.052zm-.325-.098v.052l.325-.005q.042 0 .331-.057v-.057l-.217.005q-.052 0-.44.062zm-5.933-.264v.052l.114-.005q.62-.326.713-.326 0-.103-.113-.103-.657.377-.714.383zm1.427-.134-.109.005q-.387-.098-.44-.098-.769.34-.82.537h.056q2.362-.356 2.522-.408v-.057q-.052-.31-.165-.31-.9.33-1.044.33zm2.144-.615v.057q.202-.005.331.098v-.052l-.165-.103zm1.809-.083q-.269.372-.605.378l-.274.005q-.263.005-.547-.145.108.17.108.31 1.018-.067 1.483-.078l.548-.01v-.052q-.418-.413-.713-.408zm.057-.155v.104q.18-.005.274.046h.057v-.052q-.295-.103-.331-.098zm-3.68-2.036v.207h.057q.253-.005 1.592-.238.987.207.987.403v.104q0 .222-1.318.496-.553.325-.878.33l-.217.005.051.259q.217 0 1.923-.398.098-.005.496.15.093-.197.165-.74-.057-.847-.165-1.048-.646.062-2.693.47zm1.592-1.292v.052h.165v-.103q-.103.051-.165.051zm-.382-1.359q0 .264-.662.75v-.212q-.439.01-.439.532l-.217.636.108.051q1.427-.237 1.427-.553-.372.217-.657.223l-.382.005v-.052q.455-.005 1.26-.806-.381-.078-.381-.574zm1.808-2.129q.91-.015 1.101.77 0 .119-.33.424l.273-.005q.233-.005.662-.17 1.152.315 1.152.924v.052q-.077.636-.382.64l-.553-.046q-.636.17-.822.176.44-.336.44-.377-.058 0-.166-.052-.506.326-.605.326.388-.341.388-.372-.729.01-1.044.646-.44.31-.44.377.378-.114.657-.114l.057-.005q.76-.01 1.152 1.349-.496.325-.496 1.002-.067.005-.325 1.215.16 0 .439.098h.052v-.052l-.217-.051v-.052h.051q2.305.49 2.305 1.22 0 .397-.6.692-.061 0-.165-.047-1.524-.025-2.527-.01l-.93.016v.367q0 .511.109 1.943 0 .248-.987.91-.404-.43-.662-1.04.109-.175.109-.32v-.052l-.052-.103q.165 0 .165-.109v-1.364q-.155.005-.661.17-.191-.051-.217-.051-1.87.367-1.87.558v.052q.583-.269 1.87-.553l.051-.005v.057q-.558.113-2.082.61-.992-.238-.992-.926 0-.16.057-.16 1.622-1.183 1.865-1.188v-.052l-.165-.207v-.051q0-.243.33-.533v-.051q0-.6-.713-2.3v-.052q0-.196.548-.377-.052-.207-.052-.367-.48.326-.826.33h-.052q-.527.011-.992-.924-.052-.088-.052-.264.103-.113.987-.49v.051l-.057.109.114-.005-.057.108h.109l.77-.227v-.104q0-.511-.44-.935v-.057h.274v-.056l-.108.005v-.052l.165-.005v-.052l-.057-.103q.042 0 .33-.062l-.056-.104v-.051l.222-.005q.961-.016 1.318 1.137.284-.062.326-.062.098.01.439.258v-.109q.222.104.387.099l-.387-.305.057-.005q.098.051.217.051-.109-.129-.109-.155l.274.047.605-.01.274-.057v-.315q0-.403-.491-.569.764-.486 1.038-.49zm.77 2.662q0 .108-.108.108h-.057q.02-.103.114-.103zm.331.103v.052h-.108v-.052zM46.981 287.22q.005.13-.093 1.106l.005.17h.057l.093-1.162v-.119zm-.351-.17.025 1.22q.114 0 .16-.584-.061-.305-.067-.58v-.056zm.764-2.568.026 1.276q.073 0 .58-.067.371.108.47.108-1.014-1.317-1.076-1.317zm-1.57-.031q-.016.48-.951 1.819l.056-.005q.988-.109.982-.248l-.03-1.566zm-.01-.641q-.41.915-.667 1.638h.056q.45-.75.667-1.581v-.057zm-1.866-.083.005.176q.692-.357.692-.419h-.062q-.072 0-.635.243zm3.937-.94v.056l1.339-.02q.113 0 .113-.12l-.289.006q-.377.005-1.163.077zm.75-.362v.057l.578-.01v-.057zm-.238-.17v.061q.119-.005.119.052l.114-.057.294-.005-.005-.119q-.31.068-.522.068zm-3.163-1.163.12-.005v.062h-.12zm2.79-.166q0 .135-.283.527l.76-.01-.006-.062q-.103-.227-.47-.455zm.053-.175.005.118q.062-.005.175.052l-.005-.057zm-1.251-1.489q.072 0 .894.915.103-.005.475.512.026 0 .233.056-.005-.118-.176-.113l-.005-.057h.062q.713.098 1.643.842.295.295.3.517l.005.233q.01.599-.858.713h-.175q-.491.01-1.452.082 2.589 2.383 4.067 2.951.754.455.997.45l.005.056-.584.01v.058q.527.108.527.222l-.057.005q-.465.005-1.105-.042h-.057v.057q.47.109.584.109v.057l-.868.015v.057l.408.052v.062q-.284.005-.698.067l.005.057q.507.051.58.051l.004.057q-.418.005-1.095.486-.31.005-1.421-1.199.005.233-.17.238-1.07.077-1.334.082l-.057.114.031 1.628q.016.698-1.07 1.643-.723-1.24-.733-1.788 0-.052.108-.465l-.067-.29q.176-.004.17-.294l-.005-.232h-.057l-.925.31q-.366-.037-.821-.336-.63.558-.801.65l-.057.006q-.005-.176-.119-.176 0 .119-.114.119h-.062v-.057q.057-.113.057-.175-.222.18-.522.186.228-.264.228-.295-.295.176-.58.18l-.464.011v-.057q1.209-.496 2.444-2.831.45-.776.445-1.055h-.057q-.558.3-.75.305-.6-.227-.708-.568-.005-.078-.129-.636.879-1.142 1.71-1.716.347-.237.46-.242-.97.837-.97.888h.056l.92-.599h.113q-1.023.682-1.08 1.008.683-.243 1.675-.496l-.005-.29q-.249-.692-.254-1.038l.052-.295h.057l.067.29.114-.063q-.186-.542-.186-.635l.29.057.056-.12v-.118l-.062-.114.29.052.294-.005q.29-.005.284-.119zM55.968 283.5l-.114.005q.13.734.134.966l.114-.005.005.062-.114.005v.057l.285.041.005.057q-.233.01-.228.124h.057q.32-.015 1.597-.18l-.026-1.432zm3.829-.563-.517.02q-.114.026-.114.12l.031 1.317h.057q1.483-.135 1.483-.238l.202-1.21-.517-.092q-.387.072-.625.083zm-1.98-3.923q1.55.15 1.561.502-.222.273-.191 1.788l.016.682q1.71-.243 2.392-.558 1.323.289 1.333.8v.057q.01.295-.594 1.458-.108.34-.103.578.206.099.294.331-.212.868-.842.894-.284.016-.687-.026-.646.083-1.489.12l-.284.015.073 3.431q.02.842-1.117 1.307l-.17.005q-.641-.336-.656-1.23.325-.702.315-1.214.046-.45.03-1.38l-.02-.739h-.057q-.563.026-2.279.496-.387.021-.93-.702v-.057q-.005-.13.212-.584-.005-.398-.558-1.98-.01-.666 1.359-.914l.17-.01q.233.103.238.336 1.514-.181 1.768-.248l-.01-.574q-.032-1.478-.218-2.052zM72.24 288.218q.93-.016 1.36 1.049 0 .46-.74.806-.79-.243-.79-.78-.506-.522-.506-.553.025-.005.222-.062l-.057-.114h.17l-.056-.114q.046 0 .34-.062l-.056-.113zm-6.562.455.113-.005q.145 0 1.36-.248v-.114q-1.473.212-1.473.367zm7.467-2.564h.114v.057l.113-.005q1.468.228 1.468 1.22-.295.625-.677.635-1.178-.036-1.923-.025-.48.01-1.53.082.058 1.35.115 1.525-.507 1.028-1.354 1.044-.14 0-1.075-1.168-.341-.13-.341-.222l.284-.005v-.057q-.398-.14-.398-.274h.057q.615.325 1.132.315h.17q.114-.372.114-.512v-.454l-.057.005q-1.643.165-1.643.31v.057q.113.361.113.506v.057q-.34 1.25-.677 1.256l-.227.005q-.62-.512-.62-1.065 0-.088.563-.687v-.057q-1.256.305-1.581.31-.398-.429-.398-1.24.134-.331.682-.63-.114-.207-.114-.45v-.626q0-.082.223-.17.103.052.227.052.47-.496.512-.801-.223.118-.626.124l-.392.005q-.171-.031-.171-.45v-.336q.506-.403.506-1.312-.222-.336-.222-.502v-.056q.016-.114.114-.12 1.41.223 1.41.884 0 .352-.449.91v.057l.28-.005q0-.285.397-.796l.114-.005q.62.16.62.33 0 .192-1.018 1.825 0 .057.057.057l.227.108v-.506q.062 0 .17-.062.088 0 .734.439l.057-.114v-.45q0-1.343-.455-1.973.042-.171.228-.228.098-.005.34.109l.058-.12v-.165l-.057-.113q.114 0 .114-.17 0-.233-.17-.905h-.058q0 1.302-.734 1.318-.423-.28-.568-.274v-.625l-.057.005q-.527.346-.79.35-.44.006-.962-.945l-.057-.336q.052 0 .962-.527v.057l-.057.114q.057.108.057.17.702-.237.847-.243v-.056q0-.243-.45-.73l.28-.004-.052-.109q.165-.005.165-.118-.057 0-.057-.052l.285-.062-.057-.114v-.057h.114q.795-.015 1.131.657 0 .17.114.17l.057-.005q.124 0 .227-.057.243-.005.62.553.098.057.228.052 0-.036-.285-.279h.114l.114.057v-.057q-.114 0-.114-.114h.057l.336.052q.403-.067.682-.067v-.626q0-.19-.512-.5v-.058q.104 0 .962-.465l.113-.005q.961.212.961.775v.114q0 .207-.335.574l.113-.005q.052 0 .052-.057l.114.057.682-.181q1.075.32 1.075.997 0 .352-.285.626l-.511.01q-.817.13-.848.13 0-.037.341-.347v-.057q-.119 0-.733.351.392-.34.392-.403H71.9q-.578.01-.79.636-.584.636-.734.636v.056h.114l.279-.062q.439.099.852.776-.056.098-.056.227h.056q.186-.005.62-1.82h.057q.682-.015 1.189.885v.056q-1.189.993-1.189 1.034.228.114.228.336h.057q.335-.362.335-.853l.114-.057.057-.005q1.075.331 1.075.775v.057q-1.36 1.266-1.468 1.271v.052h.109q.723-.067.796-.124l-.057-.284v-.17q0-.13.279-.176 0 .227.398.279.563.517.563.95v.057q0 .316-.45.517l-.398.005q0-.16-.17-.279-.408.005-2.036.15-.336-.109-.336-.393-.253.403-.341.403-.258.005-.341.574 2.051-.15 2.604-.274l-.113-.165.113-.005-.056-.109h-.114zm-4.977-.025q0 .361-.563.8-.32.006-.568-.444-.92.584-1.132.59v.056l.114-.005-.057.114v.057h.17l3.111-.341v-.114l-.113-.507-.057.005q0 .238-.45.403-.34-.165-.34-.614zm2.207-.15v.057l.284.046v-.108zm.114-1.644q0 .373-1.36.533.094.563.171.563 1.018-.243 1.245-.248v-.848zm.96-.242v.733l-.056.683q.517-.01.79-.75-.134 0-.733-.666zm-2.49-.58h-.114v.058q.114.351.114.563.827-.181.961-.243.47.093.625.217-.077-.847-.227-.842h-.057q-.94.243-1.302.248zm.734-.976v.114h.057v-.114zm1.359-1.095-.057.113v.057h.057q0-.062.057-.17zm-2.486-.016q0-.057-.057-.165-.098.057-.227.062v.222l.284-.062q.052 0 .905.496l.17-.227v-.057q-.455-.166-.455-.9-.434.533-.62.631zm3.39.284v.057h-.113v-.057zM78.778 287.045l.067.02q.413.099.516.481l.031.093-.005.248-.026.047q-.103.604-.558 1.033-.263.253-1.038.553.284-.372.361-.512.083-.14.181-.372-.517-.02-.656-.537l-.02-.036.005-.248q.015-.057.025-.057.114-.532.672-.677l.109-.031zM100.506 283.2q.765.382.776.522v.475q-.135.714-.595.724-.94-.16-1.55-.15l-.295.005q-3.56.062-6.428 1.302-.408-.093-1.075-1.173v-.057q0-.413 1.075-.914.238.088.238.175-.12.021-.12.12h.058q2.516-.517 7.916-1.03zM22.403 299.667v.832h.062v-.832zm-.12-.65v.118q0 .475-.056 1.132v.056h.057q.062-.18.119-1.431-.12.02-.12.124zm4.047-.254v.062l.124-.005v-.057zm-6.547 1.72q.553.29 1.37.455.299-.005.299-1.55v-.537q-1.054 1.157-1.67 1.633zm2.976-3.916v1.188l.419-.067h.176q.625-.01.837 1.116-.12.238-.12.419l.058-.005q.863-.191 1.131-.197v-.118q-.713-.155-.713-.703 0-.3-.537-.884l.3-.005-.062-.119q.118 0 .118-.119-.056 0-.056-.056.294-.005.294-.124-.827.01-1.008-.522l-.062.005q-.584.186-.775.19zm1.964.201v.062q.837-.015 1.075.755.057.103.057.237v.533q-.093.537-.533.547v.057h.12l.594-.072v-.057l-.3.005q1.013-.76 1.013-2.041-.083-.005-.238-.295.269-.108.475-.424h-.119q-.63.01-2.144.693zm-1.902-3.121v.537h.057q0-.119.18-.418l-.061-.3q-.083 0-.176.18zm-3.276-.357.119-.005q0 .207.775.879.088 0 .537-.124v.057q-.062.118-.062.18.031 0 .181-.124v.062l-.119.3h.057l.181-.124v.119q-.062.114-.062.18l.119-.061h.062v.057q-.067.656-1.013.671-1.07-.206-1.07-.81 0-.435.295-1.257zm1.845-1.106h.062q1.545.31 1.545 1.044l.119.057q.31-.3.537-.305.636.579.832.817 0 .49-1.426 1.276h-.062l-.238-.114v.238l.238-.062q.537.13.656.284.553-.305 1.25-.558l-.061.12q.124.02.124.118-.124.02-.124.119h.124q.258-.005 1.664-.269v-.057q-.202 0-.538-.17-.744.134-.832.134h-.056v-.057q.547-.248.594-.248v-.062q0-.119-.119-.119l-.062.005q-.444.305-.594.305 0-.119.537-.367v-.119l-.3.068.238-.243q-.103-.057-.238-.057v-.057l.181-.005q0-.134-.718-.346v-.057q.176-.005.3-.243l-.181-.237q.212 0 1.25-.14 1.013.33 1.013 1.173 0 .357-.413.842l.057-.005q.8-.129 1.25-.315.465.166.894.698v.057q0 .687-1.075.852v.062q.362.073.719.46-.083.486-1.132 1.985v.062q.057 0 .057-.062l.238.056q.904-.315 1.074-.315l.176-.005q.775.636.775 1.235-.108.367-.418.605-.786-.166-2.558-.197-1.427.026-3.096.77-.537-.108-.537-.702v-.837q0-.12-.357-.171v2.083q0 .935-1.188 1.39h-.062q-.093.005-.89-1.055-.366-.232-.418-.232v-.057l.176-.005q.119.057.18.057 0-.103-.655-.284l-.176-.176h.057q.268.114.656.165h.062v-.062q-.997-.46-1.25-.454-.3-.27-.3-.827 2.015-1.83 2.439-2.718h-.057q-.692.19-1.55.5-.357.006-.832-.578 0-.558.95-1.028 0-.062.063-.062.015.119.119.119l-.062.118v.057q1.42-.382 1.43-.501 0-2.496-.536-2.486h-.12l-.118.062v-.18l-.057.004q0 .176-.243.357v-.057q0-.49.894-.966.02-.119.119-.124zm3.633 2.496v.062h-.12v-.056zM37.26 295.481q1.674.476 1.674 1.282v.274q-.057.656-.636.667-.573-.212-.692-.207-.3.057-.574.062l.114-.166v-.051h-.114l.114-.166h-.114l.057-.273-.119.005.12-.166v-.114l-.523-.589v-.056l.29-.166-.057-.108.29-.062-.058-.109q.228 0 .228-.057zm1.038-2.749q1.964.222 1.964 1.06.114 0 .114.268 0 .564-1.096.729-.95-.093-1.901-.072-.538.01-1.447.134v.052q.408.03.408.16v.052q-.233.186-.233 1.643v1.256q0 1.059.057 2.945 0 .512-1.21.951h-.056q-.455.01-.692-.806v-.382q.346-.197.346-1.21v-.816q-.047-3.494-.29-3.488-2.247.692-2.366.697h-.176q-.351.005-.687-1.297 0-.15.863-.889h.056l-.056.109q.113 0 .113.108l.12-.056h.056l-.119.165v.052h.176q1.958-.362 3.922-.615 2.103-.31 2.367-.424v-.057q-.202-.052-.233-.046v-.057l.176-.005v-.052q-.176 0-.176-.108zM47.936 300.7v.058h.109v-.057zm-2.052-.573h.052q.558-.232 1.168-.243.14 0 .553.104v-.057q0-.14-.775-.817-.073 0-.998 1.013zm1.106-1.126.28.051h.056v-.057q-.088 0-.222-.108-.114.02-.114.114zm-1.994-.465v.056h.113v-.056zm4.49-.63v.056l1.607-.031v-.057zm.775-.29v.051l.667-.01.057-.108h-.057q-.393.062-.667.067zm-.222-.166v.057l.388-.005.279-.062v-.057l-.388.01zm-5.488-.842.114-.005v.057h-.114zm2.217-.372q-.052.687-.052.718.109 0 .109-.113v-.61zm2.661-.269.114-.005v.057h.052q.098 0 .336.103v-.051q-.217-.166-.336-.16v-.057h-.166v-.052l.166-.005v.057l.114-.005q.35.108.387.108l-.108-.165q2.16.682 2.16 1.457 0 .32-.61.729v.057q-.109-.052-.165-.052-4.326.15-4.326.351.166.274.166.44-.057.005-.057.056l.279.052h.057l-.057-.108v-.057l.387-.005-.108-.222h.052q1.105-.021 1.612 1.08.677.888 1.106 1.808-.28.894-.667.9-.212.17-.44.175h-.056q-.997-.532-.997-1.147-.217-.44-.28-.44l-.222.006q-.527.175-.666.175-.357-.103-.496-.098-1.328.44-1.328.574l1.27-.408q.1.051.223.051v.109h-.057q-.852.015-1.659.971-.206.17-.387.176h-.114q-.94-.28-1.498-.806 0-.109-.052-.109 0-.274 1.054-1.235.543-.615.997-1.628l-.279-.046q-.925.18-1.772.47v.17q.9-.408 1.83-.588h.051v.056l-2.046.646q-.89-.284-.89-1.152v-.165q1.623-1.4 2.275-1.592h.051v.057q-.868.48-1.049.739h.052q.987-.574 1.168-.58h.051v.058q-1.22.553-1.22.852 1.448-.304 2.497-.485v-.28q0-.03-.496-.433-.264.186-.61.232 0-.098-.444-.326l-.559-.707v-.114q0-.62.946-.956 0-.057.388-.233.098.057.222.052l-.057.114h.114v.051q-.17.005-.17.114l.5-.005q.11-.005.11-.114 0-.863-.497-.987v-.056q0-.223.61-1.122l.496-.005q.14-.005.501-.119.181.48.718.925l.057.336q0 .31-.108.832.63-.124.827-.238.439-.005 1.167.755v.057q0 .889-2.33.925 0 .057-.057.057l.114.997q2.03-.145 2.935-.16v-.114q-.429-.49-.662-.486v-.056l-.113.005zm-3.989.403q.403.212.444.212l.052-.114v-.387l-.052.005q-.418.15-.444.284zm3.824-.454.114-.005v.056h-.114zm-2.827-.01v1.053h.057q.109 0 .109-.113v-.274l-.057-.667zm-1.328-1.69.109-.006v.057h-.109zM59.01 293.347q.874-.015 1.427.987l.062.357q0 .511-.476.78-.718 1.38-1.075 2.341l.12-.005q.774-1.442 1.074-2.222h.057q0 .062.062.062 0 .734-1.075 2.398v.119q4.465 2.18 5.359 2.165v.062q-.372.005-.894.072v.062q.124 0 .837.103v.062q-.067 0-.181.062-.997-.04-1.55-.03l-.295.004v.057q.817.104.894.104v.062l-1.431.02v.062l.713.047v.062l-1.07.134v.062q.3-.005.894.041v.062q-.579.01-1.788.564-.672.015-2.914-2.088h-.062q-.807.93-1.664 1.338l-.12-.237-.299.186h-.119q.181-.3.181-.419-.18.202-.894.315l.413-.485q-.578.31-1.007.315-.078 0-.6-.047v-.062q1.003-.015 2.92-1.896l.057-.119q-1.478-1.462-1.845-1.457l.062-.3-.3-.052q.238-.268.238-.3h-.176v-.175q.58-.786 1.07-.796h.062q.258-.005 1.189.992.113.109.832.522.837-1.545.837-1.741h-.062q-.336.005-1.907.511-.32.005-1.189-.935l.238-.238v-.062q-.357-.051-.357-.17.9-.016 3.633-1.256zM70.374 298.887q.067.212.429.207l.052-.274-.052.005q-.057.051-.43.062zm-3.111-1.308q.16.45.212.92l.377-.005-.057-.49q.057-.3.057-.435l-.108-.051-.378.005zm5.147-.413v.16l.212-.005q0-.077-.16-.16zm-6.33.052-.16.496-.11-.052q-.531 1.065-.531 1.147.279-.005.532-1.095h.057v.217h.051q.217-.59.217-.656v-.057zm4.557-.186v.165q0 .109.378.207v.057h-.16v.108q.32-.005.32-.44-.29.006-.538-.097zm-1.338-.191q0 .134-.269.708-.051.785-.051.873.098-.005.429-.61.103 0 .103-.108 0-.15-.16-.869zm1.235-.46v.056l.103-.005v-.051zm-.108-.595q0 .378.108.378.75-.01.75-.176v-.326h-.052q-.12.005-.806.124zm2.196.233q.346.263.429.263v.109q0 .16-.533.336l-.056.325v.057q.088 0 .429.104l-.212-.217q.697-.01.697-.993v-.65l-.377.01q-.377.005-.377.656zm-5.416.527h.109q.439-.005.806-.501.346-.005 1.126.47v-.109q-.429-1.173-.429-1.297-1.023.202-1.023.29zm5.633-4.496q1.075.135 1.075.796-.362 1.09-.646 1.096-.59.01-.75.067 0 .077.32.32.859-.232 1.127-.238h.109q.594-.01 1.127 1.447v.109q0 .052-.326.222l-.48 1.53.051.325q0 .817-2.253.858l-.16 1.25q2.108.89 3.488.864.537.206 1.178.253V301q-.661.067-.697.067v.057q.087-.005.645.04v.058l-.268.056h-.052q-.351.005-1.075.073v.057l.377-.005v.108h-.16l-.646.067v.052l.59-.01v.056q-.171 0-.807.124v.052l.646-.01v.057q-.387.005-1.235.506l-.212.005q-.687-.14-2.093-1.214h-.051q-.465.878-1.287.894-.057-.104-.057-.16l-.269.222h-.051l.108-.331-.057.005q-.31.274-.589.279l.217-.33v-.052q-.45.33-.754.336l-.16.005q-.109 0-.109-.109.822-.434 1.721-1.716-.522-.46-1.292-.899 0 .078-.16.166l-.16.005q-.223 0-1.825.356-.697-.341-.697-.915.377-.093.377-.273l-.212-.543q-.325.305-.754 1.752-.3.362-.48.444l-.27.005q-.697-.594-.697-1.023v-.109h.16q.336-.005.75-.992.253-.392 1.234-2.304l-.268.062q-.424.005-.858-.75v-.16q0-.419.966-.889.104.052.16.052-.108.18-.108.274h.057q1.829-.414 2.093-.579.434.124.8.584v.052l-.051.274q.32-.223.91-.233l.16-.005q.03.217.165.217l.48-.062v-.057l-.217-.212q.176-.113.27-.113v-.057q-.874.015-1.34-1.225.766-.775 1.396-.785h.052v.051q-.212.031-.212.17 0 .078.263.156.6-.01 1.721-.625z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="translate(-4.465 -148.671) scale(.53525)"/>
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M81.748 293.347q.873-.015 1.426.987l.062.357q0 .511-.475.78-.719 1.38-1.075 2.341l.119-.005q.775-1.442 1.075-2.222h.056q0 .062.062.062 0 .734-1.074 2.398v.119q4.464 2.18 5.358 2.165v.062q-.372.005-.894.072v.062q.124 0 .838.103v.062q-.068 0-.181.062-.998-.04-1.55-.03l-.295.004v.057q.816.104.894.104v.062l-1.432.02v.062l.714.047v.062l-1.07.134v.062q.3-.005.894.041v.062q-.579.01-1.788.564-.672.015-2.915-2.088h-.062q-.806.93-1.664 1.338l-.119-.237-.3.186h-.118q.18-.3.18-.419-.18.202-.893.315l.413-.485q-.579.31-1.008.315-.077 0-.599-.047v-.062q1.003-.015 2.92-1.896l.057-.119q-1.478-1.462-1.845-1.457l.062-.3-.3-.052q.238-.268.238-.3h-.176v-.175q.579-.786 1.07-.796h.062q.258-.005 1.188.992.114.109.832.522.837-1.545.837-1.741h-.062q-.336.005-1.907.511-.32.005-1.188-.935l.238-.238v-.062q-.357-.051-.357-.17.9-.016 3.633-1.256z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="translate(-4.465 -148.671) scale(.53525)"/>
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M88.57 301.667q-.321-.015-.58-.201-.713-.59-.888-1.623-.057-.351-.073-.708-.03-.434-.03-.811 0-.336.025-.672.036-.372.124-.74.072-.356.207-.692.186-.45.506-.8.295-.352.662-.62.305-.238.671-.347.176-.036.393-.036.176 0 .352.026h.015q.765.067 1.065.377.155.201.155.46v.052q0 .372-.264.739-.067.098-.207.268-.34.45-.775.786-.165.124-.315.196l-.015.01q-.083.042-.14.042-.098 0-.18-.052-.161-.093-.28-.238l-.083-.088-.01-.005q-.026-.02-.046-.046h-.005q-.068-.067-.068-.114l.005-.03q.062-.146.207-.29l.067-.073q.336-.335.636-.48.052-.036.103-.036.026 0 .057.01l.186.14.005.062q.083.051.114.062.01-.078.01-.16 0-.28-.212-.445-.206-.145-.455-.196-.382-.057-.764-.062-.166 0-.331.025l-.01.016q-.155.346-.248.708-.114.387-.166.78-.041.491-.041.982 0 .264.01.527 0 .326.093.811.088.398.295.745.16.273.403.496.243.217.558.305.098.01.196.01.331 0 .63-.135.182-.242.285-.77.031-.087.155-.211.01-.005.016-.016.268-.258.428-.31.026-.01.047-.01.031 0 .031.02l-.005.021v.186q0 .17-.036.33-.114.326-.346.585-.677.806-1.453 1.095-.01 0-.015.005-.326.14-.672.14z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="translate(-4.465 -148.671) scale(.53525)"/>
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M93.23 299.378zm2.238 2.186q-.02 0-.047-.01-.129-1.261-.129-1.995l.005-.378.005-.196q-.16.238-.34.46-.528.615-.962.987-.527.45-1.013.569l-.015.005q-.124.03-.233.03-.377 0-.49-.444-.078-.44-.078-1.405l.005-.31-.005-.982q0-.63.015-1.086.026-.361.026-.485-.258.237-.341.33-.212.228-.475.403-.104.083-.228.12-.067-.006-.067-.052 0-.042.046-.109v-.005q.093-.145.218-.269.289-.32.604-.615.165-.17.222-.258.057-.093.13-.18.211-.264.475-.471.18-.165.408-.238.031 0 .062.01.026.037.026.093v.109q-.01.026-.036.708-.031.434-.031 1.132v.212q0 .372-.005.739l-.005.516q0 .874.046 1.106l.005.031q.026.228.202.377.114.068.186.068.217 0 .398-.088l.196-.212q.336-.414.672-1.085.243-.564.382-1.153-.005-.32-.015-.563v-.207q0-.511.02-1.028.01-.155.016-.315.047-.135.145-.238.175-.227.48-.48.228-.187.419-.244l.02-.005q.052 0 .052.047l-.005.031q0 .31-.046.806-.041.393-.047.79l-.005 1.742.005.238q0 .295-.01.49-.02.518-.02 1.35l.004.832q-.041.103-.119.19l-.108.125q-.295.305-.532.424-.042.036-.088.036zM102.176 300.928q.289-.005.485.197.228.206.217.563-.005.356-.237.573-.207.192-.512.197-.3.005-.512-.202-.186-.191-.18-.558.015-.346.232-.563.197-.202.507-.207zm.3-.935q-.047.144-.135.258-.083.114-.17.114-.088.01-.166-.114-.108-.165-.15-.305-.243-3.007-.475-4.465-.233-1.457.258-2.139.491-.682 1.127.005.635.687-.29 6.646z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="translate(-4.465 -148.671) scale(.53525)"/>
    
    </g>
    
    </g>
    
    </svg>


    `;
}