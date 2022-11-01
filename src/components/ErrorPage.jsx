import React from "react";
import errorImg from "../assets/error-img.jpg";
import { useNavigate } from "react-router-dom";

// import NavBar from "./costumHooks/NavBar";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error flex" style={{ backgroundColor: "#fff" }}>
      <div className="error-details flex">
        <p style={{ color: "red", fontSize: "1rem" }}>
          Ooops! an Error Occured
        </p>
        <h2> Awwww! Don't cry, </h2>
        <p>We're Working on getting it fixed, in the meantime, you can go:</p>

        <div>
          <button className="btn" onClick={() => navigate("/")}>
            {" "}
            Back Home
          </button>
          <button className="btn" onClick={() => navigate(-1)}>
            Previous Page
          </button>
        </div>
      </div>

      <div className="error-images">
        <div className="error-image">
          <img alt="Error" src={errorImg} />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
