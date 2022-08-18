import React from 'react'
import './Skills.css'
import pic from '../assets/profile_pic.jpg'
import icon_html from '../assets/html.png'
import icon_css from '../assets/css-3.png'
import icon_js from '../assets/js.png'
import icon_react from '../assets/react.png'
import icon_node from '../assets/node.png'
import icon_mongo from '../assets/mongo.png'
const Skills = () => {
  return (
                <div className="Skills">
                <h1>Skills & Tools</h1>
                <div className="skill-gallary">
                <div className="gallary">
                <img src={icon_html} alt='html-logo' />
                {/* <h4>Software engineering</h4>
                <p>COURSES</p>
                <p>Web Development, Mobile Development, iOT, APIs</p> */}
              </div>
                
              <div className="gallary">
                <img src={icon_css} alt='css-logo' />
                {/* <h4>Computer art</h4>
                <p>COURSES</p>
                <p>Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation</p> */}
              </div>
          
              <div className="gallary">
                <img src={icon_js} />
                {/* <h4>Design</h4>
                <p>COURSES</p>
                <p>User Experience Design, User Research, Visual Design</p> */}
              </div>
          
              <div className="gallary">
                <img src={icon_react} />
                {/* <h4>Data</h4>
                <p>COURSES</p>
                <p>Data Science, Big Data, SQL, Data Visualization</p> */}
              </div>
          
              <div className="gallary">
                <img src={icon_node} />
                {/* <h4>Business</h4>
                <p>COURSES</p>
                <p>Product Development, Business Development, Startup</p> */}
              </div>

              <div className="gallary">
                <img src={icon_mongo} />
                {/* <h4>Marketing</h4>
                <p>COURSES</p>
                <p>Analytics, Content Marketing, Mobile Marketing</p> */}
              </div>
            </div>
            </div>

  )
}

export default Skills