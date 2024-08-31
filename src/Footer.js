import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="my-last-footer">
        <hr />
        <div
          className="last-content-footer-1"
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "3rem 0rem",
            textTransform: "capitalize",
          }}
        >
          <h2>all rights reasearved @ishan kashyap</h2>
          <h2>privacy policy</h2>
        </div>
        <hr />
        <div
          className="last-content-footer-2"
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            padding: "0.5rem 0rem",
          }}
        >
          This site is intended fro Us consumers.cookies and releated technology
          are used for advertising.to learn more,visit Add choice and privacy{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
