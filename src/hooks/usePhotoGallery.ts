
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useState } from 'react';

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<any[]>([]);

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 300,
        });
        setPhotos((prevPhotos) => [...prevPhotos, photo.webPath]);
    };
    
    return {
        takePhoto, photos
    };
}