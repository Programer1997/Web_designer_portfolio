import React from "react";
import FooterPage from "../../components/Footer/footer.jsx";
import HeaderPage from "../../components/navHeader/navHeader.jsx";
import HomePage from "./home.jsx";
import ModalMenuPage from "../../components/modalMenuMobile/modalMenu.jsx";

export default function HomePageReal(props) {
  const { modalState, setModalState, setSelectedElement, selectedElement } =
    props;
  return (
    <>
      <HeaderPage modalState={modalState} setModalState={setModalState} />
      <HomePage
        color="false"
        setSelectedElement={setSelectedElement}
        selectedElement={selectedElement}
      />
      {
        //<img src="../images/world.ico" className="App-logo" alt="new image" />
        /* note  : the src should be "../public/images/world.ico" thats should be work however we have to remove 
         the "public word leaving us like that "../images/world.png" and this gonna work this happen because react already knows
         your image is in the public file*/
      }
      <FooterPage />
      <ModalMenuPage modalState={modalState} setModalState={setModalState} />
    </>
  );
}
