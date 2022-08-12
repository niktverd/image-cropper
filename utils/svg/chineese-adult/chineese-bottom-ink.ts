export default function getChAdultBottomSvg({fill = "#ff00ff", stroke = "#000000", resize = 1}) {
    return `
        <svg
            width="${Math.round(800 * resize)}"
            height="${Math.round(204 * resize)}"
            viewBox="0 0 211.667 53.975"
            opacity="1"
            fill="${fill}"
            stroke="${stroke}"
        >
            <path d="M17.337 3.01l1.763.534-.346.722c1.595 2.345 3.422 4.344 5.479 5.998l-1.134 1.664c-1.952-1.654-3.695-3.653-5.227-5.998-1.427 2.471-3.086 4.533-4.975 6.187l-.976-1.696c2.54-2.345 4.345-4.815 5.416-7.412zm-2.488 9.453v-1.664h6.298v1.664zm-1.511 2.387h9.383v8.668h-1.763v-1.507h-5.857v1.507h-1.763zm1.763 1.57v3.894h5.857v-3.894zM5.812 9.73l2.456-.377 1.606-3.172 1.669.628c-1.532 3.35-3.212 6.03-5.038 8.04l3.558-.879-.724-1.884 1.322-.597c.714 1.403 1.312 2.963 1.795 4.679l-1.511.785-.441-1.664c-1.784.649-3.768 1.172-5.951 1.57l-.535-1.476c1.196-1.256 2.32-2.764 3.369-4.522l-3.18.628-.346-1.602c1.302-1.696 2.362-3.936 3.18-6.721l1.858.534c-.819 2.533-1.847 4.543-3.086 6.03zm3.967 8.291l1.511-.44 1.071 4.24-1.606.534zm-5.038-.283l1.574.44c-.168 1.884-.546 3.653-1.134 5.307L3.576 22.7a22.37 22.37 0 0 0 1.165-4.962zm2.393.377l1.511-.283a20.33 20.33 0 0 1 .598 4.962l-1.669.157c0-1.821-.147-3.434-.441-4.836zM16.707 3.01l1.763.502-.346.722c1.595 2.345 3.432 4.344 5.51 5.998l-1.165 1.696c-1.952-1.654-3.695-3.664-5.227-6.03-1.406 2.491-3.054 4.554-4.944 6.187l-.976-1.664c2.54-2.366 4.335-4.836 5.384-7.412zm-2.488 9.453v-1.696h6.298v1.696zm-1.511 2.355h9.383v8.668h-1.763v-1.507h-5.825v1.507h-1.795zm1.795 1.602v3.863h5.825v-3.863zM5.214 9.699l2.488-.345L9.276 6.15l1.7.628c-1.532 3.35-3.222 6.03-5.07 8.04l3.558-.879-.724-1.853 1.354-.628c.693 1.424 1.281 2.983 1.763 4.679l-1.511.817-.441-1.696c-1.763.649-3.737 1.183-5.92 1.602l-.535-1.507c1.176-1.235 2.299-2.732 3.369-4.491l-3.212.597-.346-1.57C4.563 8.17 5.623 5.93 6.442 3.167L8.3 3.7c-.819 2.533-1.847 4.533-3.086 5.998zm3.967 8.291l1.511-.44 1.071 4.24-1.606.534zm-5.038-.251l1.606.44c-.189 1.884-.577 3.653-1.165 5.307l-1.574-.817c.588-1.654.966-3.297 1.134-4.931zm2.393.345l1.511-.251c.42 1.57.63 3.214.63 4.931l-1.7.188c0-1.842-.147-3.465-.441-4.868zM31.978 3.167l1.763.534-2.299 5.025v14.76h-1.795V11.552l-2.204 2.638-.882-1.759c2.54-2.952 4.345-6.04 5.416-9.264zm4.503 0l1.669.534-.882 2.826h9.667v1.664l-1.858 3.36-1.417-.974 1.322-2.387H36.67c-.546 1.466-1.291 2.91-2.236 4.334l-1.511-1.162a26.16 26.16 0 0 0 3.558-8.197zm3.086 17.932V9.793h1.795V21.35c0 1.466-.714 2.198-2.141 2.198l-2.834-.157-.346-1.79 3.18.283c.231 0 .346-.262.346-.785zm3.464-7.977l1.7-.44c1.05 2.429 1.753 4.91 2.11 7.443l-1.858.534c-.357-2.722-1.008-5.234-1.952-7.537zm-7.085-.44l1.7.44a18.09 18.09 0 0 1-2.834 7.694l-1.606-.879c1.469-2.408 2.383-4.826 2.739-7.254zM31.38 3.167l1.763.534-2.299 5.025v14.76H29.05V11.552l-2.204 2.638-.882-1.759c2.54-2.952 4.345-6.04 5.416-9.264zm4.503 0l1.669.534-.882 2.826h9.667v1.664l-1.858 3.36-1.417-.974 1.322-2.387h-8.313c-.546 1.466-1.291 2.91-2.236 4.334l-1.511-1.162a26.16 26.16 0 0 0 3.558-8.197zm3.086 17.932V9.793h1.795V21.35c0 1.466-.714 2.198-2.141 2.198l-2.834-.157-.346-1.79 3.18.283c.231 0 .346-.262.346-.785zm3.464-7.977l1.7-.44c1.05 2.429 1.753 4.91 2.11 7.443l-1.858.534c-.357-2.722-1.008-5.234-1.952-7.537zm-7.085-.44l1.7.44a18.09 18.09 0 0 1-2.834 7.694l-1.606-.879c1.469-2.408 2.383-4.826 2.739-7.254zm26.765-9.453l1.763.377-1.165 3.266h6.927c0 6.595-.178 11.013-.535 13.253s-1.417 3.36-3.18 3.36l-2.739-.377-.472-1.853 3.212.345c.525 0 .903-.23 1.134-.691.252-.482.43-1.748.535-3.8.126-2.052.189-4.91.189-8.573h-5.951c-.693 1.235-1.459 2.272-2.299 3.109l-1.322-1.256c1.763-1.947 3.065-4.334 3.904-7.16zm-.976 9.453l1.669-.691c.882 1.298 1.627 2.743 2.236 4.334l-1.7.785c-.588-1.654-1.322-3.13-2.204-4.428zm-6.927-6.626h3.653v16.016h-1.606v-.722h-4.062v1.319h-1.606V6.056h1.952l.63-2.889 1.858.345zm-2.047 6.783h4.062V7.72h-4.062zm4.062 1.696h-4.062v5.119h4.062zm5.258-11.306l1.763.345-1.134 3.266h6.896c0 6.595-.178 11.013-.535 13.253s-1.417 3.36-3.18 3.36l-2.739-.345-.441-1.853 3.18.345c.525 0 .913-.241 1.165-.722.231-.461.399-1.727.504-3.8.126-2.052.189-4.899.189-8.542h-5.92c-.714 1.235-1.48 2.261-2.299 3.078l-1.354-1.225c1.784-1.947 3.086-4.334 3.905-7.16zm-.976 9.453l1.7-.722c.882 1.298 1.616 2.743 2.204 4.334l-1.7.785c-.588-1.633-1.322-3.099-2.204-4.397zm-6.896-6.626h3.621v15.985h-1.606v-.722h-4.062v1.35h-1.606V6.056h1.952l.63-2.921 1.858.345zm-2.047 6.815h4.093V7.752h-4.093zm4.093 1.664h-4.093v5.119h4.093zM77.1 3.167l1.763.502-1.858 4.868v14.917h-1.763V11.897l-1.7 2.293-.882-1.759c2.015-2.952 3.495-6.04 4.44-9.264zm2.015 8.479V9.95h5.762V3.167h1.763V9.95h5.857v1.696h-5.857v3.706h6.644v1.664h-6.644v6.532h-1.763v-6.532H78.14v-1.664h6.738v-3.706zm11.084-7.537l1.669.628c-.525 1.591-1.207 3.067-2.047 4.428l-1.574-.879c.756-1.235 1.406-2.628 1.952-4.177zm-10.548.722l1.511-.722a22.77 22.77 0 0 1 2.299 4.177l-1.669.785c-.546-1.466-1.26-2.879-2.141-4.24zm-3.149-1.664l1.763.502-1.858 4.868v14.917h-1.795V11.897l-1.669 2.293-.882-1.759c2.015-2.952 3.495-6.04 4.44-9.264zm2.015 8.479V9.95h5.762V3.167h1.763V9.95H91.9v1.696h-5.857v3.706h6.644v1.664h-6.644v6.532H84.28v-6.532h-6.738v-1.664h6.738v-3.706zm11.084-7.537l1.669.628a20.81 20.81 0 0 1-2.047 4.428l-1.574-.879c.756-1.235 1.406-2.628 1.952-4.177zm-10.548.722l1.511-.722a22.77 22.77 0 0 1 2.299 4.177l-1.7.785c-.525-1.466-1.228-2.879-2.11-4.24zm21.349-1.664l1.763.502-1.574 4.083v15.702h-1.795V11.112l-2.204 3.078-.882-1.759c2.183-2.952 3.747-6.04 4.692-9.264zm3.086 8.479V3.952h11.43v7.694h-5.038l-.535 2.355h6.455v9.453h-1.763v-1.319h-9.572v1.319H102.7v-9.453h4.881l.441-2.355zm1.763-6.03V9.95h7.872V5.616zm-.787 10.081v4.774h9.572v-4.774zM99.772 3.167l1.795.502-1.606 4.083v15.702h-1.763V11.112l-2.204 3.078-.913-1.759c2.183-2.952 3.747-6.04 4.692-9.264zm3.117 8.479V3.952h11.43v7.694h-5.069l-.504 2.355h6.455v9.453h-1.763v-1.319h-9.572v1.319h-1.763v-9.453h4.849l.441-2.355zm1.795-6.03V9.95h7.872V5.616zm-.787 10.081v4.774h9.541v-4.774zm15.87-2.481v-1.664h18.861v1.664zm-.598 0v-1.664h18.861v1.664zm28.969-9.17h13.634v19.408h-1.669v-1.131h-10.265v1.131h-1.7zm1.7 1.602v15.106h10.265V5.648zm.787 4.868V9.008h3.558V6.527h1.574v2.481h3.558v1.507h-3.558v2.45h2.834v6.124h-7.242v-6.124h2.834v-2.45zm2.299 3.863v3.203h4.062v-3.203zm-7.337-11.212l1.669.534-1.574 4.868v14.917h-1.7V12.18l-1.228 2.041-.882-1.759c1.7-2.952 2.939-6.051 3.716-9.296zm1.952.879h13.634v19.44h-1.669v-1.131h-10.265v1.131h-1.7zm1.7 1.602v15.106h10.265V5.648zm.787 4.836V9.008h3.558V6.527h1.574v2.481h3.558v1.476h-3.558v2.481h2.834v6.093h-7.242v-6.093h2.834v-2.481zm2.299 3.894v3.172h4.062v-3.172zm-7.337-11.212l1.669.534-1.574 4.868v14.917h-1.7V12.18l-1.228 2.041-.882-1.79c1.7-2.931 2.939-6.019 3.716-9.264zm33.409-.094l1.574.345-.441 1.256h5.668v1.225h-1.228c-.357 1.068-1.008 2.041-1.952 2.921l3.621 1.162-.693 1.476c-1.595-.335-3.012-.827-4.251-1.476-1.364.754-2.634 1.277-3.81 1.57l-.819-1.319 2.141-.628 1.071-.534-1.417-1.319-.882.974-1.071-1.225c1.113-1.235 1.942-2.711 2.488-4.428zm.598 2.826l-.441.722c.588.586 1.27 1.089 2.047 1.507.882-.649 1.469-1.392 1.763-2.23zm-13.099-.974V3.795h2.551v-.628h1.511v.628h2.676v-.722h1.48v.722h2.582v1.131h-2.582v.817h-1.48v-.817h-2.676v.534h-1.511v-.534zm1.417.377l1.26.44-.283.502h7.368c0 2.596-.147 4.166-.441 4.711-.252.461-.787.691-1.606.691l-.535-.094-.346-1.225.882.094c.189 0 .304-.126.346-.377.126-.293.189-1.141.189-2.544h-6.455l-.63.879-1.071.974-.976-.879c.945-.837 1.711-1.895 2.299-3.172zm.094 5.904V8.286h4.881v2.921zm1.417-1.947v.879h1.952v-.879zm-1.511 2.921h16.751v1.225h-7.368v.879h6.644v1.162h-6.644v.879h6.644v1.162h-6.644v.879h8.313c-.105 2.345-.367 3.79-.787 4.334-.357.523-1.039.785-2.047.785l-1.134-.188-.346-1.507 1.322.188c.462 0 .756-.115.882-.345l.346-2.136h-15.933zm1.669 2.136h5.951v-.879h-5.951zm0 2.01h5.951v-.879h-5.951zm0 2.041h5.951v-.879h-5.951zm-2.015 1.57l1.511.471c-.483 1.235-1.05 2.261-1.7 3.078l-1.417-.785c.714-.942 1.249-1.863 1.606-2.764zm2.834.534l1.574-.44c.483 1.005.777 1.978.882 2.921l-1.669.534c-.126-1.11-.388-2.115-.787-3.015zm7.337.377l1.26-.628 1.763 2.387-1.417.628c-.42-.9-.955-1.696-1.606-2.387zm-3.464-.188l1.511-.44c.588.817.976 1.644 1.165 2.481l-1.606.44c-.168-.879-.525-1.706-1.071-2.481zm4.125-17.587l1.574.377-.441 1.225h5.668v1.225h-1.228c-.357 1.068-1.008 2.041-1.952 2.921l3.621 1.162-.693 1.476c-1.595-.335-3.012-.827-4.251-1.476-1.364.754-2.634 1.277-3.81 1.57l-.819-1.319 2.141-.628 1.071-.502-1.417-1.35-.882.974-1.071-1.225c1.113-1.235 1.942-2.711 2.488-4.428zm.598 2.826l-.441.722c.588.586 1.27 1.089 2.047 1.507.882-.649 1.469-1.392 1.763-2.23zm-13.099-.974V3.795h2.551v-.628h1.511v.628h2.676v-.722h1.48v.722h2.582v1.131h-2.582v.817h-1.48v-.817h-2.676v.534h-1.511v-.534zm1.417.377l1.26.44-.283.534h7.368c0 2.575-.147 4.135-.441 4.679-.252.461-.787.691-1.606.691l-.535-.094-.346-1.225.882.094c.189 0 .304-.126.346-.377.126-.293.189-1.141.189-2.544h-6.455l-.63.879-1.071.974-.976-.879c.945-.837 1.711-1.895 2.299-3.172zm.094 5.904V8.286h4.881v2.921zm1.417-1.947v.879h1.952v-.879zm-1.511 2.921h16.751v1.225h-7.368v.879h6.644v1.162h-6.644v.879h6.644v1.162h-6.644v.879h8.313c-.105 2.345-.367 3.79-.787 4.334-.357.523-1.039.785-2.047.785l-1.134-.188-.346-1.476 1.322.157c.462 0 .756-.115.882-.345l.346-2.136h-15.933zm1.669 2.136h5.951v-.879h-5.951zm0 2.01h5.951v-.879h-5.951zm0 2.041h5.951v-.879h-5.951zm-2.015 1.602l1.511.44c-.483 1.235-1.05 2.261-1.7 3.078l-1.417-.785c.714-.942 1.249-1.853 1.606-2.732zm2.834.502l1.574-.44c.483 1.005.777 1.978.882 2.921l-1.669.534c-.126-1.11-.388-2.115-.787-3.015zm7.337.377l1.26-.628 1.763 2.387-1.417.628c-.42-.9-.955-1.696-1.606-2.387zm-3.464-.188l1.511-.44c.588.817.976 1.644 1.165 2.481l-1.606.44c-.168-.879-.525-1.706-1.071-2.481zm15.429-14.917V4.329h8.943V3.167h1.763v1.162h9.131v1.413h-9.131v1.036h7.903v1.507h-17.35V6.778h7.683V5.742zm2.236 7.945V9.353h15.114v4.334zm1.606-2.826v1.319h11.776v-1.319zm.441 3.612l1.7-.534a6.55 6.55 0 0 1 .976 1.602h5.825l.882-1.602 1.952.534-.787 1.068h5.321v1.507h-20.373V15.54h5.321zm-2.33 3.612h15.681v5.402h-1.669v-.879h-12.312v.879h-1.7zm1.7 1.507v1.476h12.312v-1.476zM187.906 5.71V4.297h8.974V3.135h1.763v1.162h9.1V5.71h-9.1v1.068h7.872v1.507h-17.35V6.778h7.715V5.71zm2.204 7.945V9.322h15.146v4.334zm1.574-2.826v1.319h11.776v-1.319zm.472 3.612l1.669-.502c.42.461.745.984.976 1.57h5.857l.882-1.57 1.952.502-.819 1.068h5.321v1.507h-20.373v-1.507h5.321zm-2.299 3.643h15.681v5.37h-1.7v-.879h-12.312v.879h-1.669zm1.669 1.507v1.507h12.312v-1.507zM63.876 34.414V32.75h2.488l-.882-2.041 1.669-.628a10.16 10.16 0 0 1 1.071 2.669h2.11v1.664zm.535 3.36v-1.602h5.321v1.602zm0 3.36v-1.602h5.321v1.602zm-.094 1.759h5.573v7.6h-1.574v-1.162h-2.33v1.162h-1.669zm1.669 1.57v3.203h2.33v-3.203zm9.478-13.944l1.669-.534c.357.356.619.775.787 1.256h5.857v1.476H70.677v-1.476h5.384zm-4.062 6.878v-3.8h5.227v3.8zm1.417-2.638v1.413h2.299V34.76zm5.133 2.638v-3.8h5.321v3.8zm1.417-2.638v1.413h2.488V34.76zm-8.061 5.025V38.56h2.834v-.722h1.669v.722h3.275v-.722h1.606v.722h3.18v1.225h-3.18v1.131h2.739v1.256H80.69v1.131h3.527v1.35h-5.825c.336.754.861 1.455 1.574 2.104l2.393-1.602 1.26.974c-.651.607-1.448 1.141-2.393 1.602.819.523 1.847.963 3.086 1.319l-1.228 1.413c-3.086-1.11-5.153-2.931-6.203-5.464l-2.393 1.57v2.23l2.645-.817.441 1.35-3.873 1.131-.724-.879V47.29l-1.763.691-.976-1.225c1.7-.461 3.296-1.162 4.786-2.104h-4.251v-1.35h3.369v-1.131h-2.393v-1.256h2.393v-1.131zm4.503 1.131h3.275v-1.131h-3.275zm0 1.225v1.162h3.275V42.14zm-12.564-7.757v-1.696h2.488l-.882-2.01 1.7-.628a10.32 10.32 0 0 1 1.039 2.638h2.141v1.696zm.535 3.36v-1.602h5.29v1.602zm0 3.36v-1.602h5.321v1.602zm-.094 1.759h5.605v7.6h-1.606V49.3h-2.299v1.162h-1.7zm1.7 1.57v3.203h2.299v-3.203zm9.478-13.944l1.669-.534c.357.356.63.764.819 1.225h5.825v1.507H70.079V31.18h5.416zm-4.093 6.909v-3.8h5.227v3.8zm1.417-2.669v1.413h2.299v-1.413zm5.133 2.669v-3.8h5.321v3.8zm1.417-2.669v1.413h2.488v-1.413zm-8.061 5.056v-1.256h2.834v-.691h1.669v.691h3.275v-.691h1.606v.691h3.18v1.256h-3.18v1.131H82.8v1.256H80.06v1.131h3.558v1.319h-5.857c.357.775.892 1.487 1.606 2.136l2.362-1.602 1.26.974c-.651.586-1.448 1.12-2.393 1.602.819.523 1.847.963 3.086 1.319l-1.228 1.413c-3.065-1.11-5.133-2.931-6.203-5.464l-2.393 1.57v2.23l2.676-.817.441 1.319-3.905 1.162-.724-.879V47.29l-1.763.691-.976-1.225c1.721-.482 3.317-1.193 4.786-2.136h-4.251v-1.319h3.369v-1.131h-2.393v-1.256h2.393v-1.131zm4.503 1.131h3.275v-1.131H75.18zm0 1.225v1.162h3.275V42.14zm26.324-6.626l4.692-1.57c0 5.004-.21 8.029-.63 9.076-.399 1.068-1.018 1.602-1.858 1.602l-1.322-.188-.189-1.759 1.165.094c.294 0 .504-.356.63-1.068.168-.775.283-2.575.346-5.402l-2.834 1.068v8.385H99.74v-7.757l-2.047.691v8.919c0 .314.084.523.252.628.252.063 1.26.094 3.023.094 2.246 0 3.6-.147 4.062-.44.189-.188.367-1.131.535-2.826l1.795.785c-.252 1.717-.525 2.774-.819 3.172-.231.356-.703.628-1.417.817-.693.105-2.078.157-4.156.157l-3.464-.063c-1.05-.126-1.574-.722-1.574-1.79v-8.731l-1.165.345-.693-1.57 1.858-.628v-5.935h1.763v5.307l2.047-.785v-5.998h1.763zM89.192 34.1l.724-3.988 1.574.345-.63 3.643h3.369c-.168 4.166-.724 7.485-1.669 9.955l2.393 2.324-1.511 1.036-1.606-1.664c-.987 1.947-2.309 3.538-3.967 4.774l-.976-1.413c1.532-1.193 2.739-2.753 3.621-4.679l-2.991-2.481 1.417-6.187h-2.047V34.1zm.189 7.317l1.763 1.413c.588-1.654.997-4.009 1.228-7.066h-1.763zm11.525-5.904l4.692-1.602c0 5.004-.199 8.04-.598 9.107-.42 1.047-1.039 1.57-1.858 1.57l-1.354-.157-.157-1.79 1.134.094c.294 0 .504-.356.63-1.068.168-.754.283-2.544.346-5.37l-2.834 1.068v8.385h-1.763v-7.788l-2.047.722v8.919c0 .293.094.502.283.628.231.042 1.228.063 2.991.063 2.246 0 3.611-.147 4.093-.44.168-.168.346-1.11.535-2.826l1.763.817c-.231 1.696-.493 2.753-.787 3.172-.252.356-.724.618-1.417.785-.714.126-2.11.188-4.188.188l-3.432-.094c-1.071-.126-1.606-.712-1.606-1.759v-8.762l-1.165.377-.693-1.602 1.858-.628v-5.904h1.763v5.307l2.047-.817v-5.998h1.763zM88.593 34.1l.724-3.988 1.574.377-.598 3.612h3.369c-.189 4.187-.756 7.516-1.7 9.987l2.393 2.293-1.511 1.068-1.574-1.696c-1.008 1.947-2.341 3.538-3.999 4.774l-.976-1.413c1.532-1.172 2.739-2.732 3.621-4.679l-2.991-2.481 1.417-6.187h-2.047V34.1zm.189 7.317l1.763 1.413c.588-1.633.997-3.988 1.228-7.066H90.01zm35.077-10.929h6.014v17.744c0 1.361-.556 2.041-1.669 2.041l-2.204-.283-.378-1.664 2.141.251c.294 0 .441-.178.441-.534v-5.37h-2.834c-.231 2.826-.85 5.412-1.858 7.757l-1.606-.974c1.239-3.35 1.889-6.438 1.952-9.264zm1.606 1.602v3.706h2.739V32.09zm0 5.276v3.737h2.739v-3.737zm-15.146-5.904l1.322-.974 2.834 2.575-1.322 1.319a17.75 17.75 0 0 0-2.834-2.921zm-.535 5.464l1.165-1.131a18.41 18.41 0 0 1 3.086 2.481l-1.228 1.413c-.945-1.068-1.952-1.989-3.023-2.764zm2.928 4.774l1.417.974c-.651 2.722-1.595 5.349-2.834 7.883l-1.511-1.162c1.239-2.408 2.215-4.972 2.928-7.694zm2.299-8.102v-1.602h2.834v-1.853h1.7v1.853h3.369v1.602h-3.369v1.476h2.834v7.945h-2.739v1.947h3.086v1.602h-3.086v3.894h-1.7v-3.894h-3.369v-1.602h3.369v-1.947h-2.834v-7.945h2.739v-1.476zm1.795 2.983v1.602h3.873v-1.602zm0 3.109v1.759h3.904V39.69zm6.486-9.202h6.014v17.744c0 1.361-.556 2.041-1.669 2.041l-2.204-.251-.378-1.696 2.141.283c.294 0 .441-.178.441-.534v-5.402h-2.834c-.231 2.826-.85 5.423-1.858 7.788l-1.606-.974c1.239-3.371 1.889-6.469 1.952-9.296zm1.606 1.602v3.706h2.739V32.09zm0 5.307v3.706h2.739v-3.706zm-15.146-5.936l1.322-.974 2.834 2.575-1.322 1.319a19.57 19.57 0 0 0-2.834-2.921zm-.535 5.496l1.165-1.162a18.41 18.41 0 0 1 3.086 2.481l-1.228 1.413c-.945-1.068-1.952-1.978-3.023-2.732zm2.928 4.774l1.417.974c-.651 2.701-1.595 5.318-2.834 7.851l-1.511-1.162c1.239-2.408 2.215-4.962 2.928-7.663zm2.299-8.134v-1.602h2.834v-1.853h1.7v1.853h3.369v1.602h-3.369v1.507h2.834v7.945h-2.771v1.947h3.117v1.57h-3.117v3.894h-1.669v-3.894h-3.369v-1.57h3.369v-1.947h-2.834v-7.945h2.739v-1.507zm1.763 3.015v1.57h3.904v-1.57zm0 3.078v1.759h3.904V39.69zm23.395-7.506v-1.507h12.564v1.225c-1.176 1.131-2.498 2.073-3.967 2.826h4.503v8.762h-1.763v-2.041h-3.81v1.162h-1.763v-1.162h-3.904v2.041h-1.763v-8.762h5.731l-2.551-1.131 1.417-1.068 2.488 1.319c.987-.461 1.868-1.015 2.645-1.664zm7.526 5.213h3.81v-1.162h-3.81zm-1.763 0v-1.131h-3.904v1.131zm1.763 2.669h3.81v-1.256h-3.81zm-1.763-1.225h-3.904v1.225h3.904zm-.976 5.747l.189-1.225h1.763l-.094 1.225h6.455c-.042 2.533-.304 4.156-.787 4.868-.462.649-1.26.974-2.393.974l-2.299-.283-.252-1.57 2.551.251c.714 0 1.134-.911 1.26-2.732h-4.881c-.882 2.596-3.212 4.072-6.99 4.428l-1.071-1.696c3.191-.167 5.195-1.078 6.014-2.732h-5.038V44.59zm-10.548-12.97l1.26-1.256a17.7 17.7 0 0 1 3.527 2.575l-1.134 1.507c-1.197-1.131-2.414-2.073-3.653-2.826zm-.882 5.464l1.228-1.225 3.306 2.198-1.26 1.507a14.68 14.68 0 0 0-3.275-2.481zm3.275 4.334l1.511 1.068a38.27 38.27 0 0 1-3.086 8.04l-1.795-1.256a36.17 36.17 0 0 0 3.369-7.851zm2.771-9.202V30.74h12.564v1.225c-1.176 1.11-2.498 2.052-3.967 2.826h4.503v8.731h-1.763v-2.01h-3.81v1.131h-1.763v-1.131h-3.904v2.01H139.1v-8.731h5.762l-2.582-1.162 1.417-1.036 2.488 1.319c1.008-.482 1.889-1.047 2.645-1.696zm7.526 5.213h3.81v-1.131h-3.81zm-1.763 0v-1.162h-3.904v1.162zm1.795 2.638h3.779v-1.225h-3.779zm-1.795-1.256h-3.873v1.256h3.873zm-.976 5.747l.189-1.256h1.763l-.094 1.256h6.486c-.063 2.512-.336 4.124-.819 4.836-.462.649-1.26.974-2.393.974l-2.299-.251-.252-1.602 2.551.283c.714 0 1.134-.921 1.26-2.764h-4.881c-.882 2.596-3.212 4.072-6.99 4.428l-1.071-1.664c3.191-.188 5.195-1.11 6.014-2.764h-5.038v-1.476zm-10.548-13.002l1.26-1.225a15.75 15.75 0 0 1 3.527 2.544l-1.134 1.507c-1.176-1.11-2.393-2.052-3.653-2.826zm-.882 5.464l1.26-1.225 3.275 2.198-1.26 1.507c-.987-1.005-2.078-1.832-3.275-2.481zm3.275 4.334l1.511 1.068a38.27 38.27 0 0 1-3.086 8.04l-1.763-1.225a37.85 37.85 0 0 0 3.338-7.883zm21.002-8.385v-1.759h19.239v1.759h-7.526l-1.511 2.481v15.011h-1.952V37.995c-2.246 2.826-4.786 5.245-7.62 7.254l-1.322-1.319c3.946-2.722 7.4-6.375 10.359-10.96zm11.336 4.774l1.417-.974c2.477 2.01 4.891 4.397 7.242 7.16l-1.417 1.413c-2.057-2.533-4.471-5.067-7.242-7.6zM156.04 32.97v-1.759h19.208v1.759h-7.526l-1.511 2.481v15.011h-1.952V37.995c-2.225 2.826-4.755 5.245-7.589 7.254l-1.354-1.319c3.967-2.722 7.421-6.375 10.359-10.96zm11.336 4.774l1.417-.974c2.498 2.01 4.923 4.397 7.274 7.16l-1.417 1.413c-2.057-2.533-4.482-5.067-7.274-7.6zm31.204-7.16l.882 1.507c-1.364.649-2.897 1.12-4.597 1.413v3.36h4.755v1.57h-1.669v11.934h-1.606V38.434h-1.48c-.126 5.778-.756 9.819-1.889 12.122l-1.417-1.162c.651-1.11 1.102-2.523 1.354-4.24.231-1.696.346-6.019.346-12.97 2.183-.356 3.957-.89 5.321-1.602zm-15.335 2.669l1.322-.283.535-.974 1.322.44c-.945 1.78-1.942 3.14-2.991 4.083l1.417-.377-.189-.597 1.165-.377a10.72 10.72 0 0 1 .693 2.826l-1.228.44-.189-1.036-3.275.691-.346-1.131c.819-.775 1.616-1.717 2.393-2.826l-2.141.597-.252-1.225c.714-.775 1.301-1.78 1.763-3.015l1.228.377c-.336 1.047-.745 1.842-1.228 2.387zm5.227 0l1.228-.283.63-.974 1.228.44c-.945 1.717-1.91 3.078-2.897 4.083l1.669-.44-.189-.628 1.165-.44.787 2.921-1.322.44-.157-1.068-3.653.785-.346-1.131c.819-.775 1.616-1.717 2.393-2.826l-2.141.597-.252-1.225c.714-.775 1.301-1.78 1.763-3.015l1.26.377c-.294.942-.682 1.738-1.165 2.387zm-8.943 16.959V30.583h1.669v8.228h10.548v1.57h-10.548v8.228h9.856v1.602zm3.716-7.003l1.322-.345.535-.974 1.322.534c-.945 1.654-1.952 3.004-3.023 4.051l1.417-.345-.157-.691 1.134-.377.724 2.921-1.322.345-.094-.942-3.275.597-.441-1.131c.882-.712 1.679-1.654 2.393-2.826l-2.047.597-.346-1.225c.693-.712 1.281-1.654 1.763-2.826l1.228.345c-.357 1.068-.735 1.832-1.134 2.293zm6.109-2.293l-.976 2.293 1.322-.345.535-.974 1.322.534c-1.008 1.717-2.015 3.067-3.023 4.051l1.354-.345-.094-.691 1.134-.377.63 2.921-1.228.345-.189-.942-3.18.597-.346-1.131c.819-.712 1.585-1.654 2.299-2.826l-2.047.597-.252-1.225c.588-.712 1.081-1.654 1.48-2.826zm8.628-10.332l.882 1.507c-1.364.649-2.897 1.12-4.597 1.413v3.36h4.786v1.57h-1.7v11.934h-1.574V38.434h-1.511c-.126 5.778-.745 9.819-1.858 12.122l-1.417-1.162c.651-1.11 1.092-2.523 1.322-4.24s.346-6.04.346-12.97c2.183-.356 3.957-.89 5.321-1.602zm-15.335 2.638l1.354-.251.504-.974 1.354.44c-.945 1.759-1.952 3.109-3.023 4.051l1.417-.345-.189-.628 1.165-.345a10.33 10.33 0 0 1 .693 2.826l-1.228.44-.189-1.068-3.275.722-.346-1.162c.84-.754 1.637-1.696 2.393-2.826l-2.11.628-.283-1.225c.714-.775 1.301-1.78 1.763-3.015l1.26.345c-.357 1.068-.777 1.863-1.26 2.387zm5.227 0l1.26-.251.598-.974 1.26.44c-.945 1.717-1.921 3.067-2.928 4.051l1.669-.44-.157-.597 1.134-.44.819 2.889-1.354.44-.157-1.036-3.621.785-.378-1.162c.84-.754 1.637-1.696 2.393-2.826l-2.11.628-.283-1.225c.714-.775 1.312-1.78 1.795-3.015l1.228.345c-.294.942-.682 1.738-1.165 2.387zm-8.943 16.959V30.583h1.7v8.197h10.517v1.602h-10.517v8.228h9.824v1.57zm3.716-6.972l1.322-.345.535-.974 1.322.534c-.945 1.654-1.942 3.004-2.991 4.051l1.417-.345-.189-.722 1.165-.345.693 2.921-1.322.345-.094-.974-3.275.628-.441-1.162c.882-.691 1.679-1.633 2.393-2.826l-2.047.628-.346-1.225c.714-.712 1.301-1.654 1.763-2.826l1.26.345c-.357 1.068-.745 1.832-1.165 2.293zm6.109-2.293l-.976 2.293 1.322-.345.535-.974 1.322.534c-.987 1.696-1.984 3.046-2.991 4.051l1.322-.345-.094-.722 1.165-.345.598 2.921-1.228.345-.189-.974-3.18.628-.346-1.162c.819-.691 1.585-1.633 2.299-2.826l-2.047.628-.252-1.225c.588-.712 1.092-1.654 1.511-2.826zm12.847 7.066a2.9 2.9 0 0 1 .882-2.136c.588-.586 1.322-.879 2.204-.879.84 0 1.553.293 2.141.879a2.9 2.9 0 0 1 .882 2.136c0 .817-.294 1.518-.882 2.104s-1.301.879-2.141.879c-.882 0-1.616-.293-2.204-.879s-.882-1.288-.882-2.104zm1.417 0c0 1.11.556 1.664 1.669 1.664a1.46 1.46 0 0 0 1.071-.44c.357-.356.535-.764.535-1.225 0-1.068-.535-1.602-1.606-1.602-1.113 0-1.669.534-1.669 1.602zm-2.015 0a2.9 2.9 0 0 1 .882-2.136c.588-.586 1.322-.879 2.204-.879.84 0 1.553.293 2.141.879a2.9 2.9 0 0 1 .882 2.136c0 .817-.294 1.518-.882 2.104s-1.301.879-2.141.879c-.882 0-1.616-.293-2.204-.879s-.882-1.288-.882-2.104zm1.417 0c0 1.11.556 1.664 1.669 1.664a1.46 1.46 0 0 0 1.071-.44c.357-.356.535-.764.535-1.225 0-1.068-.535-1.602-1.606-1.602-1.113 0-1.669.534-1.669 1.602z" paint-order="stroke fill markers" stroke-linejoin="round" stroke-width="6.02"/>
        </svg>
    `;
}
