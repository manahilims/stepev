import React, { useState } from "react";
import Heading from "../Reusable/Heading";
import "./SettingItem.css";
const SettingBox = () => {
  const [pass, setPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [emptyField, setEmptyField] = useState(false);
  const [equal, setEqual] = useState(false);
  const [length, setLength] = useState(false);

  const handlePassword = (event) => {
    setPass(event.target.value);
    setLength(false);
  };
  const confirmPassword = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleSubmit = () => {};

  return (
    <>
      <div className="skill_text textHeadingAlign">
        <Heading title="Change Password" />
      </div>
      <div className="skillAlign alignInputBox">
        <input
          type="text"
          className="addSkillBox"
          placeholder="Add new password"
          onChange={handlePassword}
          value={pass}
        />
      </div>
      <div className="skillAlign">
        <input
          type="text"
          className="addSkillBox"
          placeholder="Confirm new password"
          onChange={confirmPassword}
          value={confirmPass}
        />
      </div>
      {length ? (
        <p className="settingWarning">Password length must be greater then 6</p>
      ) : null}
      {emptyField ? (
        <p className="settingWarning">Field cannot be empty</p>
      ) : null}
      {equal ? (
        <p className="settingWarning">
          New password should be equal to confirm password
        </p>
      ) : null}

      <div className="skillBtns changeBtns">
        <div className="cancelSkillBtn skillBtn">Cancel</div>
        <div className="cancelAddBtn skillBtn" onClick={handleSubmit}>
          <p>Change</p>
        </div>
      </div>
    </>
  );
};

export default SettingBox;
