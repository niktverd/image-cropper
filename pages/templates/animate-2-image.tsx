import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import { CropControls } from "../../src/components/CropControls/CropControls";

import styles from "../../styles/DefaultCrop.module.css";

const Demo = () => {
    const [imgFileWhite, setImgFileWhite] = React.useState(null);
    const [imgFileBlack, setImgFileBlack] = React.useState(null);
    const [imageSrcWhite, setImageSrcWhite] = React.useState<unknown>(null);
    const [imageSrcBlack, setImageSrcBlack] = React.useState<unknown>(null);
    const [cropWhite, setCropWhite] = useState({ x: 0, y: 0 });
    const [cropBlack, setCropBlack] = useState({ x: 0, y: 0 });
    const [zoomWhite, setZoomWhite] = useState(1);
    const [zoomBlack, setZoomBlack] = useState(1);
    const [amplitude, setAmplitude] = useState(10);
    const [duration, setDuration] = useState(350);
    const [ration, setRatio] = useState(994/994);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedAreaPixelsBlack, setCroppedAreaPixelsBlack] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

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
    }, [stepX])

    const onCropCompleteWhite = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onCropCompleteBlack = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixelsBlack(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            await uploadToServer();
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [imageSrcWhite, croppedAreaPixels, rotation, amplitude, duration]);

    const onClose = useCallback(() => {
        setCroppedImage(null);
    }, []);

    const onFileChange = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            let imageDataUrl = await readFile(file);

            // apply rotation if needed
            setImgFileWhite(file);
            setImageSrcWhite(imageDataUrl);
        }
    };


    const onFileChangeBlack = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            let imageDataUrl = await readFile(file);

            // apply rotation if needed
            setImgFileBlack(file);
            setImageSrcBlack(imageDataUrl);
        }
    };

    const uploadToServer = async () => {
        // console.log(imageSrcWhite, imageSrcBlack);
        if (!imageSrcWhite || !imageSrcBlack) {
            return;
        }
        type SearchParamType = {};
        const black = croppedAreaPixelsBlack as unknown as {
            x: number,
            y: number,
            width: number,
            height: number,
        };
        const params: SearchParamType = {
            ...(croppedAreaPixels as unknown as object),
            xBlack: black.x,
            yBlack: black.y,
            widthBlack: black.width,
            heightBlack: black.height,
            rotation: String(0),
            croppedImageSize: "small",
            amplitude: String(amplitude), 
            duration: String(duration),
        };

        const url = new URLSearchParams(params);
        const body = new FormData();
        body.append("file", imgFileWhite as unknown as string, "fileName");
        body.append("fileBlack", imgFileBlack as unknown as string, "fileNameBlack");
        const response = await fetch(
            `/api/cropped-animate-2-image?${url.toString()}`,
            {
                method: "POST",
                body,
            }
        );

        const imageImage = await response.blob();
        console.log(imageImage);
        console.log(URL.createObjectURL(imageImage));
        setCroppedImage(URL.createObjectURL(imageImage) as unknown as null);
    };
    if (croppedImage) {
        return <img src={croppedImage ?? ''} height={400} width="auto" />;
    }

    return (
        <div>
            {imageSrcWhite ? (
                <React.Fragment>
                    <div className={styles.container}>
                        <h2>White</h2>
                        <div className={styles.cropper}>
                            <Cropper
                                // className={styles.cropper}
                                image={imageSrcWhite as string}
                                crop={cropWhite}
                                rotation={rotation}
                                zoom={zoomWhite}
                                aspect={ration}
                                onCropChange={setCropWhite}
                                onRotationChange={setRotation}
                                onCropComplete={onCropCompleteWhite}
                                onZoomChange={setZoomWhite}
                            />
                        </div>
                        <CropControls
                            className={styles.controls}
                            zoom={zoomWhite}
                            setZoom={setZoomWhite}
                            // rotation={rotation}
                            // setRotation={setRotation}
                            duration={duration}
                            setDuration={setDuration}
                            amplitude={amplitude}
                            setAmplitude={setAmplitude}
                            showCroppedImage={showCroppedImage}
                        />
                    </div>
                </React.Fragment>
            ) : (
                <input type="file" onChange={onFileChange} accept="image/*" />
            )}
            {imageSrcBlack ? (
                <React.Fragment>
                    <div className={styles.container}>
                        <h2>Black</h2>
                        <div className={styles.cropper}>
                            <Cropper
                                // className={styles.cropper}
                                image={imageSrcBlack as string}
                                crop={cropBlack}
                                rotation={rotation}
                                zoom={zoomBlack}
                                aspect={ration}
                                onCropChange={setCropBlack}
                                onRotationChange={setRotation}
                                onCropComplete={onCropCompleteBlack}
                                onZoomChange={setZoomBlack}
                            />
                        </div>

                        <CropControls
                            className={styles.controls}
                            zoom={zoomBlack}
                            setZoom={setZoomBlack}
                            // rotation={rotation}
                            // setRotation={setRotation}
                            // duration={duration}
                            // setDuration={setDuration}
                            // amplitude={amplitude}
                            // setAmplitude={setAmplitude}
                            // showCroppedImage={showCroppedImage}
                        />
                    </div>
                </React.Fragment>
            ) : (
                <input type="file" onChange={onFileChangeBlack} accept="image/*" />
            )}
            <div style={{position: 'fixed', left: x, top: y}}>
                dl
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
