
const firebaseConfig = {
apiKey: "AIzaSyDVUGLPKoEQ-cGgwEoC4wrj2w_k65NrXz8",
authDomain: "classrpg-b7837.firebaseapp.com",
databaseURL: "https://classrpg-b7837.firebaseio.com",
projectId: "classrpg-b7837",
storageBucket: "",
messagingSenderId: "366077905275",
appId: "1:366077905275:web:ebc3737c4f73af408015de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.database();
let quiz_ref = db.ref("Quizzes");
let guild_ref = db.ref("Guilds");