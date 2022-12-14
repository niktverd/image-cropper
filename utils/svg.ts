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
    variant: Variants;
    amplitude: number;
    totalWidth: number;
    totalHeight: number;
};

export const loadTexts = ({
    variant,
    amplitude,
    totalWidth,
    totalHeight,
}: LoadTextArgs) => {
    const texts: {
        wBottom?: any;
        wTop?: any;
        wLeft?: any;
        wCenter?: any;
    } = {
        wBottom: undefined,
        wTop: undefined,
        wLeft: undefined,
        wCenter: undefined,
    };
    console.log({ variant });
    if (variant !== Variants.None) {
        const svgs = getSvgByVariant(variant);

        const chBottom = getChineeseText(svgs.bottom, {
            maxWidth: Math.floor(totalWidth * 0.8),
            maxHeight: Math.floor(totalHeight * 0.3),
        });
        const chTop = getChineeseText(svgs.top, {
            maxWidth: Math.floor(totalWidth * 0.8),
            maxHeight: Math.floor(totalHeight * 0.3),
        });
        const chCenter = getChineeseText(svgs.center, {
            maxWidth: Math.floor(totalWidth * 0.45),
            maxHeight: Math.floor(totalHeight * 0.45),
        });
        const chLeft = getChineeseText(svgs.left, {
            maxWidth: Math.floor(totalWidth * 0.3),
            maxHeight: Math.floor(totalHeight * 0.9),
        });

        texts.wBottom = wiggle({
            input: chBottom.image,
            topBase:
                totalHeight -
                chBottom.maxHeight +
                Math.floor(
                    Math.random() *
                        (chBottom.maxHeight - chBottom.calculatedHeight)
                ),
            leftBase:
                totalWidth -
                chBottom.maxWidth +
                Math.floor(
                    Math.random() *
                        (chBottom.maxWidth - chBottom.calculatedWidth)
                ),
            maxDistance: amplitude,
        });

        texts.wTop = wiggle({
            input: chTop.image,
            topBase:
                0 +
                Math.floor(
                    Math.random() * (chTop.maxHeight - chTop.calculatedHeight)
                ),
            leftBase:
                0.2 * totalWidth +
                Math.floor(
                    Math.random() * (chTop.maxWidth - chTop.calculatedWidth)
                ),
            maxDistance: amplitude,
        });

        texts.wCenter = wiggle({
            input: chCenter.image,
            topBase: Math.floor(
                chTop.maxHeight +
                    Math.random() *
                        (chCenter.maxHeight - chCenter.calculatedHeight)
            ),
            leftBase:
                0.2 * totalWidth +
                Math.floor(
                    Math.random() *
                        (chCenter.maxWidth - chCenter.calculatedWidth)
                ),
            maxDistance: amplitude,
        });

        texts.wLeft = wiggle({
            input: chLeft.image,
            topBase:
                0 +
                Math.floor(
                    Math.random() * (chLeft.maxHeight - chLeft.calculatedHeight)
                ),
            leftBase:
                0 +
                +Math.floor(
                    Math.random() * (chLeft.maxWidth - chLeft.calculatedWidth)
                ),
            maxDistance: amplitude,
        });
    }

    return texts;
};

export const getChineeseText = (
    getterForSvg: any,
    { maxWidth, maxHeight }: { maxWidth?: number; maxHeight?: number }
) => {
    const colors = genColors();
    const { svg, ...rest } = getterForSvg({ ...colors, maxWidth, maxHeight });
    return {
        ...rest,
        image: Buffer.from(svg),
    };
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
    };
};

type CalcViewBoxArgs = {
    width: number;
    height: number;
    dw: number;
    dh: number;
};

export const calcViewBox = ({ width, height, dw, dh }: CalcViewBoxArgs) =>
    `-${dw} -${dh} ${width + 2 * dw} ${height + 2 * dh}`;

type CalculateSvgSizeArgs = {
    width: number;
    height: number;
    maxWidth: number;
    maxHeight: number;
};

export const calculateSvgSize = ({
    width,
    height,
    maxWidth,
    maxHeight,
}: CalculateSvgSizeArgs) => {
    const dw = width * 0.3;
    const dh = height * 0.3;

    const ratio = width / height;

    const inputRatio = maxWidth / maxHeight;

    let multiplier = maxWidth / width;

    if (ratio < inputRatio) {
        multiplier = maxHeight / height;
    }

    multiplier *= Math.random() * 0.1 + 0.9;

    const calculatedWidth = Math.round(width * multiplier),
        calculatedHeight = Math.round(height * multiplier);

    const viewBox = calcViewBox({ width, height, dw, dh });

    return {
        dw,
        dh,
        ratio,
        inputRatio,
        multiplier,
        calculatedWidth,
        calculatedHeight,
        viewBox,
        maxWidth,
        maxHeight,
    };
};
