export default function getSvg({fill = "#ffffff", stroke = "#000000", resize = 0.9}) {
    return `
        <svg 
            width="${Math.round(800 * resize)}"
            height="${Math.round(108 * resize)}" 
            viewBox="0 0 211.667 28.575" 
            opacity="1"
            fill="${fill}"
            stroke="${stroke}"
        >
            <path d="M15.272 6.09q-4.442 4.806-10.714 7.796l-1.292-1.682q7.861-4.219 11.899-9.425l1.831 1.095-.511.694q5.034 4.833 10.687 7.236L25.96 13.78q-5.653-2.59-10.687-7.69zm-1.831 4.005l1.938-.614q.996 1.816 1.508 4.005l-1.911.694q-.511-2.296-1.534-4.085zm-7.269 7.289v-1.896h17.283v1.816q-4.253 5.794-7.78 8.597l-1.615-1.495q3.419-2.697 6.461-7.022zM14.572 6.09q-4.442 4.806-10.687 7.796l-1.319-1.709q7.861-4.192 11.899-9.398l1.831 1.095-.511.694q5.061 4.806 10.714 7.209l-1.211 2.002q-5.653-2.59-10.714-7.69zm-1.804 4.005l1.911-.614q.996 1.816 1.508 4.005l-1.911.694q-.511-2.296-1.508-4.085zM5.5 17.384v-1.896h17.256v1.816q-4.253 5.794-7.78 8.597l-1.615-1.495q3.446-2.697 6.461-7.022zM43.081 2.673l1.804.507-.808 1.709h6.353v1.789l-2.423 2.91h4.657v7.503h-4.334v5.901q0 .908 1.508.908 1.319 0 1.615-.401.296-.507.404-3.204l1.804.614q-.296 2.99-.7 3.898-.404.908-3.123.908-2.315 0-2.934-.4-.511-.4-.511-1.709v-6.515h-.188q-1.723 5.821-6.461 8.704l-1.319-1.789q4.146-2.51 5.653-6.915h-3.93v-6.915l-1.023.908-1.292-1.308q3.527-3.204 5.249-7.102zm0 4.005l-2.234 2.91h4.55q1.508-1.308 2.531-2.91zm-.915 4.699v3.925h2.423l.592-3.925zm8.48 0h-3.419l-.511 3.925h3.93zm-20.19-6.622h6.865v16.314h-4.926v2.617h-1.938zm1.938 7.316h3.015V6.544h-3.015zm3.015 1.709h-3.015v5.5h3.015zm6.999-11.107l1.804.507-.808 1.709h6.353v1.789l-2.423 2.91h4.657v7.503h-4.334v5.901q0 .908 1.508.908 1.319 0 1.615-.401.296-.507.404-3.204l1.804.614q-.296 2.99-.7 3.898-.404.908-3.123.908-2.315 0-2.934-.4-.511-.4-.511-1.709v-6.515h-.188q-1.723 5.821-6.461 8.704l-1.319-1.789q4.146-2.51 5.653-6.915h-3.93v-6.915l-1.023.908-1.292-1.308q3.527-3.204 5.25-7.102zm0 4.005l-2.234 2.91h4.55q1.508-1.308 2.531-2.91zm-.915 4.699v3.925h2.423l.592-3.925zm8.48 0h-3.419l-.511 3.925h3.93zm-20.19-6.622h6.865v16.314h-4.926v2.617h-1.938zm1.938 7.316h3.015V6.544h-3.015zm3.015 1.709h-3.015v5.5h3.015zm38.873.107v2.51h5.357v1.709h-8.588q1.023 1.682 2.531 2.99 1.831-.801 3.123-2.109l1.427 1.522-2.934 1.682q1.911 1.121 4.55 1.816l-1.023 1.789q-6.865-2.003-9.691-7.69h-3.123v5.607l3.527-1.522.808 1.602-4.926 2.216-1.427-1.308v-6.595h-3.123q-.7 4.406-2.423 7.61l-1.723-1.308q2.423-4.406 2.423-9.906V3.58h19.087v6.008h-3.85v2.51h3.957v1.789zm1.804-6.008v-2.59H60.364v2.59zM65.021 9.588h-4.63l-.108 6.809h4.738v-2.51h-3.93v-1.789h3.93zm1.911 2.483h4.765V9.588h-4.765zm0 1.789v2.51h4.765v-2.51zm5.976 0v2.51h5.357v1.709h-8.588q.996 1.682 2.531 2.99 1.804-.801 3.123-2.109l1.4 1.522-2.907 1.682q1.911 1.121 4.523 1.816l-.996 1.789q-6.865-2.002-9.691-7.69h-3.123v5.607l3.527-1.522.808 1.602-4.953 2.216-1.4-1.308v-6.595h-3.15q-.7 4.406-2.423 7.61l-1.696-1.308q2.423-4.406 2.423-9.906V3.554h19.06v6.008h-3.823v2.51h3.93v1.789zm1.831-6.008v-2.59H59.691v2.59zM64.348 9.561h-4.657l-.108 6.809h4.765v-2.51h-3.957v-1.789h3.957zm1.911 2.483h4.738V9.561H66.26zm0 1.789v2.51h4.738v-2.51zm16.26-7.796V4.114h8.184v1.922h-3.042v5.794h2.827v1.896h-2.827v5.927l3.23-1.415.323 1.816q-3.742 1.896-8.292 3.204l-.404-2.003 3.123-.908v-6.622h-2.827v-1.896h2.827V6.037zm9.799 12.095V3.714h11.522v14.418h-2.827v4.806q0 .908.996.908 1.104 0 1.319-.294.296-.401.296-2.617l1.911.614q-.188 2.804-.808 3.498-.404.614-2.719.614-1.911 0-2.423-.401-.511-.507-.511-1.709v-5.42h-1.804q-.915 5.607-5.357 7.716l-1.211-1.602q3.85-1.789 4.657-6.114zM94.23 5.53v2.403h7.672V5.53zm0 4.112v2.483h7.672V9.641zm0 4.192v2.51h7.672v-2.51zM81.847 6.037V4.114h8.157v1.922h-3.015v5.794h2.827v1.896h-2.827v5.927l3.23-1.415.296 1.816q-3.742 1.896-8.265 3.204l-.404-2.003 3.123-.908v-6.622h-2.827v-1.896h2.827V6.037zm9.799 12.095V3.714h11.495v14.418h-2.827v4.806q0 .908 1.023.908 1.104 0 1.292-.294.323-.401.323-2.617l1.911.614q-.215 2.804-.808 3.498-.404.614-2.719.614-1.938 0-2.423-.401-.511-.507-.511-1.709v-5.42h-1.831q-.888 5.607-5.33 7.716l-1.211-1.602q3.823-1.789 4.63-6.114zM93.557 5.53v2.403h7.672V5.53zm0 4.112v2.483h7.672V9.641zm0 4.192v2.51h7.672v-2.51zm21.133-11l2.019.587-2.638 5.714v16.714h-2.019v-13.51l-2.531 3.017-.996-2.003q4.334-5.02 6.165-10.52zm5.142 0l1.911.587-.996 3.204h10.984V8.52l-2.1 3.818-1.615-1.095 1.508-2.723h-9.503q-.888 2.51-2.504 4.913l-1.723-1.308q2.827-4.299 4.038-9.292zm3.527 20.319V10.336h2.019v13.11q0 2.51-2.423 2.51l-3.23-.187-.404-2.002 3.634.294q.404 0 .404-.908zm3.93-9.025l1.938-.481q1.804 4.085 2.423 8.411l-2.127.587q-.619-4.592-2.234-8.517zm-8.076-.481l1.938.481q-.619 4.726-3.23 8.731l-1.831-1.015q2.531-4.112 3.123-8.197zM113.99 2.833l2.019.587-2.611 5.714v16.714h-2.019v-13.51l-2.531 2.99-1.023-2.002q4.361-4.993 6.165-10.493zm5.142 0l1.938.587-1.023 3.204h11.01V8.52l-2.127 3.818-1.615-1.095 1.508-2.723h-9.476q-.915 2.51-2.531 4.913l-1.723-1.308q2.827-4.299 4.038-9.292zm3.554 20.319V10.336h2.019v13.11q0 2.51-2.423 2.51l-3.23-.214-.404-2.003 3.634.32q.404 0 .404-.908zm3.93-9.025l1.911-.481q1.831 4.085 2.423 8.411l-2.127.587q-.592-4.592-2.207-8.517zm-8.076-.481l1.911.481q-.592 4.726-3.23 8.731l-1.804-1.015q2.504-4.112 3.123-8.197zM149.04 2.913l2.019.4-1.319 3.711h7.888q0 11.214-.619 15.032-.592 3.791-3.634 3.791l-3.123-.4-.511-2.109 3.634.4q.915 0 1.319-.801.404-.801.592-4.299.215-3.498.215-9.719h-6.757q-1.211 2.109-2.638 3.524l-1.508-1.415q3.015-3.311 4.442-8.117zm-1.104 10.733l1.911-.801q1.508 2.189 2.531 4.886l-1.938.908q-.996-2.804-2.504-4.993zm-7.888-7.529h4.146v18.129h-1.831v-.801h-4.63v1.495h-1.831V6.117h2.234l.7-3.284 2.127.401zm-2.315 7.69h4.63V8.013h-4.63zm4.63 1.896h-4.63v5.821h4.63zm5.976-12.816l2.019.4-1.292 3.685h7.861q0 11.214-.592 15.032-.619 3.791-3.634 3.791l-3.15-.401-.485-2.083 3.634.4q.888 0 1.292-.801.404-.801.619-4.325.188-3.498.188-9.692h-6.757q-1.211 2.083-2.611 3.498l-1.534-1.415q3.042-3.284 4.442-8.09zm-1.104 10.707l1.911-.801q1.534 2.189 2.531 4.913l-1.911.881q-1.023-2.803-2.531-4.993zm-7.861-7.503h4.119v18.103h-1.804v-.801h-4.657v1.522h-1.804V6.09h2.207l.727-3.311 2.1.4zm-2.315 7.716h4.657V7.986h-4.657zm4.657 1.896h-4.657v5.821h4.657zM171.196 3.18l1.911-.587 1.023 1.682h9.772v4.512h-1.911V6.09h-18.064v2.697h-1.831V4.275h9.799zm-5.546 3.605h15.533l-.296 2.323h3.446v1.495h-3.634l-.323 2.403h-15.937l.511-2.403h-3.338V9.107h3.527zm6.569 1.388h-4.953l-.188.908h4.926zm6.784 0h-4.846l-.215.908h4.846zm-7.457 3.391l.188-.988h-4.846l-.188.988zm6.945 0l.215-.988h-5.142l-.215.988zm-14.026 11.107V13.78h16.664v8.891h-3.23l5.842 1.308-.808 1.816-7.376-1.922.727-1.201h-6.865l1.292 1.015q-3.123 1.308-7.565 2.109l-1.319-1.602 6.676-1.522zm1.911-7.396v.988h12.814v-.988zm0 2.403v1.095h12.841v-1.095zm0 2.403v1.095h12.814v-1.095zm4.173-16.928l1.911-.587.996 1.682h9.799V8.76h-1.911V6.064h-18.064V8.76h-1.831V4.248h9.799zm-5.546 3.605h15.533l-.296 2.323h3.419v1.495h-3.634l-.296 2.403h-15.937l.485-2.403h-3.311V9.081h3.527zm6.569 1.388h-4.953l-.215.908h4.953zm6.757 0h-4.846l-.188.908h4.846zm-7.484 3.391l.215-.988h-4.846l-.215.988zm6.972 0l.215-.988h-5.169l-.188.988zm-14.026 11.107v-8.891h16.637v8.891h-3.23l5.869 1.308-.808 1.816-7.376-1.922.7-1.201h-6.865l1.319 1.015q-3.123 1.308-7.565 2.109l-1.319-1.602 6.676-1.522zm1.911-7.396v.988h12.814v-.988zm0 2.403v1.095h12.814v-1.095zm0 2.403v1.095h12.841v-1.095zm23.609-10.92V7.238h7.08V2.833h2.019v4.406H209.1q0 12.522-.808 15.326-.7 2.804-3.715 2.804l-3.23-.214-.511-2.003 3.742.214q.996 0 1.4-.507.511-.614.7-3.818.323-3.204.323-9.906h-8.588q0 10.413-9.288 16.714l-1.104-1.789q8.372-5.821 8.372-14.925zm-.673 0V7.238h7.053V2.833h2.019v4.406h10.714q0 12.522-.808 15.326-.727 2.804-3.742 2.804l-3.23-.214-.511-2.003 3.742.214q.996 0 1.4-.507.511-.614.727-3.818.296-3.204.296-9.906h-8.588q0 10.413-9.288 16.714l-1.104-1.789q8.372-5.821 8.372-14.925z" paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="5.132"/>
        </svg>
    `;
}