import { NextPage } from "next";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

export enum Variants {
    None = "none",
    TraditionalHot = "traditional-hot",
    TraditionalLite = "traditional-lite",
    SimplifiedHot = "simplified-hot",
    SimplifiedLite = "simplified-lite",
}

export type CropControlsProps = {
    className?: string;
    zoom?: number;
    setZoom?: (zoom: number) => void;
    rotation?: number;
    setRotation?: (rotation: number) => void;
    amplitude?: number;
    setAmplitude?: (amplitude: number) => void;
    duration?: number;
    setDuration?: (duration: number) => void;
    showCroppedImage?: () => void;
    variant?: Variants;
    setVariant?: (variant: Variants) => void;
    ratio?: number;
    setRatio?: (ratio: number) => void;
};

const VariantButton = ({
    type,
    variant,
    setVariant,
}: {
    type?: Variants;
    variant?: Variants;
    setVariant?: (variant: Variants) => void;
}) => {
    return (
        <Button
            onClick={() => setVariant?.(type || Variants.SimplifiedLite)}
            variant="contained"
            color={type === variant ? "secondary" : "default"}
        >
            {type}
        </Button>
    );
};

export const CropControls: NextPage<CropControlsProps> = ({
    className,
    zoom,
    setZoom,
    rotation,
    setRotation,
    amplitude,
    setAmplitude,
    duration,
    setDuration,
    showCroppedImage,
    variant,
    setVariant,
    ratio,
    setRatio,
}) => {
    return (
        <div className={className}>
            {setZoom && (
                <div>
                    <Typography variant="overline">Zoom</Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={4}
                        step={0.05}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => setZoom(zoom as number)}
                    />
                </div>
            )}
            {setRotation && (
                <div>
                    <Typography variant="overline">Rotation</Typography>
                    <Slider
                        value={rotation}
                        min={0}
                        max={360}
                        step={1}
                        aria-labelledby="Rotation"
                        onChange={(e, rotation) =>
                            setRotation(rotation as number)
                        }
                    />
                </div>
            )}
            {setAmplitude && (
                <div>
                    <Typography variant="overline">
                        Amplitude [{amplitude}]
                    </Typography>
                    <Slider
                        value={amplitude}
                        min={0}
                        max={360}
                        step={1}
                        aria-labelledby="Amplitude"
                        onChange={(e, amp) => setAmplitude?.(amp as number)}
                    />
                </div>
            )}
            {setDuration && (
                <div>
                    <Typography variant="overline">
                        Duration Frames [{duration}]
                    </Typography>
                    <Slider
                        value={duration}
                        min={0}
                        max={1360}
                        step={1}
                        aria-labelledby="Duration"
                        onChange={(e, dur) => setDuration(dur as number)}
                    />
                </div>
            )}
            {setVariant && (
                <div style={{ padding: 10 }}>
                    <VariantButton
                        type={Variants.None}
                        variant={variant}
                        setVariant={setVariant}
                    />
                    <VariantButton
                        type={Variants.SimplifiedHot}
                        variant={variant}
                        setVariant={setVariant}
                    />
                    <VariantButton
                        type={Variants.SimplifiedLite}
                        variant={variant}
                        setVariant={setVariant}
                    />
                    <VariantButton
                        type={Variants.TraditionalHot}
                        variant={variant}
                        setVariant={setVariant}
                    />
                    <VariantButton
                        type={Variants.TraditionalLite}
                        variant={variant}
                        setVariant={setVariant}
                    />
                </div>
            )}
            {setRatio && (
                <div style={{ padding: 10 }}>
                    <Button
                        color={ratio === 1 ? "secondary" : "default"}
                        variant="contained"
                        onClick={() => setRatio(1)}
                    >
                        Square
                    </Button>
                    <Button
                        color={ratio === 16 / 9 ? "secondary" : "default"}
                        variant="contained"
                        onClick={() => setRatio(16 / 9)}
                    >
                        Horizontal
                    </Button>
                    <Button
                        color={ratio === 9 / 16 ? "secondary" : "default"}
                        variant="contained"
                        onClick={() => setRatio(9 / 16)}
                    >
                        Vertical
                    </Button>
                </div>
            )}
            {showCroppedImage && (
                <Button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                >
                    Show Result
                </Button>
            )}
        </div>
    );
};
