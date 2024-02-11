import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmfDFnKPT4vuubX5Gc5aETvMFNHlLE7Ds",
    authDomain: "voiture-cloud.firebaseapp.com",
    projectId: "voiture-cloud",
    appId: "1:834782520545:android:5f344cee60c7350286c3a0",
    storageBucket: "gs://voiture-cloud.appspot.com"
};

const fireBaseApp = initializeApp(firebaseConfig);
const storage = getStorage(fireBaseApp);

export default storage;