import React from "react";
import "./work.scss";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer.jsx";

//Imports components to diffferentes experience job work done  :
import WorkOne from "./workOne.jsx";
//import WorkTwo from "./workTwo.jsx";
//import WorkThree from "./workThree.jsx";
import workExperienceImages from "../../mocks/workExperienceImages.json";
import ModalMenuPage from "../../components/modalMenuMobile/modalMenu.jsx";

export default function Work(props) {
  //const [selectedElement, setSelectedElement] = useState("bathurst");
  //console.log(workExperienceImages.elements_2.holderTester.holderTesterProcess);
  const { modalState, setModalState, selectedElement } = props;

  const selectedWork = () => {
    switch (selectedElement) {
      case "bathurst":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.stayAway.stayAway_Process
            }
          />
        );
      case "pickering":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.happyDental.happyDental_Process
            }
          />
        );
      case "etobicoke":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.budgetTracker.labviewTagProcess
            }
          />
        );
      default:
        return <div>Nothing to display, try again later or call us !</div>;
    }
  };

  return (
    <>
      <Header modalState={modalState} setModalState={setModalState} />
      {selectedWork()}
      <Footer />
      <ModalMenuPage modalState={modalState} setModalState={setModalState} />
    </>
  );
}
