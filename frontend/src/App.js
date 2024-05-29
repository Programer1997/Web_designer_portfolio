//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
///////////////////////////
import HomePageReal from './pages/home/HomePage.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import About from "./pages/about/about.jsx";
import Resume from './pages/resume/resume.jsx';
import Work from './pages/work/work.jsx';
//import ModalMenu from './components/modalMenuMobile/modalMenu.jsx';


function App() {
  const [modalMenu,setModalMenu] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageReal 
          setSelectedElement = {setSelectedElement} 
          selectedElement={selectedElement}
          modalState = {modalMenu}
          setModalState = {setModalMenu}
        />} />
        <Route path='/gallery' element={<Gallery  
          modalState = {modalMenu}
          setModalState = {setModalMenu}
          />} />
        <Route path='/About' element={<About 
          modalState = {modalMenu}
          setModalState = {setModalMenu}
        />} />
        {/*<Route path='/work/:id' element={<Work />} />*/}
        {<Route path='/work' element={<Work 
          setSelectedElement = {setSelectedElement} 
          selectedElement={selectedElement} 
          modalState = {modalMenu}
          setModalState = {setModalMenu} 
          />} />}
        <Route exact path='/resume' element={<Resume 
          modalState = {modalMenu}
          setModalState = {setModalMenu}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
