
export default function getFirstNameSvg(fn: string, fnSize:string) {
    const FirstName = `
        <svg
            width="500"
            height="600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                .title {fill:rgba(0, 0, 0, 0.85); font-size: ${fnSize}; font-family: Myriad Pro; font-weight: bold;
            </style>
            <text x="0%" y="50%" text-anchor="left" class="title">${fn}</text>
        </svg>
    `;

    return FirstName;
}