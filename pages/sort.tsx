import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import styles from "../styles/Crops.module.css";

function Crop() {
    const [showDeleteConfirm, setshowDeleteConfirm] = useState<Boolean>(false);
    const [imageSrc, setImageSrc] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [croppedArea, setCroppedArea] = useState<Area | null>(null);
    const [zoom, setZoom] = useState<number>(1);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            const resp = await fetch('https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg');
            const img = await resp.blob();
            // setImage(img);
            setImageSrc(URL.createObjectURL(img));
        }
        load();

    }, []);

    useEffect(() => {
        async function load() {
            const resp = await fetch('/api/images/load?imagePath=' + imagePath);
            const img = await resp.blob();
            // setImage(img);
            setImageSrc(URL.createObjectURL(img));
        }
        load();

    }, [imagePath]);

    const onCropChange = (crop: Point) => {
        setCrop(crop);
    };

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        console.log(croppedArea, croppedAreaPixels);
        setCroppedArea(croppedArea);
    };

    const onZoomChange = (zoom: number) => {
        setZoom(zoom);
    };

    const handleLoadNew= async () => {
        setshowDeleteConfirm(false);

        const imgresp = await fetch('/api/images/work');
        const imgjosn = await imgresp.json();
        setImagePath(imgjosn.fullPath);
    };

    const handleDelete = async () => {
        setshowDeleteConfirm(false);
        const delresp = await fetch('/api/images/work', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imagePath}),
        });
        if (delresp.status !== 200) {
            setNotification(await delresp.text());
        } else {
            handleLoadNew();
        }
        // const imgjosn = await imgresp.json();
        // setImagePath(imgjosn.fullPath);
    };

    const handleCrop = async () => {
        setshowDeleteConfirm(false);

        const cropresp = await fetch('/api/images/work', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...croppedArea,
                imagePath, 
            }),
        });
        if (cropresp.status !== 200) {
            setNotification(await cropresp.text());
        } else {
            handleLoadNew();
        }

        // const imgjosn = await imgresp.json();
        // setImagePath(imgjosn.fullPath);
    };

    const config = {
        image: null,
        rotation: 0,
        flip: { horizontal: false, vertical: false },
        zoom: 1,
        aspect: 21.25 / 28.02,
        cropShape: "rect",
        showGrid: true,
        zoomSpeed: 0.3,
        restrictPosition: true,
        croppedArea: null,
    }

    console.log(imageSrc);
    console.log(croppedArea);

    return <div className={styles['crop-layout']}>
        
        <div className={styles.controls}>
            <div>
                <Button
                    onClick={handleLoadNew}
                >
                    Load New
                </Button>
            </div>
            <div style={{marginBottom: 100}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCrop}

                >
                    Crop
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setshowDeleteConfirm(!showDeleteConfirm)}
                >
                    Delete
                </Button>
                {showDeleteConfirm && <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleDelete}
                >
                    Confirm
                </Button>

                }
            </div>
            {notification && <div>
                <div>
                    {notification}
                </div>
                <div>
                    <Button
                        onClick={() => {
                            console.log('notification click');
                            setNotification(null);
                        }}
                    >
                        Close
                    </Button>
                </div>
            </div>}
        </div>
        <div className={styles["crop-container2"]}>
            <Cropper
                image={imageSrc}
                crop={crop}
                rotation={config.rotation}
                zoom={zoom}
                aspect={config.aspect}
                cropShape={"rect"}
                showGrid={config.showGrid}
                zoomSpeed={config.zoomSpeed}
                restrictPosition={config.restrictPosition}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                onCropAreaChange={onCropComplete}
                onZoomChange={onZoomChange}
            />
        </div>
    </div>
}

export default Crop;
