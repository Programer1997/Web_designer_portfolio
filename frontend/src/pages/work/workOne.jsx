import React from "react";

const WorkOne = (props) => {
  const { experienceProcessObject } = props;

  //console.log(experienceProcessObject);

  return (
    <>
      <div className="projectHomePage">
        <div className="projectPresentation">
          <h2>{experienceProcessObject.front.title_1}</h2>
          <p>{experienceProcessObject.front.text}</p>
          <img src={experienceProcessObject.front.img} alt="machine" />
        </div>
        <div className="context">
          <div className="text">
            <h3>Context</h3>
            <p>{experienceProcessObject.front.context}</p>
          </div>
          <div className="projectInfo">
            <div className="role">
              <h3>Role</h3>
              <p>{experienceProcessObject.front.role}</p>
            </div>
            <div className="team">
              <h3>Team</h3>
              <p>{experienceProcessObject.front.team_1}</p>
              <p>{experienceProcessObject.front.team_2}</p>
            </div>
            <div className="timeline">
              <h3>TimeLine</h3>
              <p>{experienceProcessObject.front.timeLine}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectSummary">
        <div className="summaryText">
          <p>SUMMARY</p>
          <h3>{experienceProcessObject.summary.title_summary}</h3>
          <p className="summaryText-text">
            {experienceProcessObject.summary.text_summary}
          </p>
        </div>
        <div className="summaryImages">
          <img
            className="summaryImageIndividual"
            src={experienceProcessObject.summary.img_1_summary}
            alt="machine1"
          />
          <img
            className="summaryImageIndividual"
            src={experienceProcessObject.summary.img_2_summary}
            alt="summary1"
          />
          <img
            className="summaryImageIndividual"
            src={experienceProcessObject.summary.img_3_summary}
            alt="solution1"
          />
        </div>
      </div>
      {/*///////////////////////////////////////*/}
      <div className="projectProblem">
        <div className="problemText">
          <h3>Issue</h3>
          <p>{experienceProcessObject.issue.text_issue}</p>
        </div>
        <div className="problemImages">
          <img src={experienceProcessObject.issue.img_1_issue} alt="" />
          <img src={experienceProcessObject.issue.img_2_issue} alt="" />
        </div>
      </div>
      {/*///////////////////////////////////////*/}
      <div className="projectSolution">
        <div className="solutionText">
          <h3>Solution</h3>
          <p>{experienceProcessObject.solution.text_solution}</p>
        </div>
        <div className="solutionImages">
          <img
            className="solutionImageIndividual"
            src={experienceProcessObject.solution.img_1_solution}
            alt=""
          />
          <img
            className="solutionImageIndividual"
            src={experienceProcessObject.solution.img_2_solution}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WorkOne;
