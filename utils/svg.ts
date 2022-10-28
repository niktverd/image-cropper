import { Variants } from "../src/components/CropControls/CropControls";
import { genColors } from "./genColors";

// default
import getChAdultBottomSvg from "./svg/chineese-adult/chineese-bottom-ink";
import getChAdultTopSvg from "./svg/chineese-adult/chineese-top-ink";
import getChAdultCenterSvg from "./svg/chineese-adult/chineese-center-ink";
import getChAdultLeftSvg from "./svg/chineese-adult/chineese-left-ink";

import getChAdultBottomHotSimplifiedSvg from "./svg/chineese-adult/hot.min/simplified-bottom";


export const getChineeseText = (getterForSvg: any, resize = 1) => {
    const bottomColor = genColors();
    const resizeBottom = 0.65 + 0.5 * Math.random() * resize;
    const svg = getterForSvg({...bottomColor, resize: resizeBottom});
    return Buffer.from(svg);
};

export const getSvgByVariant = (variant: Variants) => {

    return {
        // bottom: getChAdultBottomSvg,
        bottom: getChAdultBottomHotSimplifiedSvg,
        top: getChAdultTopSvg,
        center: getChAdultCenterSvg,
        left: getChAdultLeftSvg,
    }
}