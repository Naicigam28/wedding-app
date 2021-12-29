import { getDatabase, ref, set } from "firebase/database";
import { initializeApp,getApps } from "firebase/app";
import firebaseConfig from "../Firebase/keys";
import { getAuth } from "firebase/auth";
if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

function writeMessage (msg,imgPath) {
  const db = getDatabase(getApps()[0]);
  const userId= getAuth().currentUser.uid
  return set(ref(db, `posts/${userId}/${Date.now()}`), {
    message: msg,
    path:imgPath
  });
}

export { writeMessage };
