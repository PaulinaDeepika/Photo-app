import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import "./components/NavbarStyles.css";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Share from "./components/Share.js";
import About from "./components/About.js";
import Images from './components/Images.js';
import Downloads from './components/Downloads.js';
import Videos from './components/Videos.js';
import Snapchat from './components/Snapchat.js';
import Signin from './components/Signin.js';
import SignUp from './components/SignUp.js';
import Imageselecter from './components/Imageselecter.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Snapchat" element={<Snapchat/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="Imageselecter" element={<Imageselecter/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
