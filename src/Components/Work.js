import React from "react";
import sensitive from "../Assets/sensitive.png";
import toothache from "../Assets/toothache.png";
import cavity from "../Assets/cavity.png";

const Work = () => {
  const workInfoData = [
    {
      image: sensitive,
      title: "Sensitive Teeth",
     
    },
    {
      image: toothache ,
      
      title: "Toothache",
     

          
    },
    {
      image: cavity,
      title: "Cavity",
      
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Help me With</h1>
        <p className="primary-text">
        DentVision offers a comprehensive range of dental treatments and services to patients without meet dentist.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <br></br>
            <h1>{data.title}</h1>
            <br></br>
            <button className="secondary-button">
          More
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
