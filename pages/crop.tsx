import React, { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import styles from "../styles/Crops.module.css";

type CroppedImageSize = "small" | "medium" | "large";

type State = {
    image: Blob | null;
    imageSrc: string;
    croppedImage: string;
    driverLisence: string;
    expired: string;
    lastName: string;
    firstName: string;
    // dlPos: string;
    // crop: Point;
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

function Crop() {
    const [image, setImage] = useState<Blob | null>(null);
    const [imageSrc, setImageSrc] = useState('');
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [croppedArea, setCroppedArea] = useState<Area | null>(null);
    const [zoom, setZoom] = useState<number>(1);

    async function load() {
        const resp = await fetch('https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg');
        const img = await resp.blob();
        setImage(img);
        setImageSrc(URL.createObjectURL(img));
    }

    useEffect(() => {
        
        load();

    }, []);

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

    const config = {
        image: null,
        rotation: 0,
        flip: { horizontal: false, vertical: false },
        zoom: 1,
        aspect: 21.25 / 28.02,
        cropShape: "rect",
        showGrid: true,
        zoomSpeed: 1,
        restrictPosition: true,
        croppedArea: null,
    }

    console.log(imageSrc);
    console.log(croppedArea);

    return <div className={styles['crop-layout']}>
        
        <div className={styles.controls}>
            <div>
                reload image
            </div>
            <div>
                crop
            </div>
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

// class Crop extends React.Component<{}, State> {
//     state: State = {
//         image: null,
//         imageSrc: '',
//         croppedImage: '',
//         driverLisence: 'X3377976',
//         expired: '04/05/2025',
//         lastName: 'KREIGER',
//         firstName: 'YASMIN',
//         // dlPos: '{"dlPosTop":96,"dlPosLeft":269,"dlSize":"32px","exPosTop":132,"exPosLeft":283,"exSize":"26px","lnPosTop":160,"lnPosLeft":275,"lnSize":"16px","fnPosTop":185,"fnPosLeft":275,"fnSize":"16px"}',
//         crop: { x: 0, y: 0 },
//         rotation: 0,
//         flip: { horizontal: false, vertical: false },
//         zoom: 1,
//         aspect: 21.25 / 28.02,
//         cropShape: "rect",
//         showGrid: true,
//         zoomSpeed: 1,
//         restrictPosition: true,
//         croppedArea: null,
//         croppedImageSize: "small"
//     };

//     componentDidMount() {

//         async function load() {
//             const blob = fetch('https://i.ibb.co/RSGNBkX/baab90fc77ad.png')
//                 .then(r => r.blob())
//                 .then(blob => this.setState({image: blob}));
           
//         }
//         load();
//     }
//     onCropChange = (crop: Point) => {
//         this.setState({ crop });
//     };

//     onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
//         console.log(croppedArea, croppedAreaPixels);
//         this.setState({ croppedArea });
//     };

//     onZoomChange = (zoom: number) => {
//         this.setState({ zoom });
//     };

//     onRotationChange = (rotation: number) => {
//         this.setState({ rotation });
//     };

//     onCroppedImageSizeChange = (event: any) => {
//         this.setState({ croppedImageSize: event.target.value });
//     };

//     onInteractionStart = () => {
//         console.log("user interaction started");
//     };

//     onInteractionEnd = () => {
//         console.log("user interaction ended");
//     };

//     handleFileChange = (e: any) => {
//         const img = e.target.files[0];
//         this.setState({
//             image: img,
//             imageSrc: URL.createObjectURL(e.target.files[0]),
//         });
//     }


//     uploadToServer = async (event: any) => {
//         if (!config.image) {
//             return;
//         }
//         type SearchParamType = {
//         }
//         const params: SearchParamType = {
//             ...config.croppedArea,
//             rotation: String(this.state.rotation),
//             croppedImageSize: this.state.croppedImageSize,
//             dl: this.state.driverLisence,
//             exp: this.state.expired,
//             ln: this.state.lastName,
//             fn: this.state.firstName,
//             // options: this.state.dlPos,
//         }
//         const url = new URLSearchParams(params);
//         const body = new FormData();
//         body.append("file", this.state.image, 'fileName');
//         const response = await fetch(`/api/cropped-docs2?${url.toString()}`, {
//             method: "POST",
//             body
//         });
//         // const response = await fetch(`/api/test?${url.toString()}`, {
//         //     method: "POST",
//         //     body
//         // });
//         const imageImage = await response.blob()
//         console.log(imageImage);
//         console.log(URL.createObjectURL(imageImage));
//         this.setState({croppedImage: URL.createObjectURL(imageImage)});
//     };

//     handleTextChangeDl = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({driverLisence: event.target.value});
//     }
//     handleTextChangeExp = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({expired: event.target.value});
//     }
//     handleTextChangeLn = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({lastName: event.target.value});
//     }
//     handleTextChangeFn = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({firstName: event.target.value});
//     }
//     // handleTextChangeDlPos = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //     this.setState({dlPos: event.target.value});
//     // }
    
//     render() {

//         if (this.state.croppedImage) {
//             return <div>
//                 <div className={styles.myriad}>
//                     1 2 3 4 5 6 7 8 9
//                 </div>
//                 <div className={styles.readyToUse}>
//                     <img src={this.state.croppedImage} alt="" />;
//                 </div>
//             </div>
//         }
//         return (
//             <div className={styles.App}>
//                 <div className={styles.myriad}>
//                     1 2 3 4 5 6 7 8 9
//                 </div>
//                 <div className={styles.controls}>
//                 <div>
//                     <div>.</div>
//                     <div>.</div>
//                     <div>.</div>
//                     <div>.</div>
//                     <div>.</div>
//                     <div>.</div>
//                     <div>
//                         <input type="file" accept="image/*" onChange={this.handleFileChange} />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name='driverLisence'
//                             value={this.state.driverLisence}
//                             onChange={this.handleTextChangeDl}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name='expired'
//                             value={this.state.expired}
//                             onChange={this.handleTextChangeExp}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name='lastName'
//                             value={this.state.lastName}
//                             onChange={this.handleTextChangeLn}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name='firstName'
//                             value={this.state.firstName}
//                             onChange={this.handleTextChangeFn}
//                         />
//                     </div>
//                     {/* <div>
//                         <input
//                             type="text"
//                             name='dlPos'
//                             value={this.state.dlPos}
//                             onChange={this.handleTextChangeDlPos}
//                         />
//                     </div> */}
//                 </div>
//                     <div>
//                         <button
//                             onClick={this.uploadToServer}
//                         >Made Doc</button>
//                     </div>
                   
//                 </div>
                
//                 <div className={styles["crop-container"]}>
//                     <Cropper
//                         image={this.state.imageSrc}
//                         crop={this.state.crop}
//                         rotation={this.state.rotation}
//                         zoom={this.state.zoom}
//                         aspect={this.state.aspect}
//                         cropShape={this.state.cropShape}
//                         showGrid={this.state.showGrid}
//                         zoomSpeed={this.state.zoomSpeed}
//                         restrictPosition={this.state.restrictPosition}
//                         onCropChange={this.onCropChange}
//                         onRotationChange={this.onRotationChange}
//                         onCropComplete={this.onCropComplete}
//                         onCropAreaChange={this.onCropComplete}
//                         onZoomChange={this.onZoomChange}
//                         onInteractionStart={this.onInteractionStart}
//                         onInteractionEnd={this.onInteractionEnd}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default Crop;
