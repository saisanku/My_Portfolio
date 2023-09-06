import React from 'react'
import './project.css'
import Spin from 'react-reveal/Spin';
const Project = () => {
  return (
    <>
    <div className="container  text-center  project" id='project'>
    <h2 className='col-12 mt-3  mb-1  text-uppercase'>
       top recent projects
      </h2>
      <hr/>
         <p className='pb-3'>
          Here are my live projects with source codes
        </p>
        {/* card-design */}
       
        <div className="row" id='ads'>
        <Spin>

         <div className="">
          <div className="card-rounded">
            <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="https://images.techhive.com/images/article/2016/04/erp-ts-100653791-large.jpg" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3 text-center">
              <span className=" card-detail-badge m-1">XML</span>
              <span className=" card-detail-badge m-1">CSS</span>
              <span className=" card-detail-badge m-1">Odoo</span>
              <span className=" card-detail-badge m-1">Python</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto ">
                <h5 className='text-uppercase mt-3 fs-4 '>Campus ERP</h5>
              </div>
            </div>
          </div>
         </div>
         </Spin>
        </div>
    </div>
    </>
  )
}

export default Project