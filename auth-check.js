// auth-check.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBx1k6F_ERnx4vYrr5IgmpCLpuSDILvOJU",
  authDomain: "motomatrix16.firebaseapp.com",
  projectId: "motomatrix16",
  storageBucket: "motomatrix16.firebasestorage.app",
  messagingSenderId: "342300897944",
  appId: "1:342300897944:web:0f9b5ea041dc63474cd6ed",
  measurementId: "G-5P721R5RFW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.body.style.display = "none";

onAuthStateChanged(auth, (user) => {
  const isAuthPage = location.pathname.includes("login.html") || location.pathname.includes("signup.html");

  if (!user && !isAuthPage) {
    location.href = "login.html";
  } else if (user && isAuthPage) {
    location.href = "index.html";
  } else {
    document.body.style.display = "block";
  }
});
