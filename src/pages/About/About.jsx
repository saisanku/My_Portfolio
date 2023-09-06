import React from "react";
import profilePic from '../../components/images/profile_pic.png';
import "./about.css";
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <>
     
        <div className="about" id="about">
          <div className="row">
          <Fade top>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profilepic" /> 
            </div>        
            </Fade>
            <Fade bottom> 
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p> My name is Sanku Venkata Sai . I completed my schooling at Infant Jesus English Medium High School in 2014, where I achieved a CGPA of 9.2. I then went on to complete my intermediate education at Tulasi Murari Junior College in 2016, where I scored 924 marks out of 1000. After that, I graduated from West Godavari Institute of Science and Engineering in the 2020 batch with a percentage of 76.00%. I have completed a Full Stack Python Development Course at Pentagon Space. I am now actively seeking a job as a Python developer, where I can apply my skills and knowledge to create innovative and user-friendly websites. </p>
              <p> I am passionate about Python development and am constantly striving to improve my skills and stay up-to-date with the latest technologies and trends in the field. I am a quick learner, a team player, and am committed to delivering high-quality work.</p>
            </div>
            </Fade>
          </div>
        </div>
      
    </>
  );
};

export default About;