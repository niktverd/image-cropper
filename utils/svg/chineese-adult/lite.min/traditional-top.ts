import { calculateSvgSize } from "../../../svg";

export default function getSvg({fill = "#ff00ff", stroke = "#000000", maxWidth = 100, maxHeight = 100}) {
    const width = 212,
        height = 29;

    const calcSize = calculateSvgSize({
        maxWidth,
        maxHeight,
        width,
        height,
    });

    const { calculatedWidth, calculatedHeight, viewBox } = calcSize;

    const svg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${viewBox}"
        width="${calculatedWidth}"
        height="${calculatedHeight}"
        opacity="1"
        fill="${fill}"
        stroke="${stroke}"
    >
    
    <g aria-label="让她那里水流不止" style="font-style:normal;font-weight:400;font-size:13.9764328px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0">
    
    <g aria-label="小小一粒，十分滿意！" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:20.70551872px;line-height:1.25;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0;word-spacing:0;writing-mode:lr-tb;text-anchor:start">
    
    <path paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02" d="M11.838 281.897v3.377h.111v-3.377zm5.47-1.486q3.841 1.395 3.841 2.143 0 .243.122 1.274 0 1.345-2.214 2.255l-.587.121-2.325-1.93q-1.163-.547-1.163-.8h.112q.93.213 1.405.213v-.243q-.04-.172-2.103-1.01v-.112h.121q1.466.556 1.982.546-.475-.506-.475-.576h.121l.586.1q-.232-.282-.232-.343v-.111h.111l.233.11v-.12l-.466-.577v-.232l.233.111h.465q.172-.01.354-.354-.121-.202-.121-.465zm-5.824-.718q0 1.385-.232 5.247.465-.01.465-4.205l-.111-1.042zm-1.86-6.025q3.842.667 3.842 1.567.151 0 .697.92v.111q-1.395.95-1.395 3.64 0 1.981.111 7.097h.122q0 1.385-2.326 2.83-1.051.375-1.405.375l-.111.01q-.152-.01-.82-1.153-2.223-1.708-2.678-1.698v-.121h.121l.809.1h.232v-.12q-.465.01-2.79-.77v-.11h.111q1.406.323 2.214.303h.233v-.121q-.253.01-2.325-.657-.617.485-1.284.495-1.123.02-1.982-2.649.091-.657 1.517-1.77.96-1.354 1.516-1.768 0 .576.111.576l.587-.364q0 .738 1.162 1.031l.122.233-1.638 3.872q2.578.88 4.084.86l.344-.01q.617-.011.698-2.923V280.2q0-.82-.112-2.568-.819.02-1.516-3.114.778-.01 1.749-.85zM34.08 281.897v3.377h.112v-3.377zm5.47-1.486q3.842 1.395 3.842 2.143 0 .243.121 1.274 0 1.345-2.214 2.255l-.586.121-2.326-1.93q-1.162-.547-1.162-.8h.11q.93.213 1.406.213v-.243q-.04-.172-2.103-1.01v-.112h.121q1.466.556 1.982.546-.475-.506-.475-.576h.121l.587.1q-.233-.282-.233-.343v-.111h.111l.233.11v-.12l-.465-.577v-.232l.232.111h.465q.172-.01.354-.354-.121-.202-.121-.465zm-5.824-.718q0 1.385-.232 5.247.465-.01.465-4.205l-.111-1.042zm-1.86-6.025q3.842.667 3.842 1.567.152 0 .698.92v.111q-1.396.95-1.396 3.64 0 1.981.112 7.097h.121q0 1.385-2.325 2.83-1.052.375-1.406.375l-.11.01q-.153-.01-.82-1.153-2.224-1.708-2.679-1.698v-.121h.121l.81.1h.232v-.12q-.465.01-2.79-.77v-.11h.11q1.406.323 2.215.303h.232v-.121q-.253.01-2.325-.657-.617.485-1.284.495-1.122.02-1.982-2.649.091-.657 1.517-1.77.96-1.354 1.516-1.768 0 .576.112.576l.586-.364q0 .738 1.163 1.031l.12.233-1.637 3.872q2.578.88 4.085.86l.343-.01q.617-.011.698-2.923V280.2q0-.82-.111-2.568-.82.02-1.517-3.114.779-.01 1.75-.85zM63.834 279.097q1.497.748 1.517 1.02v.931q-.263 1.395-1.163 1.415-1.84-.313-3.033-.293l-.576.01q-6.966.122-12.577 2.548-.799-.182-2.103-2.295v-.111q0-.809 2.103-1.79.465.172.465.344-.233.04-.233.233h.112q4.923-1.011 15.488-2.012zM74.086 286.467v1.628h.121v-1.628zm-.232-1.274v.233q0 .93-.112 2.214v.111h.112q.12-.354.232-2.8-.232.04-.232.242zm7.916-.495v.121l.242-.01v-.111zm-12.81 3.366q1.082.567 2.68.89.586-.01.586-3.033v-1.051q-2.063 2.264-3.266 3.194zm5.824-7.663v2.325l.819-.131h.343q1.224-.02 1.638 2.184-.232.465-.232.819l.11-.01q1.69-.375 2.215-.385v-.232q-1.395-.304-1.395-1.375 0-.587-1.052-1.729l.587-.01-.122-.233q.233 0 .233-.232-.111 0-.111-.111.576-.01.576-.243-1.618.02-1.972-1.021l-.12.01q-1.143.364-1.517.374zm3.841.394v.122q1.638-.03 2.103 1.476.112.202.112.465v1.041q-.182 1.052-1.042 1.072v.111h.233l1.162-.142v-.11l-.586.01q1.982-1.487 1.982-3.994-.162-.01-.465-.576.525-.213.93-.83h-.233q-1.233.02-4.196 1.355zm-3.72-6.106v1.051h.111q0-.232.354-.819l-.121-.586q-.162 0-.344.354zm-6.41-.698.233-.01q0 .404 1.516 1.719.172 0 1.052-.243v.111q-.122.233-.122.354.061 0 .354-.242v.12l-.232.587h.11l.355-.242v.232q-.122.223-.122.354l.233-.121h.121v.11q-.131 1.285-1.981 1.315-2.093-.404-2.093-1.587 0-.85.576-2.457zm3.61-2.163h.12q3.024.606 3.024 2.042l.232.111q.607-.586 1.052-.596 1.243 1.132 1.627 1.597 0 .96-2.79 2.497h-.121l-.465-.222v.465l.465-.122q1.051.253 1.284.557 1.081-.597 2.446-1.092l-.121.232q.243.04.243.233-.243.04-.243.232h.243q.505-.01 3.255-.525v-.112q-.394 0-1.051-.333-1.456.263-1.628.263h-.111v-.112q1.071-.485 1.162-.485v-.121q0-.233-.232-.233l-.121.01q-.87.597-1.163.597 0-.233 1.051-.718v-.233l-.586.132.465-.475q-.202-.112-.465-.112v-.11l.354-.01q0-.264-1.406-.678v-.111q.344-.01.587-.476l-.354-.465q.415 0 2.447-.273 1.981.647 1.981 2.295 0 .698-.809 1.648l.112-.01q1.567-.253 2.446-.617.91.324 1.75 1.365v.112q0 1.344-2.104 1.668v.121q.708.142 1.406.9-.162.95-2.214 3.882v.121q.11 0 .11-.12l.466.11q1.77-.616 2.103-.616l.344-.01q1.516 1.243 1.516 2.416-.212.718-.819 1.183-1.537-.324-5.004-.384-2.79.05-6.056 1.506-1.052-.212-1.052-1.375v-1.638q0-.232-.697-.333v4.074q0 1.83-2.326 2.72h-.121q-.182.01-1.739-2.063-.718-.455-.819-.455v-.111l.344-.01q.232.111.354.111 0-.202-1.284-.556l-.344-.344h.111q.526.223 1.284.324h.122v-.122q-1.952-.9-2.447-.89-.587-.525-.587-1.617 3.943-3.579 4.772-5.318h-.11q-1.356.374-3.034.98-.697.01-1.628-1.131 0-1.092 1.86-2.012 0-.122.122-.122.03.233.233.233l-.122.232v.112q2.78-.749 2.8-.981 0-4.883-1.05-4.863h-.233l-.233.121v-.354l-.111.01q0 .344-.475.698v-.111q0-.96 1.749-1.89.04-.233.232-.243zm7.107 4.883v.121h-.233v-.111zM95.297 286.619l.131.04q.81.192 1.012.94l.06.182-.01.486-.05.09q-.203 1.183-1.092 2.023-.516.495-2.033 1.081.557-.728.708-1 .162-.273.354-.728-1.011-.04-1.284-1.052l-.04-.07.01-.486q.03-.111.05-.111.223-1.042 1.315-1.325l.212-.06zM122.867 286.68q-.232 1.86-.232 1.991v.111h.121q.233-1.031.233-1.638v-.465zm-.93-1.264v.12q.111 1.275.111 2.215v.111l-.11.587q.464-.182.464-.364v-.698q0-.89-.354-1.971zm1.284-12.476q.213 0 1.274 1.486 1.355.526 1.405.91-.566 1.173-.819 1.183h-.232v-.465h-.121v1.395q-.233.01-.465-.799h-.233v3.023q3.64-.404 6.642-.93 1.982.98 1.982 2.76 0 1.405-1.052 1.415-3.235-.293-4.893-.262l-2.79.05q-.122 1.163-.122 1.75v1.394q0 1.173.233 2.912-.768 2.103-3.023 2.143-.232.01-.698-2.082l.233-.354v-.576q-.273 0-1.173-.91l.122-.01.818.1q.466-.181.466-.353V283q-5.349.788-7.108 1.637-.87-.202-1.628-1.719v-.12q0-1.588 1.396-2.124 0-.08 1.162-.829 0 .233.233.222l-.111.243.232-.01q0 .232-.354.243v.232l6.056-.687v-1.284q0-2.79-.465-2.78-.697-.395-.697-.577 1.435-2.234 1.516-2.234l1.041-.02q1.173-.02 1.173-.253zM142.875 287.872l-.121.243q.617.101.708.101 0-.202-.587-.344zm5.247-1.95q0 .252-.11 1.283v.586l.11-.01.122-1.395v-.465zm-.232-1.75-.233 3.154q.354-.01.354-2.335v-.819zm-4.782 2.649v.121h.111q1.051-1.658 1.76-3.306h.11v.122q-.182 1.546-1.627 3.528v.111q1.567.213 1.981.202l.577-.01q.748-.01.94-4.57v-.465q-1.79.03-2.568 1.679-.384.505-1.284 2.588zm-1.87-13.851q1.748.637 1.748 2.426 0 .658-1.516 2.245l-1.395 2.467v.121q.89-.94 2.214-3.306h.121v.111q0 .668-1.749 3.296h.233l-.122.233.233-.122h.354q0 .112-.122.112.122.232.122.353l.232-.01q4.904-1.132 5.712-1.728 2.528.566 3.62 2.032h.121v-.465h-.121l.121-.233v-.121l-.232.01q.11-.142.11-.708-.11.01-.11-.111l.232-.465q-5.065-4.701-6.652-4.671v-.121q.465 0 .465-.233-.111 0-.111-.121h.343v-.121l-.11-.233q.575-.091.575-.354-.11 0-.11-.121l.232-.122.93-.01q4.994 1.8 8.401 5.096.122 1.466.122 1.749 0 .819-1.284 1.537-.597-.334-1.173-.324h-.111q-.759.01-1.638.263.465.516.465.809-.698.01-1.517 2.123-.697 6.076-1.162 6.086-1.294 1.355-2.568 1.446l-.233.01q-2.163-2.538-2.214-2.527l-.819-.455v-.122h.233l.465.111.121-.01v-.11q-1.071-.334-1.284-.334-1.617 1.728-3.033 2.386 0-.344-.242-.344-.375.242-.577.242.233-.384.233-.586-.597.364-1.173.374h-.111q.465-.526.465-.586-.789.364-1.284.364l-.93.02v-.121q2.406-.8 5.014-4.044 1.052-1.628 1.052-2.124v-.12q-.88.252-1.052.252-1.749-.991-1.749-1.83l-1.749 1.082-.121-.465-.576.353v-.11q.232-.385.232-.587-.495.354-1.173.364h-.11v-.111q.363-.01.697-.597h-.122q-.788.364-1.284.374h-.11l-.82-.1v-.233q1.952-.465 3.974-3.57 1.627-3.022 1.627-3.406 0-.445-.586-1.274.111 0 2.335-.981zM172.063 289.156h.212v.101l.314-.01.202.101v-.1q-1.152-.355-1.254-.607h.112q.778.202.94.192l-1.567-.91-.415.212q0-.202-.212-.202l.101-.212-.202.01v.1q0 .9.202 2.812 0 .727-1.77 1.182 0 .102-.1.102l-.738-1.345q.212-.344.212-.627-.475-.192-.526-.404h.111q.334.202.516.192v-1.456h-.101l-.728.121.101-.212-.1-.212h.1q-.08-.415-.212-.415l.111-.202v-.212q0-.152-.313-.304-.759 1.88-1.466 1.9-.203-.1-.314-.1l.111-.212v-.102q-.202.102-.313.112v1.668q-.131 1.456-1.041 1.476-1.355.02-1.355-3.943 0-1.557-.212-1.557l.1-.212v-.203q0-.212-.201-.212l-.94 1.375q.151 0 1.04-.748v.101l-.94 1.375.728-.435v.112q-2.133 3.79-3.124 3.8l-.1.011q-1.679.02-1.679-1.749v-.516q0-.637 1.365-1.8v.102q-.111.202-.111.313l.212-.1v.313q1.395-1.396 3.549-3.397l-.526-2.083q.404-1.466 2.507-1.506h.101q.435.515.728.515v.101h-.202v.111l.202-.01-.1.213h.201q2.821-.283 2.821-.577 0-.556-2.083-.687-1.041-.99-1.041-1.547.617-.546.617-.637v-.839q-.304.01-2.184.98h-.111q-.364-.08-1.042-.818-.333.222-.515.222l-1.042-.192q-.596.222-1.779.445l-.101.01v-.111q1.061-.637 1.142-.647 0-.142-.313-.304l-1.355.86h-.1l1.04-1.062v-.1l-.727.11q0-.232.525-.313v-.212l-.525.01v-.111h.212v-.213l-.84.02q.526-.586.526-.637v-.202l-.424-.1v-.213q1.88-.86 2.406-.87l.101-.01q2.083.668 2.083 1.426l1.253-.748q.203.1.314.1l-.101.203h.1l-.1.212v.101q1.203-.222 1.456-.232v-.627q-.728-.778-.728-.92l.515-.01-.1-.212q.211 0 .211-.203-.11 0-.11-.11.525-.01.525-.213-.101 0-.101-.101l.516-.111q1.273-.03 2.092 2.042 2.295-.04 2.295-.556l.101-.526q-.202-.799-.94-1.345 1.668-.859 1.88-.859 1.77.516 1.77 1.426 0 .424-.627 1.162l.212-.01q.374 0 1.982-.344 1.142.465 1.142 1.335 0 1.77-1.142 1.79l-.212.01q-.94-.304-2.396-.385 0 .061-.728 1.062v.1q1.041.122 1.041.921l-.728 1.476-1.041.02q-.213.03-.213.213.728-.02.728.606 1.355-.02 3.236-.788 1.981.434 3.235 2.244v.101q-1.355.405-1.355 7.633v.213q-.91 1.789-2.406 1.81-.485-.324-1.456-2.053-.162 0-.415-.415h-.212zm-2.082.142-.112.94v.212l.111-.01q.102-.738.102-.829v-.313zm1.354-.758h.202v.1l-.202.01zm-1.981.141v1.042l.1.525.213-.01v-.728q0-.768-.313-.829zm6.147-2.194v1.668h.11v-1.668zm-3.337-.252-.94 1.577q1.426.505 2.507.485l.213-.01q.232 0 .313-.526h-.111q-.202.111-.314.111-.333-.202-.626-.192l-.728.01v-.1q0-.112.11-.112-.11-.313-.211-.303l.1-.213-.1-.212q.1-.202.1-.313zm3.023-1.406v.101q.111 1.315.111 3.236h.102v-2.508q0-.09-.102-.829zm-13.345.86h.1q.527-.587.527-.637v-.213q-.182.04-.627.85zm8.452-1.82v2.608h.101q.283-1.567.728-1.577-.01-.192-.83-1.031zm-5.43.1q.112.749.213 3.327.516-.445.516-1.254v-.212q.424-.01.424-.323l-.94-1.234q.142 0 .516-.424h.11q0-.213-.211-.203zm.941-.434v.101q.84-.01 2.295 1.73v-2.296q-2.093.455-2.295.465zm4.489-.809v.83q.596-.638.728-.638.546-.01 3.437 3.074v-3.336q0-.213-.202-.213l-.94.02q-1.618.03-3.023.263zm-12.516-3.225 1.253-.02q1.689-.03 2.497 2.871v.111q0 1.406-1.455 1.901h-.213q-1.769-.596-1.769-1.112 0-.86-1.567-2.376l.728-.111q0-.212-.314-.202v-.111l.526-.01v-.203h-.212q0-.202.728-.323v-.101zm10.11-2.78q0 .526-.203 1.254h.102q1.172-.728 1.668-1.598zm3.862-.586v.202h.1v-.213zm-13.558 1.587v.1l-.212.011v-.111zM189.756 292.139v.121l2.345-.08v-.132zm-7.26-5.601h.102q0 .505.121.495l.445-.263q0 .678 1.001.96l.111.243q-1.334 4.004-1.678 4.439-.394.273-1.001.293-1.446-1.274-1.446-2.69 0-.434 1.224-1.678 1.122-1.637 1.122-1.8zm12.264-.718 1.062-.03q1.678-.061 3.205 2.649-.314 1.749-1.87 1.81-1.79-.617-2.134-1.679l-1.466-1.577v-.122l.668-.02v-.121h-.263v-.121l.394-.02v-.122l-.131-.243.667-.02v-.131zm-8.684-1.77q.1.223.1.334 1.598-.394 3.802-.465l.668-.03 1.132.07q.323-.808.323-.91l-.11.011q0 .222-4.247.607 0 .1-1.668.384zm-.566-3.214v.11l.222 1.002q.546-.02 5.48-.98l.778.414v-.556q0-.223-.212-.213-.485.02-4.934.738-.303 0-1.334-.515zm1.122-5.51v.11q.617-.02 1.334 1.285 1.79-.233 1.79-.738.222 0 .222-.779l-.445-.434q-1.749.172-2.901.556zm-.556-2.336h.212v.111h-.212zm-1.456-.05.222-.01v.11h-.222zm4.58 13.234v-.111l-.111-.213q-2.215.476-2.862.728 1.406.273 1.406 1.143v.253q0 .515-.789 1.405 0 .99 3.023.89 2.74-.102 2.902-.749v-.121q0-.445-.556-2.224.131-.01.788 1.092-.232-.769-.232-1.001.252 0 .566 1.243h.111v-.141q-.111-.223-.111-.364 1.87 2.69 2.457 2.659v.242q0 1.345-2.235 1.972-2.376-.162-2.679-.162-2.032.212-2.68.243-3.356-.607-3.356-3.256v-1.496q0-.283-.566-.354v-.384q.445-.576.597-.829-1.375-.597-1.375-1.486.343-.01.343-.233 0-1.082-1.344-4.195.222-.375.222-.567-.97.374-2.012.506-1.233.05-1.233-1.395v-1.001q0-.101 1.456-1.183h.111l-.566.687h.121q0-.131.779-.586h.11l-.323.455q.799-.475.991-.475l-.323.556v.121q.869-.03 3.235-.687-.243-.88-1.456-.83-.688.02-1.78-1.496 0-.9 2.569-1.658 0-.11.11-.11.446.15.446.312l-.233.01v.213q3.579-.536 3.579-.789-.121 0-.334-.1l-1.445.262-.122.02v-.121q1.133-.394 1.133-.586l-.233-.112q-.839.263-.9.263h-.11v.111h-.324v-.11h.323v-.112l.789-.253v-.222l-.556.01v-.111l.444-.02v-.213h-.222v-.111h.222v-.111q-.566.01-1.122-.526.556-.091.556-.344-.222 0-.222-.222v-.101l1.122-.05q1.89-.072 2.457.697l.334.435v.212q0 .566-.435 1.243h.1q1.902-.283 2.902-.657 1.497.465 1.911 1.052v.11q0 1.356-1.91 1.851 0 .728-.557 1.132h.112q1.425-.05 4.478-.94 2.225.768 2.225 1.931v.111q-.192.445-.89.92l-3.357.132q-4.792.172-9.382 1.233v.111q.03.213.223.213 7.006-1.264 7.825-1.294 1.112-.04 2.345 2.487 0 .202-.667.576l-1.345 4.418q-.515.688-1.122.708l-.212.01q-1.072.04-1.688-.84v-.1l.232-.02v-.223q-.414.01-1.567.283v.111q1.476-.05 2.79 2.245-.788 1.476-1.678 1.506l-.445.02q-1.456-1.172-1.456-1.284v-.788q0-.475-.556-1.092l.445-.02-.111-.213q.344-.02.344-.242zm-3.215.566q.05.01.1.01zM211.341 288.934q.566-.01.95.384.445.405.425 1.102-.01.698-.465 1.122-.405.374-1.001.385-.586.01-1-.395-.365-.374-.355-1.092.03-.677.455-1.102.384-.394.991-.404zm.586-1.83q-.09.283-.263.506-.161.222-.333.222-.172.02-.324-.222-.212-.324-.293-.597-.475-5.884-.93-8.735-.455-2.851.506-4.186.96-1.334 2.204.01 1.243 1.345-.567 13.002z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:20.70551872px;font-family:HanyiSentyPagoda;-inkscape-font-specification:&quot;HanyiSentyPagoda, Normal&quot;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start" transform="translate(0 -266)"/>
    
    </g>
    
    </g>
    
    </svg>


    `;

    return {
        ...calcSize,
        svg,
    };
}
