import React from "react";
import { useRouteError } from "react-router-dom";
// import NavBar from "./costumHooks/NavBar";

function ErrorPage() {
  // const routeError = useRouteError();
  const error = useRouteError();

  console.log(error);

  return (
    <div className="error">
      <p className="big-error">Ooops! Error</p>
      <h2> Awwww! Don't cry, </h2>
    </div>
  );
}

export default ErrorPage;
