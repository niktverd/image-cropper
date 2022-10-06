export type Wiggle = {
    input: Buffer,
    topBase: number,
    leftBase: number,
    maxDistance: number,
};

export const wiggle = ({
    input,
    topBase,
    leftBase,
    maxDistance,
}: Wiggle) => {
    // const initX = Math.random() * 0.1;
    // const initY = Math.random() * 0.1;

    return (index: number) => {
        const top = Math.round(topBase + Math.sin(index + 0.1 * Math.random()) * maxDistance);
        const left = Math.round(leftBase + Math.cos(0.5 * index - 0.1 * Math.random()) * maxDistance);

        // console.log({topBase, top, leftBase, left});

        return {input, top, left};
    };
};
