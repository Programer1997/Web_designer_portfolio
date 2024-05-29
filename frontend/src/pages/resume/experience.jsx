import React from "react";

export default function experience(props) {
  //console.log(props.activityOne);
  return (
    <>
      <div className="individualInformation">
        <div className="job">
          <h3>{props.titleTwo}</h3>
          <p>{props.date}</p>
        </div>
        {props.activityOne ? (
          <div className="jobActivities">
            <ul>
              <li>{props.activityOne}</li>
              <li>{props.activityTwo}</li>
            </ul>
          </div>
        ) : (
          <div className="jobActivities">
            <ul>
              <li>{props.title}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
