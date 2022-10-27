import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';

import styles from "../../styles/DefaultCrop.module.css";

function randomDriverLicense() {
    return `X${1000000 + Math.round(Math.random()*8999999)}`;
}

function randomExpired() {
    return moment().add(Math.round(Math.random() * 1100) + 500, 'days').format('MM/DD/YYYY');
}

const Demo = () => {
    const [imgFileWhite, setImgFileWhite] = React.useState(null);
    const [imgFileBlack, setImgFileBlack] = React.useState(null);
    const [imageSrcWhite, setImageSrcWhite] = React.useState<unknown>(null);
    const [imageSrcBlack, setImageSrcBlack] = React.useState<unknown>(null);
    const [cropWhite, setCropWhite] = useState({ x: 0, y: 0 });
    const [cropBlack, setCropBlack] = useState({ x: 0, y: 0 });
    const [zoomWhite, setZoomWhite] = useState(1);
    const [zoomBlack, setZoomBlack] = useState(1);
    const [ration, setRatio] = useState(994/994);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedAreaPixelsBlack, setCroppedAreaPixelsBlack] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    // const [driverLicense, setDriverLicense] = useState(randomDriverLicense());
    // const [expired, setExpired] = useState(randomExpired());
    // const [lastName, setLastName] = useState('');
    // const [firstName, setFirstName] = useState('');

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
            // console.log({driverLicense, expired, firstName, lastName});
            console.log("done", { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [imageSrcWhite, croppedAreaPixels, rotation]);

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

                        <div className={styles.controls}>
                            <div>
                                <Typography variant="overline">Zoom</Typography>
                                <Slider
                                    value={zoomWhite}
                                    min={1}
                                    max={3}
                                    step={0.05}
                                    aria-labelledby="Zoom"
                                    onChange={(e, zoom) => setZoomWhite(zoom as number)}
                                />
                            </div>
                            <div>
                                <Typography variant="overline">
                                    Rotation
                                </Typography>
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
                            <Button
                                onClick={() => showCroppedImage()}
                                variant="contained"
                                color="primary"
                            >
                                Show Result
                            </Button>
                        </div>
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

                        <div className={styles.controls}>
                            <div>
                                <Typography variant="overline">Zoom</Typography>
                                <Slider
                                    value={zoomBlack}
                                    min={1}
                                    max={3}
                                    step={0.05}
                                    aria-labelledby="Zoom"
                                    onChange={(e, zoom) => setZoomBlack(zoom as number)}
                                />
                            </div>
                            <div>
                                <Typography variant="overline">
                                    Rotation
                                </Typography>
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
                        </div>
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
