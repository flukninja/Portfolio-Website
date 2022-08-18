import React from "react";
import "./Timeline.css";
import WorkIcon from "../assets/work.svg";
import SchoolIcon from "../assets/school.svg";
import timelineElements from "../utilities/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  const imageStyle = {width:'50%', height:'90%'};

  return (
    <div>
      <h1 className="title">Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <img src={WorkIcon} style={imageStyle} /> : <img src={SchoolIcon} style={imageStyle} />}
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {element.subTitle}
              </h4>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;