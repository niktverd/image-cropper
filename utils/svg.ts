import { Variants } from "../src/components/CropControls/CropControls";
import { genColors } from "./genColors";
import { wiggle } from "../utils/wiggle";

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

export type LoadTextArgs = {
    variant: Variants,
    amplitude: number,
};

export const loadTexts = ({variant, amplitude}: LoadTextArgs) => {
    const texts: {
        wBottom?: any,
        wTop?: any,
        wLeft?: any,
        wCenter?: any,
    } = {
        wBottom: undefined,
        wTop: undefined,
        wLeft: undefined,
        wCenter: undefined,
    };
    console.log({variant});
    if (variant !== Variants.None) {
        const svgs = getSvgByVariant(variant);

        const chBottom = getChineeseText(svgs.bottom);
        const chTop = getChineeseText(svgs.top);
        const chCenter = getChineeseText(svgs.center);
        const chLeft = getChineeseText(svgs.left);
        
        texts.wBottom  = wiggle({
            input: chBottom,
            topBase: 700 + Math.floor(90 * Math.random()),
            leftBase: 10 + Math.floor(50 * Math.random()),
            maxDistance: amplitude,
        });

        texts.wTop  = wiggle({
            input: chTop,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 10 + Math.floor(90 * Math.random()),
            maxDistance: amplitude,
        });

        texts.wCenter  = wiggle({
            input: chCenter,
            topBase: 500 + Math.floor(120 * Math.random()),
            leftBase: 220 + Math.floor(50 * Math.random()),
            maxDistance: amplitude,
        });

        texts.wLeft  = wiggle({
            input: chLeft,
            topBase: 0 + Math.floor(90 * Math.random()),
            leftBase: 0 + Math.floor(90 * Math.random()),
            maxDistance: amplitude,
        });
    }

    return texts;
}

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