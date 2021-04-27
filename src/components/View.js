import React, { useState } from "react";
import "./Comp.css";
import Button from "react-bootstrap/Button";

function View(props) {
  const [viewss, setViewss] = useState("none");
  const [val, setVal] = useState("more");
  const toggleviews = () => {
    if (viewss === "none") {
      setViewss("");
      setVal("less");
    } else {
      setViewss("none");
      setVal("more");
    }
  };
  return (
    <>
      <div style={{ display: viewss }}>
        <span style={{ fontWeight: "bold", color: "grey" }}>Gender : </span>
        {props.gen}
        <br />
        <span style={{ fontWeight: "bold", color: "grey" }}>
          Education :{" "}
        </span>{" "}
        {props.ed}
        <br />
        <span style={{ fontWeight: "bold", color: "grey" }}>Skills : </span>
        {props.skill}
      </div>
      <Button onClick={toggleviews} varient="success">
        Click to {val}
      </Button>
    </>
  );
}

export default View;
