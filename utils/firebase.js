import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAgECfzfNGJ8rPPj4RuNVwzS4BE13-Di8Y",
	authDomain: "beacons-events-1.firebaseapp.com",
	projectId: "beacons-events-1",
	storageBucket: "beacons-events-1.appspot.com",
	messagingSenderId: "1008448005628",
	appId: "1:1008448005628:web:9944055142553bdaba7e79",
	measurementId: "G-MSWBNZ35BT"
  };

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
