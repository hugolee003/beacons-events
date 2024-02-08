import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDGtSBbKCSWaF54ak9KvHh8eSqqRYp5_Lg",
	authDomain: "beacons-event.firebaseapp.com",
	projectId: "beacons-event",
	storageBucket: "beacons-event.appspot.com",
	messagingSenderId: "1073538831293",
	appId: "1:1073538831293:web:0a0f1ea3368c3997c138d4",
	measurementId: "G-1EZFYJGL8M"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
