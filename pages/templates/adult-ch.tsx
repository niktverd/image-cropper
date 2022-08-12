import React from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import styles from "../../styles/Crops.module.css";

function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

type CroppedImageSize = "small" | "medium" | "large";

type State = {
    image: Blob | null;
    imageSrc: string;
    croppedImage: string;
    // dlPos: string;
    crop: Point;
    rotation: number;
    flip: { horizontal: boolean; vertical: boolean };
    zoom: number;
    aspect: number;
    cropShape: "rect" | "round";
    showGrid: boolean;
    zoomSpeed: number;
    restrictPosition: boolean;
    croppedArea: Area | null;
    croppedImageSize: CroppedImageSize;
};

class Crop extends React.Component<{}, State> {
    state: State = {
        image: null,
        imageSrc: '',
        croppedImage: '',
        crop: { x: 0, y: 0 },
        rotation: 0,
        flip: { horizontal: false, vertical: false },
        zoom: 1,
        aspect: 1,
        cropShape: "rect",
        showGrid: true,
        zoomSpeed: 1,
        restrictPosition: true,
        croppedArea: null,
        croppedImageSize: "small"
    };

    onCropChange = (crop: Point) => {
        this.setState({ crop });
    };

    onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        console.log(croppedArea, croppedAreaPixels);
        this.setState({ croppedArea });
    };

    onZoomChange = (zoom: number) => {
        this.setState({ zoom });
    };

    onRotationChange = (rotation: number) => {
        this.setState({ rotation });
    };

    onCroppedImageSizeChange = (event: any) => {
        this.setState({ croppedImageSize: event.target.value });
    };

    onInteractionStart = () => {
        console.log("user interaction started");
    };

    onInteractionEnd = () => {
        console.log("user interaction ended");
    };


    
    handleFileChange = (e: any) => {
        console.log('handleFileChange', e.target.files);
        const img = e.target.files[0];
        this.setState({
            image: img,
            imageSrc: URL.createObjectURL(e.target.files[0]),
        });
    }

    onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0]
          let imageDataUrl = await readFile(file)
    
          // apply rotation if needed
        //   const orientation = await getOrientation(file)
        //   const rotation = ORIENTATION_TO_ANGLE[orientation]
        //   if (rotation) {
        //     imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        //   }
        this.setState({
            image: file,
            imageSrc: imageDataUrl,
        });
      }
    }

    


    uploadToServer = async (event: any) => {
        if (!this.state.image) {
            return;
        }
        type SearchParamType = {
        }
        const params: SearchParamType = {
            ...this.state.croppedArea,
            rotation: String(this.state.rotation),
            croppedImageSize: this.state.croppedImageSize,
            // options: this.state.dlPos,
        }
        const url = new URLSearchParams(params);
        const body = new FormData();
        body.append("file", this.state.image, 'fileName');
        const response = await fetch(`/api/cropped-docs2?${url.toString()}`, {
            method: "POST",
            body
        });
        
        const imageImage = await response.blob()
        console.log(imageImage);
        console.log(URL.createObjectURL(imageImage));
        this.setState({croppedImage: URL.createObjectURL(imageImage)});
    };
    
    render() {
        console.log('imageSrc', this.state);

        if (this.state.croppedImage) {
            return <div>
                <div className={styles.myriad}>
                    1 2 3 4 5 6 7 8 9
                </div>
                <div className={styles.readyToUse}>
                    <img src={this.state.croppedImage} alt="" />;
                </div>
            </div>
        }
        return (
            <div className={styles.App}>
                <div className={styles.myriad}>
                    1 2 3 4 5 6 7 8 9
                </div>
                <div className={styles.controls}>
                <div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>
                        <input type="file" accept="image/*" onChange={this.onFileChange} />
                    </div>
                </div>
                    <div>
                        <button
                            onClick={this.uploadToServer}
                        >Made Doc</button>
                    </div>
                   
                </div>
                
                <div className={styles["crop-container"]}>
                    <Cropper
                        image={this.state.imageSrc}
                        crop={this.state.crop}
                        rotation={this.state.rotation}
                        zoom={this.state.zoom}
                        aspect={this.state.aspect}
                        cropShape={this.state.cropShape}
                        showGrid={this.state.showGrid}
                        zoomSpeed={this.state.zoomSpeed}
                        restrictPosition={this.state.restrictPosition}
                        onCropChange={this.onCropChange}
                        onRotationChange={this.onRotationChange}
                        onCropComplete={this.onCropComplete}
                        onCropAreaChange={this.onCropComplete}
                        onZoomChange={this.onZoomChange}
                        onInteractionStart={this.onInteractionStart}
                        onInteractionEnd={this.onInteractionEnd}
                    />
                </div>
            </div>
        );
    }
}

export default Crop;
