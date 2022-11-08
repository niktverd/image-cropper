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
    
    <g aria-label="让她那里水流不止" style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <g aria-label="小小一粒，十分满意！" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M9.783 282.777v1.726h.057v-1.726zm2.795-.76q1.964.713 1.964 1.096 0 .124.062.65 0 .688-1.132 1.153l-.3.062-1.188-.987q-.594-.279-.594-.408h.057q.475.108.718.108v-.124q-.02-.087-1.075-.516v-.057h.062q.75.284 1.013.279-.243-.258-.243-.295h.062l.3.052q-.119-.145-.119-.176v-.056h.057l.119.056v-.062l-.238-.294v-.119l.119.057h.238q.087-.005.18-.181-.062-.103-.062-.238zm-2.976-.367q0 .708-.119 2.682.238-.005.238-2.15l-.057-.532zm-.951-3.08q1.964.341 1.964.801.077 0 .356.47v.057q-.713.486-.713 1.86 0 1.014.057 3.628h.062q0 .708-1.189 1.447-.537.192-.718.192l-.057.005q-.077-.005-.418-.59-1.137-.873-1.37-.868v-.062h.062l.414.052h.119v-.062q-.238.005-1.427-.393v-.057h.057q.718.166 1.132.155H7.1v-.062q-.13.005-1.189-.335-.315.248-.656.253-.574.01-1.013-1.354.047-.336.775-.904.491-.693.775-.905 0 .295.057.295l.3-.186q0 .377.594.527l.062.119-.837 1.979q1.318.45 2.088.44l.175-.006q.316-.005.357-1.493v-1.664q0-.419-.057-1.313-.418.01-.775-1.592.398-.005.894-.434zM21.152 282.777v1.726h.056v-1.726zm2.795-.76q1.964.713 1.964 1.096 0 .124.062.65 0 .688-1.132 1.153l-.3.062-1.188-.987q-.594-.279-.594-.408h.057q.475.108.718.108v-.124q-.02-.087-1.075-.516v-.057h.062q.75.284 1.013.279-.243-.258-.243-.295h.062l.3.052q-.12-.145-.12-.176v-.056h.058l.119.056v-.062l-.238-.294v-.119l.119.057h.237q.088-.005.181-.181-.062-.103-.062-.238zm-2.976-.367q0 .708-.12 2.682.239-.005.239-2.15l-.057-.532zm-.951-3.08q1.964.341 1.964.801.077 0 .356.47v.057q-.713.486-.713 1.86 0 1.014.057 3.628h.062q0 .708-1.189 1.447-.537.192-.718.192l-.057.005q-.077-.005-.418-.59-1.137-.873-1.37-.868v-.062h.062l.414.052h.118v-.062q-.237.005-1.426-.393v-.057h.057q.718.166 1.132.155h.119v-.062q-.13.005-1.189-.335-.315.248-.656.253-.574.01-1.013-1.354.046-.336.775-.904.49-.693.775-.905 0 .295.057.295l.3-.186q0 .377.594.527l.062.119-.837 1.979q1.318.45 2.088.44l.175-.006q.315-.005.357-1.493v-1.664q0-.419-.057-1.313-.419.01-.775-1.592.398-.005.894-.434zM36.36 281.345q.765.383.775.522v.476q-.134.713-.594.723-.94-.16-1.55-.15l-.295.005q-3.56.062-6.429 1.303-.408-.093-1.074-1.173v-.057q0-.414 1.074-.915.238.088.238.176-.119.02-.119.119h.057q2.517-.517 7.917-1.029zM41.6 285.113v.832h.062v-.832zm-.119-.652v.12q0 .475-.057 1.131v.057h.057q.062-.181.119-1.432-.119.021-.119.124zm4.046-.253v.062l.124-.005v-.057zm-6.547 1.721q.553.29 1.37.455.3-.005.3-1.55v-.538q-1.055 1.158-1.67 1.633zm2.976-3.917v1.189l.42-.068h.175q.625-.01.837 1.117-.119.237-.119.418l.057-.005q.863-.191 1.132-.196v-.12q-.714-.154-.714-.702 0-.3-.537-.884l.3-.005-.062-.118q.119 0 .119-.12-.057 0-.057-.056.294-.005.294-.124-.826.01-1.007-.522l-.062.005q-.584.186-.776.191zm1.964.202v.062q.837-.016 1.075.754.057.103.057.238v.532q-.093.537-.532.548v.057h.118l.595-.073v-.057l-.3.005q1.013-.76 1.013-2.04-.083-.006-.238-.295.269-.109.476-.424h-.12q-.63.01-2.144.692zm-1.901-3.122v.538h.056q0-.12.181-.419l-.062-.3q-.082 0-.175.181zm-3.277-.356.12-.005q0 .206.774.878.088 0 .538-.124v.057q-.062.119-.062.18.03 0 .18-.123v.062l-.118.3h.056l.181-.124v.118q-.062.114-.062.181l.12-.062h.061v.057q-.067.656-1.013.672-1.07-.207-1.07-.811 0-.435.295-1.256zm1.845-1.106h.062q1.545.31 1.545 1.044l.12.057q.31-.3.536-.305.636.578.832.816 0 .491-1.426 1.277h-.062l-.238-.114v.238l.238-.062q.538.129.656.284.553-.305 1.251-.558l-.062.119q.124.02.124.118-.124.021-.124.12h.124q.258-.006 1.664-.27v-.056q-.201 0-.537-.17-.745.134-.832.134H44.4v-.057q.548-.248.594-.248v-.062q0-.12-.119-.12l-.062.006q-.444.305-.594.305 0-.12.537-.367v-.119l-.3.067.238-.243q-.103-.057-.237-.057v-.056l.18-.005q0-.135-.718-.347v-.056q.176-.005.3-.243l-.18-.238q.21 0 1.25-.14 1.012.331 1.012 1.174 0 .356-.413.842l.057-.005q.8-.13 1.25-.315.466.165.894.697v.057q0 .687-1.074.853v.062q.361.072.718.46-.083.485-1.132 1.984v.062q.057 0 .057-.062l.238.057q.904-.315 1.075-.315l.175-.005q.775.635.775 1.235-.108.367-.418.604-.786-.165-2.558-.196-1.426.026-3.096.77-.537-.109-.537-.703v-.837q0-.119-.357-.17v2.082q0 .935-1.188 1.39h-.062q-.093.005-.889-1.054-.367-.233-.418-.233v-.056l.175-.005q.12.056.181.056 0-.103-.656-.284l-.176-.176h.057q.269.114.656.166h.062v-.062q-.997-.46-1.25-.455-.3-.269-.3-.827 2.015-1.83 2.44-2.718h-.058q-.692.191-1.55.501-.357.005-.832-.578 0-.559.95-1.029 0-.062.063-.062.015.12.119.12l-.062.118v.057q1.42-.383 1.431-.502 0-2.496-.537-2.485h-.12l-.118.062v-.181l-.057.005q0 .176-.243.357v-.057q0-.491.894-.967.02-.118.12-.124zm3.633 2.496v.062H44.1v-.057zM52.442 285.19l.067.02q.413.099.517.481l.03.093-.005.248-.025.047q-.104.605-.559 1.033-.263.254-1.038.553.284-.372.361-.511.083-.14.181-.372-.516-.021-.656-.538l-.02-.036.005-.248q.015-.057.025-.057.114-.532.672-.677l.109-.03zM66.534 285.221q-.12.951-.12 1.018v.057h.063q.119-.527.119-.837v-.238zm-.476-.646v.062q.057.651.057 1.132v.057l-.057.3q.238-.094.238-.187v-.356q0-.455-.18-1.008zm.657-6.377q.108 0 .65.76.693.269.72.465-.29.6-.42.605h-.118v-.238h-.062v.713q-.12.005-.238-.408h-.119v1.545q1.86-.207 3.395-.475 1.013.5 1.013 1.41 0 .719-.537.724-1.654-.15-2.501-.135l-1.427.026q-.062.594-.062.894v.713q0 .6.12 1.489-.394 1.074-1.546 1.095-.119.005-.357-1.064l.12-.181v-.295q-.14 0-.6-.465l.062-.005.418.052q.238-.093.238-.181v-1.902q-2.734.403-3.633.837-.444-.103-.832-.878v-.062q0-.811.713-1.085 0-.042.595-.424 0 .119.119.114l-.057.124.119-.005q0 .119-.181.124v.119l3.095-.352v-.656q0-1.426-.238-1.421-.356-.202-.356-.295.734-1.142.775-1.142l.532-.01q.6-.01.6-.13zM76.76 285.83l-.061.125q.315.052.361.052 0-.104-.3-.176zm2.683-.996q0 .129-.057.656v.3l.057-.005.062-.714v-.237zm-.12-.894-.118 1.612q.18-.005.18-1.194v-.418zm-2.444 1.353v.062h.057q.538-.847.9-1.69h.056v.063q-.093.79-.832 1.803v.057q.801.108 1.013.103l.295-.005q.382-.005.48-2.335v-.238q-.914.015-1.312.858-.197.258-.657 1.323zm-.956-7.08q.894.326.894 1.241 0 .336-.775 1.147l-.713 1.261v.062q.455-.48 1.132-1.69h.062v.057q0 .341-.894 1.685h.119l-.062.119.119-.062h.18q0 .056-.062.056.062.12.062.181l.12-.005q2.506-.578 2.919-.883 1.292.289 1.85 1.038h.062v-.237h-.062l.062-.12v-.061l-.119.005q.057-.073.057-.362-.057.005-.057-.057l.119-.237q-2.589-2.403-3.4-2.388v-.062q.237 0 .237-.119-.056 0-.056-.062h.175v-.062l-.057-.119q.295-.046.295-.18-.057 0-.057-.063l.119-.062.475-.005q2.553.92 4.295 2.605.062.75.062.894 0 .419-.657.785-.304-.17-.599-.165h-.057q-.387.005-.837.134.238.264.238.414-.357.005-.775 1.085-.357 3.106-.595 3.111-.661.692-1.312.739l-.12.005q-1.105-1.297-1.13-1.292l-.42-.232v-.062h.12l.237.056.062-.005v-.056q-.548-.17-.656-.17-.827.883-1.55 1.219 0-.176-.124-.176-.192.124-.295.124.119-.196.119-.3-.305.186-.6.191h-.056q.237-.268.237-.3-.403.187-.656.187l-.475.01v-.062q1.23-.408 2.563-2.067.537-.832.537-1.085v-.062q-.45.129-.537.129-.894-.506-.894-.935l-.894.553-.062-.238-.295.18v-.056q.119-.196.119-.3-.253.181-.6.186h-.056v-.057q.186-.005.356-.304h-.062q-.403.186-.656.19h-.057l-.418-.05v-.12q.997-.238 2.03-1.824.832-1.545.832-1.741 0-.228-.3-.652.058 0 1.194-.5zM90.651 286.7h.109v.05h.113l.455.11.057-.006v-.057q-.109.005-.682-.268 0 .057-.052.057 0-.114-.114-.114l-.17.119v-.114l.057-.114h-.057q-.253.176-.398.176.114-.186.114-.284-.3.232-.626.238l-.056-.114q.19 0 .739-.75v-.051l-.114.057q-.367-.109-.512-.104h-.227q0-.057-.057-.165h.057l-.057-.114v-.17l.057-.114-.109-.057q0 1.044-.91 1.773h-.056v-.114h-.057q-.14.119-.17.119v-.227q-.114.02-.114.113v.398q-.031.966-.336 1.08l-.227.005q-.682.016-.682-1.685 0-.418-.114-1.302-.067 0-.393.46h.057l.336-.232v.056q-1.07 1.887-1.53 1.897-.904.015-.904-.946v-.113q0-.32.682-.92l.057.284q1.524-1.457 1.524-1.499l-.165-.62q0-.434.848-.697l.625-.01q.165.408.165.506h.17l.285-.062v-.114q0-.455-.341-.45-.336.005-.961-.832v-.113l.795-.579q-.284-.036-.284-.165-.398.232-.568.237h-.114q-.263.005-.734-.496-.19.005-.284-.051-.568.18-.853.186.455-.362.455-.403-.108-.057-.17-.057l-.564.351h-.056l.45-.46v-.057h-.058l-.279.062q0-.14.222-.175v-.057l-.165.005v-.057l.057-.114-.455.005q0-.072.284-.284l-.227-.279q.734-.356 1.245-.475.78.294 1.018.718h.057l-.057.114.114-.005-.057.113v.057q.274-.113.74-.238 0-.733-.455-1.183h.284l-.057-.114v-.056l.114-.005-.057-.109.284-.062-.057-.114.114-.056q.858-.016 1.188.826 0 .228.057.228l-.057.113v.114l.285-.062.279-.005q.03 0 .17.109l.114-.057.227.052h.057v-.057q-.227.005-.227-.166l.17-.005q0-.113-.17-.108v-.057l.398.052.056-.005q.62-.01.62-.29v-.17q-.144-.62-.449-.615v-.114q.775-.413.904-.413 1.018.108 1.018.832 0 .098-.336.517v.056q.807-.186.962-.19.96.252.96 1.002-.103.568-.392.573-.315-.051-.455-.046l-.795.18q.454-.361.454-.402-.113.005-.113-.052-.522.346-.62.351l.335-.346h-.113q-.476.01-.677.579-.073 0-.285.346.207-.119.455-.124 1.132.124 1.132.548.057 0 .057.114-.336.728-.625.914l-.393.005v.455h.057q.056 0 .62-.238 1.224.253 1.643.936l.114.165v.057q-.677.01-.74 3.979-.62.8-1.301.811-.125.005-.905-1.116-.17.005-.17-.109.03 0 .227.052h.114v-.057q-.14 0-.74-.217v-.057l-.108.005zm.677-.807-.455.517q.414.165 1.137.15h.109q.129 0 .227-.398l-.279.056q-.186-.108-.34-.103l-.342.005q0-.062-.057-.17.057 0 .057-.057zm1.643-.367v.568l.057.507h.057v-.17q-.057-.445-.057-.905zm-.17-.734v.114q.057 1.044.057 1.53l.057-.005v-1.303q0-.041-.057-.336zm-6.403-.057-.279.398h.057q.336-.201.336-.29 0-.113-.114-.108zm0-.284q0 .031-.108.17h.051l.114-.17zm1.364-.191q0 .046.052 1.354h.057q.227-.527.341-1.421-.31.062-.45.067zm1.468-.196v.45h.057v-.114h.17q.853.211.853.434v.284h.114q.17-.889.17-1.364l-.056.005q-1.308.201-1.308.304zm2.44-.383-.114 1.075q.3-.005.847.382v-1.472zm-2.213-1.209v.398h-.113v.114l1.307-.192v-.113l-.113-.393q-.879.18-1.08.186zm-5.095-.873.512-.01q.78-.011 1.302 1.28 0 .833-.796 1.148-.904-.351-.904-.61 0-.351-.74-1.116.089-.062.342-.062l-.114-.17.228-.005-.114-.166q.341-.005.341-.119-.057-.108-.057-.17zm7.023-1.706v.109q.114 0 .114-.114zm-1.7-.144q0 .17-.507.578v-.17h-.056q-.512.01-.512.744-.057 0-.057.057.057 0 .057.057-.186.118-.227.118v.057q.062 0 .17.052 1.302-.109 1.302-.362H89.8q-.202.119-.677.238-.104-.052-.228-.052v-.057q.465-.005 1.189-.868v-.057q-.264.005-.284-.335zm-.057-.848h.114v.057h-.114zm-5.038 1.788q0 .114-.114.114h-.057q.016-.109.114-.114zm.335.109v.056h-.108v-.056zM100.723 288.012v.062l1.199-.042v-.067zm-3.71-2.863h.051q0 .258.062.253l.228-.134q0 .346.511.49l.057.125q-.682 2.046-.858 2.268-.201.14-.511.15-.74-.651-.74-1.375 0-.222.626-.857.574-.838.574-.92zm6.268-.367.543-.016q.857-.03 1.638 1.354-.16.894-.956.925-.915-.315-1.09-.858l-.75-.806v-.062l.341-.01v-.062h-.134v-.062l.201-.01v-.062l-.067-.124.341-.01v-.068zm-4.44-.904q.053.113.053.17.816-.201 1.943-.238l.34-.015.58.036q.165-.413.165-.465l-.057.005q0 .114-2.17.31 0 .052-.853.196zm-.288-1.644v.057l.113.512q.28-.01 2.801-.502l.398.212v-.284q0-.114-.109-.109-.248.01-2.521.378-.155 0-.682-.264zm.573-2.816v.057q.315-.01.682.656.915-.119.915-.377.114 0 .114-.398l-.228-.222q-.894.087-1.483.284zm-.284-1.194h.108v.057h-.108zm-.744-.026.113-.005v.057h-.113zm2.34 6.765v-.057l-.056-.109q-1.132.243-1.463.373.719.14.719.583v.13q0 .263-.403.718 0 .506 1.545.455 1.4-.052 1.483-.383v-.062q0-.227-.284-1.137.067-.005.403.559-.12-.393-.12-.512.13 0 .29.636h.057v-.073q-.057-.113-.057-.186.956 1.375 1.256 1.36v.123q0 .688-1.142 1.008-1.214-.083-1.37-.083-1.038.109-1.369.124-1.715-.31-1.715-1.664v-.764q0-.145-.29-.181v-.197q.227-.294.305-.423-.703-.305-.703-.76.176-.005.176-.119 0-.553-.687-2.144.113-.192.113-.29-.496.191-1.028.258-.63.026-.63-.713v-.511q0-.052.744-.605h.056l-.289.352h.062q0-.068.398-.3h.057l-.166.232q.409-.243.507-.243l-.165.285v.062q.444-.016 1.653-.352-.124-.45-.744-.423-.351.01-.91-.765 0-.46 1.313-.848 0-.057.057-.057.227.078.227.16l-.119.006v.108q1.83-.274 1.83-.403-.062 0-.17-.052l-.74.135-.062.01v-.062q.58-.201.58-.3l-.12-.056q-.429.134-.46.134h-.057v.057h-.165v-.057h.165v-.057l.404-.13v-.113l-.285.005v-.057l.228-.01v-.108h-.114v-.057h.114v-.057q-.29.005-.574-.269.284-.046.284-.175-.113 0-.113-.114v-.052l.573-.026q.967-.036 1.256.357l.17.222v.109q0 .29-.222.635h.052q.972-.144 1.483-.336.765.238.977.538v.057q0 .692-.977.945 0 .372-.284.58h.057q.728-.027 2.289-.481 1.137.392 1.137.987v.056q-.098.228-.455.47l-1.716.068q-2.45.088-4.795.63v.057q.015.109.114.109 3.58-.646 4-.662.568-.02 1.198 1.271 0 .104-.34.295l-.688 2.258q-.264.352-.574.362l-.108.005q-.548.02-.863-.429v-.052l.119-.01v-.114q-.212.005-.801.145v.057q.754-.026 1.426 1.147-.403.754-.858.77l-.227.01q-.745-.6-.745-.656v-.403q0-.243-.284-.558l.228-.01-.057-.109q.175-.01.175-.124zm-1.643.29q.026.004.052.004zM111.756 286.373q.29-.005.486.197.227.207.217.563-.005.357-.238.574-.207.191-.512.196-.3.005-.511-.201-.186-.192-.181-.559.015-.346.232-.563.197-.201.507-.207zm.3-.935q-.047.145-.135.259-.082.113-.17.113-.088.01-.166-.113-.108-.166-.15-.305-.242-3.008-.475-4.465-.233-1.457.258-2.14.491-.682 1.127.005.636.688-.29 6.646z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:10.58333302px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="matrix(1.95643 0 0 2.3905 -7.301 -659.994)"/>
    
    </g>
    
    </g>
    
    </svg>

    `;
}
