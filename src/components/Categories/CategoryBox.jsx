import React, { useState, useCallback } from "react";
import Heading from "../Reusable/Heading";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadImage, addCategory, updateCategory } from "../../api/axios";

const CategoryBox = ({ title, holder, btn, funCall, categoryId, img }) => {
  const [skillTitle, setSkillTitle] = useState(null);
  const [file, setFile] = useState(img);
  const [imgName, setImageName] = useState(img);
  const [btnValue, setBtnValue] = useState(btn);
  const [afterBtn, setAfterBtn] = useState(btn);
  const [emptyInput, setEmptyInput] = useState(false);

  const handleAdd = (event) => {
    setSkillTitle(event.target.value);
    setEmptyInput(false);
  };
  const upload = () => {
    console.log(skillTitle, file);
  };

  const handleUploadData = async () => {
    if (skillTitle === null) {
      setEmptyInput(true);
      console.log(emptyInput);
    } else {
      if (funCall === true) {
        await addCategory(skillTitle, imgName);
        setSkillTitle(" ");
        setFile(null);
      } else if (funCall === false) {
        await updateCategory(categoryId, skillTitle, imgName);
        setSkillTitle(" ");
        setFile(null);
      }
    }
  };
  const onDrop = useCallback(async (acceptedFiles) => {
    setImageName(null);
    setFile(acceptedFiles[0]);
    setBtnValue("Uploading");
    let res = await uploadImage(acceptedFiles[0]);
    setImageName(res.filename);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
  });

  return (
    <>
      <div>
        <div className="skill_text">
          <Heading title={title} />
        </div>
        <div className="skillAlign">
          <input
            type="text"
            className="addSkillBox"
            placeholder={holder}
            value={skillTitle}
            onChange={handleAdd}
            required
          />
        </div>
        {emptyInput ? (
          <p className="alertText">Category cannot be empty</p>
        ) : null}

        <div className="alignUpload">
          <p>Upload Image</p>
          <div className="uploadImg" {...getRootProps()}>
            <input {...getInputProps()} />
            {file && (
              <div>
                <p>{imgName}</p>
              </div>
            )}
            {!file && <AiOutlineCloudUpload className="uploadIcon" />}
          </div>
        </div>

        <div className="skillBtns">
          {/* <div className="cancelSkillBtn skillBtn">Cancel</div> */}
          <div
            className={
              imgName
                ? "cancelAddBtn skillBtn"
                : "cancelAddBtn skillBtn disableBtn"
            }
            onClick={imgName ? handleUploadData : null}
          >
            <p>{imgName ? afterBtn : btnValue}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
