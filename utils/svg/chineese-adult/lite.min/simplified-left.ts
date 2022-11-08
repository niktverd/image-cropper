export default function getSvg({fill = "#ff00ff", stroke = "#000000", resize = 2}) {
    return `
    
    
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-8 -8 45 222"
        width="${Math.round(120 * resize)}"
        height="${Math.round(800 * resize)}" 
        opacity="1"
        fill="${fill}"
        stroke="${stroke}"
    >
    
    <g aria-label="让她那里水流不止" style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <g aria-label="金刚丸1粒 一整晚" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="m9.391 118.145-.005.057h.113v-.057zm-.222-.16-.062.109h.057l.062-.114Zm-.284.057v.057q.279-.15.284-.228v-.056h-.052q-.088 0-.232.227zm2.826-.837q0 .072-.067.568v.166h.057l.062-.507.005-.227zm-.325-.553-.021 1.178h.109l.062-.284q.01-.31-.093-.894zm-1.51-.424v.057q.781.434.77.884-.01.429-.749.971l.564-.067.165-.005q.005-.088.119-.227v-.109q-.109-.14-.109-.17.233-.342.238-.507l.02-.956-.056-.114zm2.373-.49q-.062.221-.062.392-.005.093.041.677 1.09-1.039 1.204-1.261h-.057q-1.126.114-1.126.191zm-.755-4.373-.64 1.132q.123-.057 1.41-.305v-.057q0-.077-.77-.77zm-.279-.222-.062.284q.13-.005.176-.284zm-.119-2.413q1.008.114.998.822-.016.713 2.589 2.542 2.005 1.364 3.173 1.69v.057l-.62.01-.006.114q.114-.005.564.098v.057q-.13.005-.228.062-.475-.047-.785-.042l-.398.005v.057q.418.103.563.103l-.005.057q-.594.01-.956.073v.056l.563.047-.005.057q-.367.005-.842.124l-.006.057q.564-.01.564.103-.915.186-1.075.186l-.222.005q-.419-.264-1.54-1.659-.905.264-.91.465-.232.341-.232.455l.051-.005q.641-.119 1.018-.13.476.146 1.05.828v.113q-.187.341-.57.347l-.004.056q.956.093.945.491v.109q-.005.377-1.147 1.26-.212.393-.573.404-.667-.388-.77-.719h-.057l-.01.507.051.279.956-.016q.124 0 .222.052l1.303-.362q.945.47.93 1.111h.057q-.068.32-.46.626-1.09-.15-2.476-.124l-.728.01q-1.297.02-3.106.563h-.109q-.563.01-.547-.945.046-.507.124-.512.387-.295.687-.574l.114.057v-.057q-.135-.108-.223-.108v-.057l.28-.005v-.057q-.032 0-.331-.103v-.057q.279-.005.284-.29-.44-.31-.434-.666v-.114q.3-.056.563-.062-.387-.594-.424-1.12.223.113.388.108-.388-.305-.382-.331h.051q.098.052.228.052l-.109-.166.057-.005q.124 0 .222.057l1.411-.196.005-.223q.005-.34-.222-.335-.362.118-.45.118-.165-.025-.444-.273-1.034 1.26-1.72 1.607.004-.17-.053-.17l-.284.175v-.057q.12-.186.12-.284-.3.232-.626.237.29-.315.29-.34-.507.289-.791.294l-.398.005.005-.057q1.555-.568 3.56-3.772.698-1.22.713-1.923l.006-.227q-.109-.14-.109-.165.377-.155.682-.46zM13.975 128.476h.108v.052h.104q.397.098.537.098l.108-.005v-.051q-.909-.27-.909-.465h.052q1.07.46 1.607.45.268 0 .268-2.145v-1.127q0-4.067-.377-4.062-.206-.16-.32-.155 0 .109-.109.109v-.217q-.103.005-.212.325l-.056.005v-.108q0-.424.966-.93 0-.052.052-.052 1.447.279 1.447.723.14 0 .217.424l-.27.274q0 .486-.05 7.498-.518 1.029-1.287 1.039-.12.005-.538-.63-.6-.58-.75-.58v-.051h.161q.057-.005.16.046h.057v-.051l-.858-.305v-.057l-.108.005zm2.837-1.12q0 .268-.052.805v.052h.052l.057-.377v-.48zm-.104-.854q0 .43-.108 1.556.16-.005.16-.915v-.64zm-9.219.698v.16l.057.641.109-.005.051-.532v-.326l-.051-.532q-.166.005-.166.594zm.858-.553v.052q.078 0 .16-.16h-.051q-.109.02-.109.108zm-.532-.258v.32l.051.269q.16-.057.16-.326v-.268zm4.981-.197v1.018h.052v-1.018zm-4.981-.124v.212q.103 0 .103-.108 0-.109-.103-.104zm2.14-.201v.057q.108-.005.108-.109v-.057q-.109.021-.109.109zm3.213-.32.109-.006v.057q.48-.01.48-.222v-.057q0-1.87-.32-1.865-.16 0-.16-.109v-.052l.59-.708.697-.01q.119 0 .212-.057.144-.005.594.58 0 .144-.326.645l-.103 1.664q.103.672.103.801 0 .346-1.286.615-.16-.31-.264-.64.088 0 .16-.27-.377-.248-.377-.315h-.109zm1.608-.243q-.104.49-.104.589V126h.052l.108-.646v-.052zm-2.14-.176v1.121q0 .269-.057.806.16-.005.16-1.395v-.16l-.051-.377zm1.768-.191v.96h.051q.109 0 .109-.108v-.377q0-.134-.109-.48zm-6-.486v.64q0 .27-.057.807h.057q.723-.512.91-.765-.135-.238-.858-.682zm.052-1.178v.589l.537-.17q.258-.006.91.464h.108q0-.098.103-.434-.051-.455-.211-.635.604-.17.909-.176.59.362.59 1.06 0 .263-.642.81v.057h.052l.217-.165v.052l-.057.268q.806.698.806.843h.052v-.052q0-.3-.108-3.318h-.052q-.103 0-3.214.807zm3.214-2.522q1.447.475 1.447.992.067 0 .269.532-.078 0-.32.326v.269q0 2.573.102 5.513-.45 1.24-1.12 1.251h-.058q-.336.01-.48-.579-.564-.713-.967-1.054h.057q.341.098.372.098 0-.046-.91-.517v-.056h.11q.454.206.697.201-.734-.45-.915-.625v-.057h.057q1.199.625 1.607.615.14-.124.212-1.018v-.057h-.052q-.242.651-.646.657-.273.005-.32-.156v-.051l.109-.005v-.052l-.378-.046v-.057l.269-.057v-.052l-.372-.046v-.057l.264-.057v-.052q-.373.005-.373-.103l.109-.217q-.103-.243-.217-.263-.91.764-1.607.94v-.217q-.32.01-.32.49v.75q.108.527.108.59v.16q0 .568-.429.754-.512.01-.915-.734v-2.248q0-.873.057-1.607-.057-.325-.057-1.395v-.424q0-.377-.263-.372 0-.108.16-.108v-.057l-.16-.212h.16v-.057q0-.103-.32-.207v-.051q.46-.01 1.281-.507l-.103.166q.217-.114.32-.114l-.108.16h.108l-.057.109v.051h.057q.403-.005 3.214-.806.156-.269.32-.274zM11.063 136.394v.062h.062l.356-1.555h-.062q-.294.051-.294 1.255-.062 0-.062.238zm-.651-5.281q1.369.47 1.369 1.876v.062q0 .16-.124.361 1.313-.351 1.313-.5.087-.239.175-.244l.894-.015q.491.646 1.013.878l.062.114q-.418.76-.418 1.26l-.3-.35h-.057q-.3.775-.3 1.493 0 1.607.775 2.899l.12.062.299-.005q.258-.005.95-1.447h.063v.713l-.062.119h.062q.176-.3.176-.419h.062v.12q-.062.428-.12.537l.058-.005q.062-.104.062-.238h.056q0 .212.3 1.183-.062.192-.3.662.12.382.12.532-.213.362-.714.372h-.18q-2.404.042-3.096-4.051-.119-.47-.119-1.127v-1.312l.062-.12h-.062q-.894.187-.894.492 0 .537-.475 2.036l.062-.005q.832.305.832.465-.12 1.188-.657 1.199-.517-.228-.77-.222-.527 1.483-1.37 2.284-.046-.295-.18-.295 0 .238-.176.243h-.062l.062-.3v-.175h-.062q0 .31-.594.366.238-.32.238-.537-.44.424-.832.429h-.12l-.299-.052v-.062q.507-.005 1.907-2.589-.28-.594-.656-.584v-.062q.237-.005.237-.124l-.118.005v-.062h.18v-.062l-.062-.119.238-.062v-.062l-.057-.113.595-.13q0 .057.056.057.181-.749.181-.956h-.062q-.966.434-1.07.434l-.18.005q-.651.01-1.008-1.054l.357-.005v-.062l-.357-.108v-.062l.295-.005v-.057q-.207-.057-.238-.057v-.062q.563-.01 2.558-.636v-.118q0-1.044-.77-1.835.889-.79 1.07-.79zM11.528 148.397zm-.02-.95zm1.012-1.142zm0-.037zm-1.556-.682q-.113 0-.227-.01l-.057-.005q-.036 0-.046-.016-.026-.01-.026-.046 0-.026.015-.067.047-.083.13-.155.087-.088.18-.17.15-.197.274-.373.088-.124.145-.191l.041-.052q.031-.093.135-.196l.02-.026q.15-.16.326-.295.233-.201.517-.32.046-.031.093-.036.041 0 .077.02l.01.176q.068.005.068.062 0 .031-.047.104-.005.005-.015.02.005.176.005.357 0 .44-.031.884-.026.511-.031 1.023.015.646.052 1.286.015.316.02.626.01.346.016.367v.128q0 .011.041.011l.02.01-.004.373.005.062q0 .056-.02.113-.027.052-.058.098l.12.01q.252.021.51.021.213 0 .42-.036l.01-.005q.051-.015.088-.015.046 0 .046.051v.016q-.057.114-.15.207-.207.222-.465.392-.14.099-.29.16-.284.13-.594.13-.279 0-.547-.026-.192-.026-.388-.026-.238 0-.48.041-.052.021-.238.135l-.093.046q-.114.062-.176.062-.03 0-.052-.02l-.005-.031q0-.068.062-.124.176-.243.424-.419.165-.134.357-.243.17-.108.346-.191.03-.558.03-1.121-.015-.574-.015-.884l-.026-1.127q-.01-.439-.03-.873-.006 0-.01.005-.1.062-.213.088-.134.015-.269.015zM10.112 160.292v.832h.062v-.832zm-.119-.651v.119q0 .475-.057 1.131v.057h.057q.062-.18.119-1.431-.119.02-.119.124zm4.046-.253v.062l.124-.005v-.057zm-6.547 1.72q.553.29 1.37.455.299-.005.299-1.55v-.537q-1.054 1.157-1.67 1.632zm2.976-3.917v1.189l.419-.067h.176q.625-.01.837 1.116-.119.238-.119.419l.057-.005q.863-.192 1.132-.197v-.119q-.714-.155-.714-.702 0-.3-.537-.884l.3-.005-.062-.119q.119 0 .119-.119-.057 0-.057-.057.294-.005.294-.124-.827.01-1.007-.522l-.062.005q-.584.186-.776.192zm1.964.202v.062q.837-.016 1.075.754.057.104.057.238v.532q-.093.538-.532.548v.057h.118l.595-.072v-.057l-.3.005q1.013-.76 1.013-2.041-.083-.005-.238-.295.269-.109.476-.424h-.12q-.63.01-2.144.693zm-1.902-3.121v.537h.057q0-.119.181-.418l-.062-.3q-.083 0-.176.18zm-3.276-.357.119-.005q0 .207.775.879.088 0 .538-.124v.056q-.062.12-.062.181.03 0 .18-.124v.062l-.118.3h.056l.181-.124v.119q-.062.113-.062.18l.12-.061h.061v.056q-.067.657-1.013.672-1.07-.206-1.07-.811 0-.434.295-1.256zM9.1 152.81h.062q1.545.31 1.545 1.044l.119.057q.31-.3.537-.305.636.579.832.817 0 .49-1.426 1.276h-.062l-.238-.114v.238l.238-.062q.538.13.656.284.553-.305 1.251-.558l-.062.119q.124.02.124.119-.124.02-.124.119h.124q.258-.005 1.664-.27v-.056q-.202 0-.537-.17-.745.134-.832.134h-.057v-.057q.547-.248.594-.248v-.062q0-.119-.119-.119l-.062.005q-.444.305-.594.305 0-.119.537-.367v-.119l-.3.068.238-.243q-.103-.057-.237-.057v-.057l.18-.005q0-.134-.718-.346v-.057q.176-.005.3-.243l-.181-.238q.212 0 1.25-.14 1.013.332 1.013 1.174 0 .357-.413.842l.057-.005q.8-.129 1.25-.315.465.165.894.698v.056q0 .688-1.074.853v.062q.361.073.718.46-.083.486-1.132 1.984v.062q.057 0 .057-.062l.238.057q.904-.315 1.075-.315l.175-.005q.775.636.775 1.235-.108.367-.418.605-.786-.166-2.558-.197-1.426.026-3.096.77-.537-.108-.537-.702v-.838q0-.119-.357-.17v2.082q0 .936-1.188 1.39h-.062q-.093.005-.889-1.054-.367-.232-.419-.232v-.057l.176-.005q.119.057.181.057 0-.104-.656-.284l-.176-.176h.057q.269.114.656.165h.062v-.062q-.997-.46-1.25-.455-.3-.268-.3-.826 2.015-1.83 2.439-2.719h-.057q-.692.192-1.55.502-.357.005-.832-.58 0-.557.95-1.027 0-.062.063-.062.015.118.119.118l-.062.12v.056q1.42-.382 1.431-.501 0-2.496-.537-2.486h-.12l-.118.062v-.18l-.057.004q0 .176-.243.357v-.057q0-.49.894-.966.02-.12.119-.124zm3.633 2.496v.062h-.119v-.057zM16.243 167.523q.765.383.775.522v.476q-.134.713-.594.723-.94-.16-1.55-.15l-.295.005q-3.56.062-6.428 1.302-.409-.093-1.075-1.173v-.056q0-.414 1.075-.915.237.088.237.176-.118.02-.118.118h.056q2.517-.516 7.917-1.028zM10.083 179.764q0 .263.12.537 0 .114-.12.419.057-.005.057.057-.057 0-.057.062l.12-.062h.056l-.057.119q.057 0 .057.056l-.119.005v.057h.12q1.834-.212 3.275-.594l.657.165q0-.082-.775-.76-.848.672-1.07.672l-.062-.113-.119.062h-.119l.119-.181v-.062q-.196.124-.357.129h-.118l.175-.243-.057.005q-.217.119-.475.124l-.18.005q0-.119.237-.124v-.119q-1.163-.217-1.308-.217zm-.537-.166q.062.088.062.357.119-.005.119-.124l-.062-.295zm.119-.361v.237h.062v-.237zm1.907-1.463q-.316.9-.894.91l-.595.01v.181q.75-.072.894-.078.652.176.652.646v.476q1.012-.708 1.012-1.09-1.023-1.055-1.07-1.055zm-2.977-.361q.119.366.119.594l.238-.005q.119-.005.119-.124-.062-.32-.062-.532zm1.426-.207v.537q.6-.01.6-.485v-.181l-.48.01q-.12.02-.12.119zm1.907-.507v.12h.057v-.12zm.476.171q0-.062-.057-.062 0 .31 1.07 1.054.118-.594.18-.6-.144-.604-.3-.707-.097 0-.893.315zm1.013-.377v.062l.118-.005v-.057zm-5.178-.026.175.294q.45-.129.538-.129v-.3q-.228.125-.713.135zm1.07-2.46q1.069.041 1.069.693-.238.098-.238.186h.062q.507-.13.657-.135.413.14.413.414 0 .625-1.25.852v.357l1.131-.315.357.17q.542-.739.775-1.498l-.176-.357q.61-.429.77-.429.682.32.894.579 0 .258-.537 1.023 1.612-.325 2.025-.455.217-.005.714.465v.357q-.176.362-.533.367l-.956.015q.476.367.476.708v.057q0 .45-.595.961l-.237.362.119.057q.284-.537.356-.537v.118q-.176.28-.176.538 1.995 1.095 2.44 1.085v.062l-.357.005v.119q.3-.005.3.114l-.894.015v.062l.237-.005v.057l-.656.015v.057h.181v.057q-.233.062-.475.067v.062l.356-.005q0 .093-.956.43l-.057.004-.119-.062v.062q.176-.005.238.651 0 .357-.656.367-.703.016-1.308-.093h-.062v.057q.419.03.419.17-.233.186-.357.186 0-.056-.062-.056v.175l-.056.005-.181-.118v.713q.863-.31 1.845-.445.837.186.837.698 0 .325-.362.542l-.651.01q-.408.006-1.25.26l-.42-.171v.475l1.37-.02 1.432-.264.118-.005q1.008.387 1.008.878 0 .098-.356.424-1.5-.036-2.378-.02h-.062q-2.33.04-5.477.692H8q-.538.01-.538-.703v-.357q0-.062.714-.547l.062-.005q-.124.243-.3.243v.062H8l.294-.186h.062l-.118.18q.294-.186.413-.186v.057l-.119.181v.062l.718-.072-.062-.295v-.718q0-.434-.418-.703l.238-.005-.057-.119q.155 0 .418-.186l.414-.005q.485-.01.775.64 0 .389-.119 1.19h.057q.243-.006.718-.13v-.713q0-1.55-.18-1.545l-.12-.057q-1.22.434-1.426.44l-.18.004q-.321.005-.776-.583v-.238q0-.259.775-.491-.3-.227-.3-.765-.764.786-1.126.79-.243.006-.6-.521 1.065-1.023 1.251-1.395l-.119.005q-.294.18-.475.186-.33.005-.656-.403v-.181q0-.243.418-.662v-.062q-.475-.682-.475-.94.284-.662.775-.667v-.062q-.212.005-.538-.346v-.181q0-.775.951-.79l-.057.118q.057 0 .057.062-.057 0-.057.057h.057l.476-.124q-.057-.475-.176-.475v.062q-.114-.062-.18-.057v-.12q.521-.604.774-.609zM15.497 195.713v.056l.34-.005v-.056zm-.62-.099v.052l.733-.01q.114 0 .114-.114h-.057zm-1.19-.997v.336l.683.496v-.052q-.625-.377-.625-.785zm-.17-.284v.34h.114v-.34zm0-.166v.114l.114-.005v-.114zm0-.227v.114h.057v-.114zm-3.503-.956v.114h.056v-.114zm-.057-.961q-.057.77-.057.961.114 0 .114-.114v-.847zm-2.434-.073q.057.481.057.791h.113l.057-.398v-.17l-.057-.677q-.134.005-.17.454zm.904-.692q0-.057-.052-.057v.114q0 .465-.056.904.056.372.056.734h.052q.388-.062.625-.067h.114v-1.752q-.253.114-.739.124zm-.62-.16q0 .036.057.734h.114q.113-.362.113-.455-.108-.259-.227-.28zm3.902-1.085q.284.723.284 1.183h.114q.392-.01.392-.124 0-.734-.734-1.003 0-.056-.056-.056zm2.036-.037q.113.186.113.341v.393l-.17.228h.057q.16 0 .96-.186 0 .056.058.056.17-.212.17-.398v-.284l-.057-.279h-.056q-.626.01-1.075.13zm-5.318-1.09v.45q0 .294-.052.96.367-.004.791.213v-.057q-.041-1.809-.114-1.804-.625.093-.625.238zm3.907-3.292q1.457.61 1.468.765v.17q-.192.481-.62.631v.057l1.638-.651q.718.274.96.889 0 .516-.96.976l-.393.346h.051q.037 0 1.075-.3.564-.01 1.132 1.448 0 .274-.393.346-.584 1.876-1.416 1.891l-.398.062.285.336q-.16.682-.336.687-.057-.108-.057-.17-.17.005-.227.91 0 .904 1.018.883h.113q1.018-.083 1.018-.413 0-.197-.227-1.184.14-.005.284.615h.057v-.113l-.057-.393v-.057h.057l.165.672h.057v-.057q-.057-.196-.057-.222v-.057h.057q.17.615.905 1.282v.056q-.28 1.024-1.354 1.044-.662.01-1.075.073-1.923-.062-1.923-.305-.113-.367-.113-.507 0-.305.113-2.036v-.057h-.056q-.559 1.463-1.644 2.517h-.051v-.114h-.057l-.17.12h-.058q.057-.197.057-.228v-.057h-.057q0 .176-.454.295l.17-.29v-.057q-.346.29-.677.295l-.227.005v-.057q.429-.005 1.808-2.18.285-.786.285-.853-.352.119-.569.124-.496.01-.96-.832v-.057q0-.295.34-.512-.45-.976-.45-1.183l-.056.005v1.075q0 .842-.057 1.524.057.331.057 1.354 0 .703-1.132 1.039-.109.005-.568-.724l-1.018.357H7.58q-1.018-.191-1.018-1.111.398-.233.568-.238v-1.524q0-1.147-.057-3.447-.077-.284-.227-.279v-.057q.114-.145.114-.176-.109-.051-.171-.051v-.057q.17 0 .17-.114-.304-.108-.34-.108v-.057q.45-.005.904-.243.284.052.796.382.77-.304.847-.465 1.41.254 1.41 1.05-.221.077-.221.511v1.018h.057q0-.496 1.126-.64.057.221.227.221 1.7-.294 1.7-.485l-.113.005q-.114.057-.17.057l.79-.972h-.114q-.795.465-1.131.47l-.28-.051q0 .098-.852.697l-.114-.057-.108.057v-.057l.057-.113q-.43.124-.455.124l.17-.233q-.206.119-.454.124h-.114q1.302-1.576 1.302-2.284l-.284-.444q.186-.005.739-.636z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="matrix(2.40754 0 0 2.40754 -13.504 -259.963)"/>
    
    </g>
    
    </g>
    
    </svg>

    `;
}