
export default function getSvg({fill = "#ff00ff", stroke = "#000000", resize = 1}) {
    return `
        <svg
            width="${Math.round(108 * resize)}"
            height="${Math.round(800 * resize)}" 
            viewBox="0 0 28.575 211.667"
            opacity="1"
            fill="${fill}"
            stroke="${stroke}"
        >
            <path d="M2.883 8.408V6.491H5.64l-.984-2.317 1.884-.715q.788 1.402 1.181 3.032h2.362v1.917zm.591 3.805V10.41h5.934v1.802zm0 3.833v-1.831h5.934v1.831zm-.084 2.003h6.215v8.64H7.833v-1.287H5.274v1.287H3.39zm1.884 1.831v3.605h2.559V19.88zM15.848 3.974l1.884-.601q.591.601.9 1.402h6.525v1.717H10.505V4.775h6.046zm-4.556 7.867V7.492h5.821v4.348zm1.603-3.032v1.602h2.559V8.808zm5.737 3.032V7.492h5.934v4.348zm1.575-3.032v1.602h2.784V8.808zm-8.999 5.722v-1.402h3.15v-.801h1.884v.801h3.656v-.801h1.772v.801h3.572v1.402H21.67v1.316h3.065v1.402H21.67v1.316h3.965v1.516H19.11q.591 1.316 1.772 2.403l2.672-1.802 1.378 1.116q-1.069 1.001-2.672 1.802 1.406.915 3.459 1.516l-1.378 1.602q-5.147-1.917-6.918-6.237l-2.672 1.802V24.8l2.981-.915.478 1.516-4.331 1.316-.816-1.001v-2.632l-1.969.801-1.097-1.402q2.869-.801 5.343-2.403h-4.725v-1.516h3.74v-1.316h-2.672v-1.402h2.672V14.53zm5.034 1.316h3.684V14.53h-3.684zm0 1.43v1.287h3.684v-1.287zM2.883 7.75V5.833H5.64l-.984-2.317 1.884-.715q.788 1.43 1.181 3.032h2.39V7.75zm.591 3.805V9.752h5.934v1.802zm0 3.833v-1.831h5.934v1.831zm-.112 2.003h6.243v8.64h-1.8v-1.287H5.246v1.287H3.362zm1.884 1.831v3.605h2.559v-3.605zM15.82 3.316l1.884-.601q.591.601.9 1.402h6.525v1.716H10.505V4.117h6.018zm-4.556 7.867V6.834h5.85v4.348zm1.575-3.032v1.602h2.559V8.15zm5.737 3.032V6.834h5.934v4.348zm1.575-3.032v1.602h2.784V8.15zm-8.999 5.722V12.47h3.15v-.801h1.884v.801h3.656v-.801h1.8v.801h3.544v1.402h-3.544v1.316h3.065v1.402h-3.065v1.316h3.937v1.516h-6.525q.591 1.316 1.8 2.403l2.644-1.802 1.406 1.116q-1.097 1.001-2.672 1.802 1.378.915 3.459 1.516l-1.378 1.602q-5.147-1.917-6.946-6.237l-2.644 1.802v2.518l2.953-.915.506 1.516-4.359 1.316-.787-1.001v-2.632l-1.997.801-1.069-1.402q2.869-.801 5.343-2.403h-4.753v-1.516h3.74V16.59h-2.644v-1.402h2.644v-1.316zm5.062 1.316h3.656v-1.316h-3.656zm0 1.43v1.287h3.656v-1.287zm2.953 19.311l5.259-1.802q0 8.554-.703 10.356-.703 1.802-2.081 1.802l-1.491-.2-.197-2.003 1.294.086q.506 0 .703-1.202.281-1.316.394-6.122l-3.178 1.202v9.555h-1.969v-8.84l-2.278.801v10.156q0 .486.309.687.394.114 3.347.114 3.769 0 4.556-.515.281-.286.591-3.204l1.969.887q-.394 2.918-.872 3.633-.394.601-1.603.915-1.181.2-4.64.2l-3.853-.114q-1.772-.2-1.772-2.003v-9.956l-1.294.401-.787-1.802 2.081-.715v-6.752h1.969v6.036l2.278-.887v-6.837h1.969zM5.443 34.298l.787-4.52 1.772.401-.703 4.12h3.768q-.309 7.152-1.884 11.386l2.672 2.603-1.687 1.202-1.772-1.917q-1.687 3.319-4.443 5.436l-1.097-1.602q2.587-2.003 4.05-5.321l-3.347-2.832 1.575-7.038H2.855v-1.917zm.197 8.354l1.997 1.602q.984-2.804 1.378-8.039H7.018zm13.555-7.409l5.231-1.802q0 8.525-.675 10.356-.703 1.802-2.081 1.802l-1.491-.2-.197-2.003 1.294.086q.506 0 .703-1.201.281-1.316.394-6.122l-3.178 1.202v9.555h-1.969v-8.869l-2.278.801v10.184q0 .486.309.687.394.114 3.347.114 3.769 0 4.556-.515.281-.286.591-3.204l1.969.887q-.394 2.918-.872 3.633-.422.601-1.603.887-1.181.2-4.64.2l-3.853-.086q-1.772-.2-1.772-2.003v-9.956l-1.294.401-.787-1.831 2.081-.687v-6.752h1.969v6.036l2.278-.915v-6.837h1.969zM5.443 33.64l.816-4.52 1.772.401-.703 4.12h3.768q-.309 7.152-1.884 11.357l2.672 2.632-1.687 1.201-1.772-1.917Q6.736 50.233 3.98 52.35l-1.097-1.602q2.559-2.003 4.05-5.321l-3.347-2.832 1.575-7.038H2.883V33.64zm.197 8.354l1.969 1.602q1.012-2.804 1.406-8.039H7.018zM3.558 59.102v-1.917h11.08q0 14.79-.591 18.309-.478 3.433-3.065 3.433l-2.559-.2-.506-2.117 3.065.2q.787 0 1.097-.715.281-.801.478-5.436H8.705q-1.069 5.035-4.247 8.468l-1.575-1.316q2.756-3.118 3.853-7.152H3.277v-1.802H7.13l.197-4.034H3.868v-1.688h3.459v-4.034zm9.112 0H9.183v4.034h3.487zm0 5.722H9.183l-.197 4.034h3.572zm3.965-7.667h8.577v1.917L22.57 65.51q2.869 3.118 2.869 6.151 0 4.32-3.29 4.32l-2.165-.4-.394-2.117q1.491.515 2.559.515 1.294 0 1.294-2.317 0-2.918-3.065-5.75l2.784-6.837h-4.556v20.026h-1.969zm-13.049 1.23V56.47h11.052q0 14.79-.591 18.309-.478 3.404-3.065 3.404l-2.559-.2-.506-2.088 3.065.2q.787 0 1.097-.715.281-.801.478-5.436H8.705q-1.069 5.035-4.247 8.468l-1.575-1.316q2.756-3.118 3.853-7.152H3.277v-1.802H7.13l.197-4.034H3.868V62.42h3.459v-4.034zm9.112 0H9.239v4.034h3.459zm0 5.722H9.239l-.197 4.034h3.544zm3.965-7.667h8.606v1.917l-2.672 6.437q2.869 3.118 2.869 6.151 0 4.32-3.262 4.32l-2.194-.4-.394-2.117q1.491.486 2.587.486 1.266 0 1.266-2.289 0-2.918-3.065-5.75l2.784-6.837h-4.556v20.026h-1.969zM5.386 94.976V82.904h17.999v12.073H15.37v2.603h8.409v1.917H15.37v2.804h9.984v1.917H3.305V102.3h10.096v-2.804H4.796V97.58h8.606v-2.603zM7.355 84.82v3.319h6.018V84.82zm14.062 0H15.37v3.319h6.047zM7.355 89.941v3.118h6.046v-3.118zm14.033 0H15.37v3.118h6.018zM5.386 94.29V82.217h17.971V94.29H15.37v2.603h8.381v1.917H15.37v2.832h9.984v1.888H3.305v-1.888h10.068V98.81H4.768v-1.917h8.606V94.29zm1.997-10.156v3.319h6.018v-3.319zm14.033 0h-6.018v3.319h6.018zM7.383 89.255v3.118h6.046v-3.118zm14.033 0H15.37v3.118h6.047zm-8.015 39.25v-20.226h1.969v4.12l1.997 4.32q3.347-2.117 5.821-5.321l1.687 1.316q-2.587 3.519-6.524 5.836 3.065 5.407 7.509 8.439l-1.181 2.317q-5.737-4.234-9.309-12.588v12.473q-.084 2.231-2.756 2.231l-3.656-.429-.394-2.003q1.884.515 3.74.515 1.097 0 1.097-1.001zm-9.787-12.588v-1.917h7.903v1.917q0 .801-1.884 5.235-1.772 4.434-5.428 7.839l-1.097-1.716q4.95-4.606 6.525-11.357zm9.787 11.901v-20.226h1.997v4.12l1.969 4.348q3.375-2.117 5.85-5.35l1.659 1.316q-2.559 3.519-6.524 5.836 3.065 5.436 7.509 8.439l-1.181 2.317q-5.737-4.234-9.281-12.559v12.445q-.113 2.231-2.784 2.231l-3.656-.401-.394-2.031q1.884.515 3.768.515 1.069 0 1.069-1.001zm-9.787-12.588v-1.888h7.931v1.888q0 .83-1.884 5.235-1.772 4.434-5.428 7.839l-1.097-1.688q4.95-4.635 6.525-11.386zm.197 20.827l1.378-1.402q2.165 1.202 3.965 2.918l-1.294 1.716q-1.969-1.917-4.05-3.233zm-.984 6.237l1.378-1.402 3.656 2.518-1.378 1.717q-1.687-1.717-3.656-2.832zm3.656 4.949l1.687 1.202q-1.209 4.72-3.459 9.155l-1.997-1.402q2.39-4.234 3.768-8.954zm8.803-12.273l1.772-.601 1.687 2.918h6.525v1.802h-8.324q-1.659 3.319-3.543 4.921l7.818-.887-1.491-2.117 1.687-1.116q2.165 2.603 3.459 5.521l-1.8 1.03-.872-1.717q-5.259.801-11.165 1.087l-.506-1.602q2.362-1.802 4.247-5.121h-4.556v-1.802h6.328zm-2.756 11.644l1.884.429q-.112 4.32-1.097 6.637-.984 2.289-3.15 4.005l-1.603-1.602q2.081-1.602 2.869-3.519.9-1.917 1.097-5.95zm7.818 9.469l-.113-9.04h1.884v7.638q0 .801.394.801.787 0 .9-.2.394-.315.478-1.917l1.884.801q-.281 2.203-.9 2.718-.591.515-2.362.515-1.969 0-2.165-1.316zm-4.05 1.516v-10.471h1.856V157.6zM3.84 135.4l1.406-1.43q2.165 1.23 3.937 2.918l-1.266 1.717q-1.997-1.917-4.078-3.204zm-.984 6.237l1.378-1.43 3.684 2.518-1.406 1.716q-1.659-1.716-3.656-2.804zm3.656 4.921l1.687 1.202q-1.181 4.72-3.459 9.155l-1.969-1.402q2.362-4.234 3.74-8.954zm8.802-12.273l1.8-.601 1.659 2.918h6.524v1.802h-8.296q-1.687 3.318-3.572 4.921l7.818-.887-1.491-2.117 1.687-1.116q2.194 2.632 3.459 5.55l-1.772 1.001-.9-1.716q-5.231.801-11.165 1.116l-.506-1.631q2.39-1.802 4.275-5.121H10.28v-1.802h6.328zm-2.784 11.672l1.884.4q-.084 4.32-1.069 6.637-1.012 2.317-3.178 4.005l-1.575-1.602q2.081-1.602 2.869-3.519.872-1.917 1.069-5.922zm7.818 9.441l-.084-9.04h1.884v7.638q0 .801.394.801.787 0 .872-.2.394-.315.506-1.917l1.884.801q-.309 2.231-.9 2.718-.591.515-2.362.515-1.997 0-2.194-1.316zm-4.05 1.516v-10.471h1.884v10.471zM3.53 163.865v-2.031h21.458v2.031h-8.409l-1.659 2.804v17.108h-2.194v-14.19q-3.74 4.835-8.493 8.239l-1.491-1.488q6.637-4.635 11.587-12.473zm12.655 5.436l1.575-1.116q4.134 3.404 8.099 8.153l-1.575 1.602q-3.459-4.32-8.099-8.64zM3.53 163.178v-2.002h21.43v2.002h-8.381l-1.687 2.804v17.108h-2.165V168.9q-3.768 4.835-8.521 8.268l-1.491-1.516q6.637-4.635 11.587-12.473zm12.655 5.436l1.575-1.116q4.162 3.433 8.099 8.153l-1.575 1.602q-3.459-4.32-8.099-8.64zm-1.491 38.421v-20.197h1.969v7.324h8.324v1.917h-8.324v10.957h8.999v1.917H2.94v-1.917h3.853v-15.878h1.969v15.878zm0-.687v-20.197h1.969v7.324h8.324v1.917h-8.324v10.957h8.999v1.917H2.94v-1.917h3.853V190.47h1.969v15.878z" paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="5.43"/>
        </svg>
    `;
}