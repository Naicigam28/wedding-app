import { getDatabase, onValue, ref, set } from "firebase/database";
import { initializeApp, getApps } from "firebase/app";
import firebaseConfig from "../Firebase/keys";
import { getAuth } from "firebase/auth";
import moment from "moment";
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

function writeMessage(msg, title, imgPath) {
  const db = getDatabase(getApps()[0]);
  const userId = getAuth().currentUser.uid;

  let date = moment(Date.now()).format("HH:mm YYYY-MM-DD");
  return set(ref(db, `posts/${userId}/${date}`), {
    title: title,
    message: msg,
    path: imgPath,
    user: getAuth().currentUser.displayName,
  });
}

export { writeMessage };
