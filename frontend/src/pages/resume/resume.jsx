import React from "react";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer";
import ResumeData from "../../mocks/resumeData.json";
import Component from "./experience.jsx";
import SkillsComponent from "./skills";
///////
import "./resume.scss";

import ModalMenuPage from "../../components/modalMenuMobile/modalMenu.jsx";

export default function resume(props) {
  //const pdfUrl = "/pdfs/CV_Abraham_Velazquez _(IME).pdf";
  //console.log(Object.values(ResumeData.elements.experience));
  //console.log(Object.values(ResumeData.elements.skills.hability));
  const { modalState, setModalState } = props;

  return (
    <>
      <Header modalState={modalState} setModalState={setModalState} />
      <div className="resume">
        <div className="header">
          <div className="name">
            <h1>Abraham Velazquez</h1>

            <p>Mechatronic Engineer</p>
          </div>
          <div className="personalInfo">
            <p>Celphone: (+1) 365 476 8048</p>
            <p>Email: luisabraham.velazquez21@gmail.com</p>
            <p>Address: 71 Frederick Tisdale, Toronto, ON</p>
          </div>
        </div>
        <div className="presentation">
          <p>
            Young innovator with leadership and problem-solving skills, dynamic
            and responsible with experience and project execution. I seek to
            develop professionally within the best companies, to begin
            contributing capital and human value to highly prestigious
            companies.
          </p>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="experienceElements">
            {Object.values(ResumeData.elements.experience).map(
              (element, index, array) => {
                return (
                  <Component
                    key={element.id}
                    title={element.title}
                    titleTwo={element.titleTwo}
                    activityOne={element.activityOne}
                    activityTwo={element.activityTwo}
                    date={element.date}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <div className="skillsList">
            <ul className="listOne">
              {Object.values(ResumeData.elements.skills.habilityOne).map(
                (element, index, array) => {
                  return <SkillsComponent key={index} element={element} />;
                }
              )}
            </ul>
            <ul className="listTwo">
              {Object.values(ResumeData.elements.skills.habilityTwo).map(
                (element, index, array) => {
                  return <SkillsComponent key={index} element={element} />;
                }
              )}
            </ul>
          </div>
        </div>
        <div className="education experience">
          <h4>Education & Training</h4>
          <div className="experienceElements">
            {Object.values(ResumeData.elements.education.education).map(
              (element, index, array) => {
                return (
                  <Component
                    key={element.id}
                    title={element.title}
                    titleTwo={element.titleTwo}
                    date={element.date}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>

      <Footer />
      <ModalMenuPage modalState={modalState} setModalState={setModalState} />
    </>
  );
}
