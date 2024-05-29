import React from "react";
import HeaderPage from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer";
import GalleryExperience from "./galleryExperience.jsx";
import GalleryExperienceInfo from "../../mocks/imagesGallery.json";
import "./gallery.scss";

import ModalMenuPage from "../../components/modalMenuMobile/modalMenu.jsx";

export default function gallery(props) {
  const { modalState, setModalState } = props;
  return (
    <>
      <HeaderPage modalState={modalState} setModalState={setModalState} />
      <div className="galleryExperience">
        <div className="galleryText">
          <h2 className="galleryTitle">Gallery</h2>
          <p className="text">Exploring the world through images.</p>
        </div>
        <div className="galleryExamples">
          {Object.values(GalleryExperienceInfo.elements_2).map(
            (element, index) => {
              return (
                <GalleryExperience
                  key={element.id}
                  imgUrl={element.img_Url}
                  size={element.imageSize}
                  index={index}
                  place={element.place}
                />
              );
            }
          )}
        </div>
      </div>

      <Footer />
      <ModalMenuPage modalState={modalState} setModalState={setModalState} />
    </>
  );
}
