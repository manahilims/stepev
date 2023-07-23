import React from "react";
import "./FormButton.css";
import FormButtom from "./FormButton";
const FormButton = ({ title }) => {
  return (
    <>
      <div className="formButton">
        <a>{title}</a>
      </div>
    </>
  );
};

export default FormButton;
