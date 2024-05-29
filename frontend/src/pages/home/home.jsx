//import { useState } from "react";
import HomeTable from "../../components/HomeTable/HomeTable.jsx";
import CompaniesImg from "./homeCompaniesExperiencies.jsx";
import CompaniesInfo from "../../mocks/imagesCompanies.json";
import WorkExperienceInfo from "../../mocks/workExperienceImages.json";
import WorkExperience from "./homeWorkExperience";

import "./home.scss";

const HomePage = (props) => {
  //console.log(Object.values(CompaniesInfo.elementos_1));
  //console.log(CompaniesInfo.elementos_1);
  //console.log(CompaniesInfo.elementos_2);
  //console.log(WorkExperienceInfo);
  const { setSelectedElement } = props;

  return (
    <>
      <div className="homePage">
        <div className="animations">
          <HomeTable />
          <div className="animation">
            <img
              src="./images/world.png"
              className="App-logo mineLogo"
              alt="NothingWorld"
            />
          </div>
          <div className="animationTwo">
            <img
              src="./logo512.png"
              className="App-logo mineLogo"
              alt="NothingWorld"
            />
          </div>
        </div>
        <h1 className="briefDescription">
          Abraham, a mechatronics engineer and web designer with Canadian
          experience. Passionate about merging technology and design to create
          innovative solutions.
        </h1>
        <div className="companiesExperiencie">
          {Object.values(CompaniesInfo.elementos_2).map((element) => {
            return <CompaniesImg key={element.id} imgUrl={element.img_Url} />;
          })}
        </div>
        <div className="companiesExperiencie-mobile">
          {Object.values(CompaniesInfo.elementos_3).map((element) => {
            return <CompaniesImg key={element.id} imgUrl={element.img_Url} />;
          })}
        </div>
        <div className="workExperience" id="workSection">
          <div className="workText">
            <h2 className="workTitle">Work</h2>
            <p className="text">
              Giving back to the world, one solution at the time.
            </p>
          </div>
          <div className="workExamples">
            {Object.values(WorkExperienceInfo.elements_2).map((element) => {
              return (
                <WorkExperience
                  key={element.id}
                  title={element.title}
                  description={element.description}
                  imgUrl={element.img_Url}
                  //elementoSeleccionado={selectedElement}
                  workExperienceSelected={() => {
                    setSelectedElement(element.leyend);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
