import { Variants } from "../src/components/CropControls/CropControls";
import { genColors } from "./genColors";

// default
import getChAdultBottomSvg from "./svg/chineese-adult/chineese-bottom-ink";
import getChAdultTopSvg from "./svg/chineese-adult/chineese-top-ink";
import getChAdultCenterSvg from "./svg/chineese-adult/chineese-center-ink";
import getChAdultLeftSvg from "./svg/chineese-adult/chineese-left-ink";

import getChAdultBottomHotSimplifiedSvg from "./svg/chineese-adult/hot.min/simplified-bottom";
import getChAdultCenterHotSimplifiedSvg from "./svg/chineese-adult/hot.min/simplified-center";
import getChAdultLeftHotSimplifiedSvg from "./svg/chineese-adult/hot.min/simplified-left";
import getChAdultTopHotSimplifiedSvg from "./svg/chineese-adult/hot.min/simplified-top";

import getChAdultBottomHotTraditionalSvg from "./svg/chineese-adult/hot.min/traditional-bottom";
import getChAdultCenterHotTraditionalSvg from "./svg/chineese-adult/hot.min/traditional-center";
import getChAdultLeftHotTraditionalSvg from "./svg/chineese-adult/hot.min/traditional-left";
import getChAdultTopHotTraditionalSvg from "./svg/chineese-adult/hot.min/traditional-top";

import getChAdultBottomLiteSimplifiedSvg from "./svg/chineese-adult/lite.min/simplified-bottom";
import getChAdultCenterLiteSimplifiedSvg from "./svg/chineese-adult/lite.min/simplified-center";
import getChAdultLeftLiteSimplifiedSvg from "./svg/chineese-adult/lite.min/simplified-left";
import getChAdultTopLiteSimplifiedSvg from "./svg/chineese-adult/lite.min/simplified-top";

import getChAdultBottomLiteTraditionalSvg from "./svg/chineese-adult/lite.min/traditional-bottom";
import getChAdultCenterLiteTraditionalSvg from "./svg/chineese-adult/lite.min/traditional-center";
import getChAdultLeftLiteTraditionalSvg from "./svg/chineese-adult/lite.min/traditional-left";
import getChAdultTopLiteTraditionalSvg from "./svg/chineese-adult/lite.min/traditional-top";

export const getChineeseText = (getterForSvg: any, resize = 1) => {
    const bottomColor = genColors();
    const resizeBottom = 0.85 + 0.4 * Math.random() * resize;
    const svg = getterForSvg({...bottomColor, resize: resizeBottom});
    return Buffer.from(svg);
};

export const getSvgByVariant = (variant: Variants) => {
    if (variant === Variants.SimplifiedHot) {
        return {
            bottom: getChAdultBottomHotSimplifiedSvg,
            top: getChAdultTopHotSimplifiedSvg,
            center: getChAdultCenterHotSimplifiedSvg,
            left: getChAdultLeftHotSimplifiedSvg,
        };
    }

    if (variant === Variants.TraditionalHot) {
        return {
            bottom: getChAdultBottomHotTraditionalSvg,
            top: getChAdultTopHotTraditionalSvg,
            center: getChAdultCenterHotTraditionalSvg,
            left: getChAdultLeftHotTraditionalSvg,
        };
    }
    if (variant === Variants.SimplifiedLite) {
        return {
            bottom: getChAdultBottomLiteSimplifiedSvg,
            top: getChAdultTopLiteSimplifiedSvg,
            center: getChAdultCenterLiteSimplifiedSvg,
            left: getChAdultLeftLiteSimplifiedSvg,
        };
    }

    if (variant === Variants.TraditionalLite) {
        return {
            bottom: getChAdultBottomLiteTraditionalSvg,
            top: getChAdultTopLiteTraditionalSvg,
            center: getChAdultCenterLiteTraditionalSvg,
            left: getChAdultLeftLiteTraditionalSvg,
        };
    }

    return {
        bottom: getChAdultBottomSvg,
        top: getChAdultTopSvg,
        center: getChAdultCenterSvg,
        left: getChAdultLeftSvg,
    }
}