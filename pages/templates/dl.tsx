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
    const [imgFile, setImgFile] = React.useState(null);
    const [imageSrc, setImageSrc] = React.useState<unknown>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [ration, setRatio] = useState(428/564);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [driverLicense, setDriverLicense] = useState(randomDriverLicense());
    const [expired, setExpired] = useState(randomExpired());
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

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

    const onCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async (data: any) => {
        try {
            uploadToServer({driverLicense: data.driverLicense, expired:data.expired, firstName: data.firstName, lastName: data.lastName});
            console.log({driverLicense, expired, firstName, lastName});
            console.log("done", { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [imageSrc, croppedAreaPixels, rotation]);

    const onClose = useCallback(() => {
        setCroppedImage(null);
    }, []);

    const onFileChange = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            let imageDataUrl = await readFile(file);

            // apply rotation if needed
            setImgFile(file);
            setImageSrc(imageDataUrl);
        }
    };

    const uploadToServer = async (data: any) => {
        if (!imageSrc) {
            return;
        }
        type SearchParamType = {};
        const params: SearchParamType = {
            ...(croppedAreaPixels as unknown as object),
            rotation: String(0),
            croppedImageSize: "small",
            dl: (data.driverLicense ?? '').toUpperCase(),
            exp: (data.expired ?? '').toUpperCase(),
            ln: (data.lastName ?? '').toUpperCase(),
            fn: (data.firstName ?? '').toUpperCase(),
        };

        console.log({params, lastName, firstName});
        const url = new URLSearchParams(params);
        const body = new FormData();
        body.append("file", imgFile as unknown as string, "fileName");
        const response = await fetch(
            `/api/cropped-docs2?${url.toString()}`,
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
                                aspect={ration}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>

                        <div className={styles.controls}>
                            <div>
                                <Typography variant="overline">Zoom</Typography>
                                <Slider
                                    value={zoom}
                                    min={1}
                                    max={3}
                                    step={0.05}
                                    aria-labelledby="Zoom"
                                    onChange={(e, zoom) => setZoom(zoom as number)}
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
                            <div style={{margin: 10}}>
                                <input value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)}/>
                                <button onClick={() => setDriverLicense(randomDriverLicense())} >generate</button>
                            </div>
                            <div style={{margin: 10}}>
                                <input value={expired} onChange={(e) => setExpired(e.target.value)}/>
                                <button onClick={() => setExpired(randomExpired())} >generate</button>
                            </div>
                            <div style={{margin: 10}}>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div style={{margin: 10}}>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <Button
                                onClick={() => showCroppedImage({driverLicense, expired, firstName, lastName})}
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
