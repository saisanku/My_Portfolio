import React from 'react'
import { SiReact } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './workexperience.css'
const Workexperience = () => {
  return (
    <>
        <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date={<span className='date'>July 2021 - FEB 2023</span>}
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               KGISL PVT LTD
              </h4>
              <p>
              User Experience, Visual Design.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
       </div>
       </div>
    </>
  )
}

export default Workexperience