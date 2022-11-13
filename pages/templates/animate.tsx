import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import {
    CropControls,
    Variants,
} from "../../src/components/CropControls/CropControls";

import styles from "../../styles/DefaultCrop.module.css";

const Demo = () => {
    const [imgFile, setImgFile] = React.useState(null);
    const [imageSrc, setImageSrc] = React.useState<unknown>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [ratio, setRatio] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [amplitude, setAmplitude] = useState(10);
    const [duration, setDuration] = useState(350);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [variant, setVariant] = useState(Variants.SimplifiedLite);

    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [stepX, setStepX] = useState(0);
    const [stepY, setStepY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setX(50 + 5 * (0.5 + Math.sin(stepX)));
            setY(50 + 3 * (0.5 + Math.cos(stepY)));
            setStepX(stepX + 0.3 * Math.random());
            setStepY(stepY + 0.3 * Math.random());
        }, 10);
    }, [stepX]);

    const onCropComplete = useCallback(
        (_croppedArea: any, croppedAreaPixels: any) => {
            setCroppedAreaPixels(croppedAreaPixels);
        },
        []
    );

    const showCroppedImage = useCallback(async () => {
        try {
            uploadToServer();
            // console.log("donee", { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [
        imageSrc,
        croppedAreaPixels,
        rotation,
        amplitude,
        duration,
        variant,
        ratio,
    ]);

    const onFileChange = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            let imageDataUrl = await readFile(file);

            // apply rotation if needed
            setImgFile(file);
            setImageSrc(imageDataUrl);
        }
    };

    const uploadToServer = async () => {
        if (!imageSrc) {
            return;
        }
        type SearchParamType = {};
        const params: SearchParamType = {
            ...((croppedAreaPixels as unknown) as object),
            rotation: String(0),
            amplitude: String(amplitude),
            duration: String(duration),
            croppedImageSize: "small",
            variant: String(variant),
            ratio: String(ratio),
        };
        const url = new URLSearchParams(params);
        // console.log({amplitude, url});
        const body = new FormData();
        body.append("file", (imgFile as unknown) as string, "fileName");
        const response = await fetch(
            `/api/cropped-adult-ch-animated?${url.toString()}`,
            {
                method: "POST",
                body,
            }
        );

        const imageImage = await response.blob();
        // console.log(imageImage);
        // console.log(URL.createObjectURL(imageImage));
        setCroppedImage(
            (URL.createObjectURL(imageImage) as unknown) as (
                prevState: null
            ) => null
        );
    };
    if (croppedImage) {
        return <img src={croppedImage ?? ""} height={400} width="auto" />;
    }

    return (
        <div>
            {imageSrc ? (
                <React.Fragment>
                    <div className={styles.container}>
                        <div className={styles.cropper}>
                            <Cropper
                                // className={styles.cropper}
                                image={imageSrc as string}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                aspect={ratio}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>

                        <CropControls
                            className={styles.controls}
                            zoom={zoom}
                            setZoom={setZoom}
                            // rotation={rotation}
                            // setRotation={setRotation}
                            duration={duration}
                            setDuration={setDuration}
                            amplitude={amplitude}
                            setAmplitude={setAmplitude}
                            variant={variant}
                            setVariant={setVariant}
                            showCroppedImage={showCroppedImage}
                            ratio={ratio}
                            setRatio={setRatio}
                        />
                    </div>
                </React.Fragment>
            ) : (
                <input type="file" onChange={onFileChange} accept="image/*" />
            )}
            <div style={{ position: "fixed", left: x, top: y }}>
                animate : {variant}
            </div>
        </div>
    );
};

function readFile(file: any) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}
export default Demo;
