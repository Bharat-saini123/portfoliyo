import React from "react";
import image from "./images/bg.jpg.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100vw",
        objectFit: "contain",
        objectPosition: "center",
      }}
    >
      <div className="main-content-navbar">
        <div className="all-nav">
          <NavLink
            to={"/"}
            style={{ color: "#fff", textDecoration: "none" }}
            className={"nav"}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            style={{ color: "#fff", textDecoration: "none" }}
            className={"nav"}
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            style={{ color: "#fff", textDecoration: "none" }}
            className={"nav"}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/project"}
            style={{ color: "#fff", textDecoration: "none" }}
            className={"nav"}
          >
            Project
          </NavLink>
        </div>
        <div className="grid-box" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <div className="text-box" style={{ marginLeft: "5rem" }}>
            <h1 className="main-heading" style={{ color: "#fff" }}>
              Front end web developer
            </h1>
            <div
              className="md-heading-main"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "3rem",
                color: "#fff",
                marginTop: "3rem",
              }}
            >
              <h4 style={{ textTransform: "capitalize" }}>
                Aspiring front-end developer with a strong foundation in HTML,
                CSS, and JavaScript, seeking to leverage coding skills and
                passion for learning new skills and keen to contribute .
              </h4>
            </div>
          </div>
          <div className="image-box" style={{ marginRight: "15rem" }}>
            <figure
              className="figure-profile"
              style={{ display: "inline-block" }}
            >
              <img
                src="./images/ishanPhoto.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </figure>
            <div
              className="name"
              style={{
                fontSize: "2rem",
                color: "#fff",
                fontWeight: "600",
                textTransform: "capitalize",
                paddingLeft: "2.5rem",
              }}
            >
              Ishan Kashyap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
