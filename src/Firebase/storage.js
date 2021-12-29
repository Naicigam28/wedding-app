import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp,getApps } from "firebase/app";
import firebaseConfig from "../Firebase/keys";
import { getAuth } from "firebase/auth";
if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}
function uploadFile(file){
    const storage = getStorage(getApps()[0]);
    const userId= getAuth().currentUser.uid
    const ImagesRef = ref(storage, `images/${userId}/${file.name}`);
    return uploadBytes(ImagesRef, file)
}

export {uploadFile}