export const calculateCropInfo = (width: number, height: number) => {
    const base =  (width > height) ? height : width;

    return {
        height: base,
        width: base,
        top: (height - base) / 2,
        left: (width - base) / 2,
    }
};
