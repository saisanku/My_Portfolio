import React from "react";
import "./contact.css";
 import Rotate from "react-reveal/Rotate";
 import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin  } from "react-icons/bs";
import {BsInstagram} from "react-icons/bs"
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
           <a href="https://www.linkedin.com/in/venkata-sai-sanku-635853211/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin color="blue" size={30} className="ms-2" />
        </a>
        <a href="https://github.com/saisanku" target="_blank" rel="noopener noreferrer">
          <BsGithub color="black" size={30} className="ms-2" />
        </a>

        </h6>
      </div>

                      <div className="row px-3 mb-3 mt-2">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="mt-2 mb-3">
                      <span className="fw-bold fs-4 me-2">
                      NAME :- 
                        </span>
                        <span className="fs-4">                  
                            SANKU VENKATA SAI
                        </span>
                    </div>
                        
                    <div className="mt-2 mb-3">
                      <span className="fw-bold fs-4 me-2 ">
                      G-MAIL :- 
                        </span>
                        <span className="fs-5">                  
                        venkatasaisanku@gmail.com
                        </span>
                    </div>

                    <div className="mt-2 mb-3 ">
                      <span className="fw-bold fs-4 me-2">
                    PHONE NUMBER :- 
                        </span>
                        <span className="fs-5">                  
                            7075811775
                        </span>
                    </div>

                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;