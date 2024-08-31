import React from "react";
import image1 from "./images/my1.jpg";
import { NavLink } from "react-router-dom";
import image from "./images/flipback2.jpg";

const Projects = () => {
  return (
    <div>      <h1
    style={{
      textTransform: "capitalize",
      fontSize: "5rem",
      textAlign: "center",
      marginTop: "5rem",
      marginBottom:"2rem"
    }}
  >
    Projects
  </h1>
    <div
    style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100vw",
        objectFit: "contain",
        objectPosition: "center",
        color:"#fff"
      }}
    >

      <div className="wrapper">
        <div className="cols">
          <NavLink
            className="col"
            ontouchstart="this.classNameList.toggle('hover');"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div className=" my-container-wrapper">
              <div
                className="front"
                style={{ backgroundImage: `url(${image1})` }}
              >
                <div className="inner">
                  <p style={{ textTransform: "capitalize" }}>
                  Calculator App
                  </p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p style={{ textTransform: "capitalize" }}>
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: "500",
                        textTransform: "capitalize",
                      }}
                    >
                      programming use{" "}
                    </span>
                    Html,css,Bootstrap,sql,git,github
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
