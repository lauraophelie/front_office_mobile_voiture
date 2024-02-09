import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { useState } from 'react';

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<string[]>([]);

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 300,
        });
        setPhotos(prevPhotos => [...prevPhotos, photo.webPath]);
    };
    
    return {
        takePhoto, photos
    };
}