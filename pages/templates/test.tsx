import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Demo = () => {
  const [imgFile, setImgFile] = React.useState(null)
  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
        uploadToServer()
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      // apply rotation if needed
      setImgFile(file);
      setImageSrc(imageDataUrl);
    }
  }

  const uploadToServer = async () => {
    if (!imageSrc) {
        return;
    }
    type SearchParamType = {
    }
    const params: SearchParamType = {
        ...croppedAreaPixels,
        rotation: String(0),
        croppedImageSize: "small",
    }
    const url = new URLSearchParams(params);
    const body = new FormData();
    body.append("file", imgFile, 'fileName');
    const response = await fetch(`/api/cropped-adult-ch?${url.toString()}`, {
        method: "POST",
        body
    });
    
    const imageImage = await response.blob()
    console.log(imageImage);
    console.log(URL.createObjectURL(imageImage));
    setCroppedImage(URL.createObjectURL(imageImage));
};
    if (croppedImage) {
        return <img src={croppedImage} height={400} widht={400} />
    }

  return (
    <div>
      {imageSrc ? (
        <React.Fragment>
          <div>
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div>
            <div>
              <Typography
                variant="overline"
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <div>
              <Typography
                variant="overline"
              >
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div>
            <Button
              onClick={showCroppedImage}
              variant="contained"
              color="primary"
            >
              Show Result
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </div>
  )
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}
export default Demo;
