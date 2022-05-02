
export default function getExpirationSvg(exp: string, expSize:string) {
    const Expiration = `
        <svg
            width="500"
            height="160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                .title {fill:rgba(177, 24, 25, 0.85); font-size: ${expSize}; font-family: Myriad Pro; font-weight: bold;
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${exp}</text>
        </svg>
    `;

    return Expiration;
}