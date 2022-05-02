
export default function getDriverLisenceSvg(dl: string, dlSize:string) {
    const DriverLisence = `
        <svg
            width="500"
            height="160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                .title {fill:rgba(177, 24, 25, 0.85); font-size: ${dlSize}; font-family: Myriad Pro; font-weight: bold;
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${dl}</text>
        </svg>
    `;

    return DriverLisence;
}