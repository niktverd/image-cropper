
export default function getChAdultCenterSvg({fill = "#ff00ff", stroke = "#000000", resize = 1}) {
    return `
        <svg 
            width="${Math.round(190 * resize)}"
            height="${Math.round(100 * resize)}" 
            viewBox="0 0 50.271 26.458"
            opacity="1"
            fill="${fill}"
            stroke="${stroke}"
        >
            <path d="M10.377 14.971v-1.83h5.233l.087-4.879h-3.614V6.52h3.614V2.802h1.821V6.52h4.944v6.622h1.995v1.83h-6.129c1.311 3.021 3.45 5.344 6.418 6.97l-1.359 1.743c-2.891-1.936-5.059-4.511-6.505-7.726-.964 3.156-2.92 5.731-5.869 7.726l-1.648-1.278c3.199-2.169 5.156-4.647 5.869-7.435zm7.054-1.83h3.267V8.262h-3.18zM7.225 23.655V2.773H8.96v4.444l2.978 3.63-1.185 1.568L8.96 9.395v14.26zM4.508 7.333l1.706.349c-.173 2.362-.559 4.511-1.156 6.448l-1.648-.813c.617-1.994.983-3.989 1.099-5.983zm5.262 7.609v-1.801h5.233l.087-4.908h-3.614V6.491h3.614V2.773h1.821v3.718h4.973v6.651h1.966v1.801H17.72c1.33 3.02 3.469 5.354 6.418 6.999l-1.359 1.714c-2.891-1.936-5.059-4.511-6.505-7.726-.964 3.156-2.92 5.731-5.869 7.726l-1.619-1.278c3.18-2.169 5.136-4.647 5.869-7.435zm7.025-1.801h3.267V8.233H16.91zM6.561 23.655V2.802h1.735v4.444l2.978 3.63-1.185 1.539-1.792-2.991v14.231zM3.843 7.333l1.706.349c-.173 2.362-.559 4.511-1.156 6.448l-1.619-.813c.597-1.994.954-3.989 1.07-5.983zM29.139 3.79l16.912-.726.723 1.452-8.962.465-.52 1.336h8.673v1.743h-9.511l-.607 1.162h11.651v1.743H34.661l-.896 1.162h12.287v11.53H44.23v-.726H33.765v.726h-1.821v-9.701c-1.253 1.142-2.64 2.14-4.163 2.992l-.896-1.714c2.043-1.22 3.787-2.643 5.233-4.269H27.52V9.221h6.042l.723-1.162h-4.597V6.317h5.522l.52-1.249-5.955.261zm4.626 10.078v1.365H44.23v-1.365zm0 2.991v1.365h10.494v-1.365zm0 2.991v1.365H44.23v-1.365zM28.561 3.79l16.883-.726.723 1.452-8.933.465-.549 1.365h8.673v1.714h-9.482l-.636 1.191H46.89v1.714H34.054l-.896 1.191h12.287v11.501h-1.821v-.726H33.158v.726h-1.821v-9.701a22.78 22.78 0 0 1-4.134 2.992l-.925-1.714c2.062-1.22 3.816-2.643 5.262-4.269h-4.626V9.25h6.071l.723-1.191h-4.626V6.346h5.522l.549-1.278-5.984.261zm4.626 10.078v1.365h10.465v-1.365zm0 2.991v1.365h10.494v-1.365zm0 2.991v1.365h10.465v-1.365z" paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="5.547"/>
        </svg>
    `;
}