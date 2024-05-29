import React from "react";
import { useNavigate } from "react-router-dom";

const HomeWorkExperience = (props) => {
  const navigate = useNavigate();
  const { workExperienceSelected } = props;

  const handleClick = () => {
    //console.log(`hi since img ${props.title}`);
    workExperienceSelected();
    window.scrollTo(0, 0);
    navigate("/work");
  };
  return (
    <>
      <img src={props.imgUrl} alt="something is wrong" onClick={handleClick} />
      <div className="workExamplesText">
        <div className="workExamplesTextDiv">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <button onClick={handleClick}>More</button>
      </div>
    </>
  );
};

export default HomeWorkExperience;
