import { initializeApp,getApps } from "firebase/app";
import { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/Navbar";
import Register from "./components/Register/Register";
import Youtube from "./components/Youtube/Youtube";
import firebaseConfig from "./Firebase/keys";

function App() {
  useEffect(() => {
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
  }
    
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Register/>
      <Gallery/>
      <Youtube/>
    </div>
  );
}

export default App;
