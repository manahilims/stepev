import React, { useState, useEffect } from "react";
import "./Category.css";
import Heading from "./../Reusable/Heading";
import Notification from "./../Reusable/Notification";
import { getCategories, date } from "../../api/axios";
import close from "./../../assets/Images/close.png";
import CategoryBox from "./CategoryBox";
import { deleteCategory } from "../../api/axios";

const Category = () => {
  const [data, setData] = useState();
  const [box, setBox] = useState(false);
  const [state, setState] = useState(false);
  const [editCat, setEditCat] = useState(false);
  const [handleValue, setHandleValue] = useState(null);
  const [categoryId, setCategoryId] = useState();
  const [value, setValue] = useState();
  const [img, setImg] = useState();

  const getData = async () => {
    let response = await getCategories();
    setData(response.data);
  };

  const handleBox = () => {
    setBox(!box);
    setState(!state);
  };
  const handleDelete = async (id) => {
    deleteCategory(id);
    getData();
  };
  const handleCategory = (id, value, img) => {
    setEditCat(!editCat);
    setCategoryId(id);
    setValue(value);
    setImg(img);
    setState(!state);
  };
  useEffect(() => {
    getData();
  }, [state]);
  return (
    <>
      <div className={box ? "blur" : null}>
        <div className="categoryHeader">
          <Heading title={"Categories"} />
          <div onClick={handleBox} className="skill_add_btn">
            <Notification notification={"Add"} />
          </div>
        </div>

        <table className="skillsTable">
          <thead>
            <tr align="center">
              <th align="left">Name</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr align="center" key={index}>
                <td align="left" className="skillName">
                  <p>{item?.title}</p>
                </td>
                <td className="skillDate">{date(item?.createdAt)}</td>
                <td className="skillsBtns">
                  <div
                    className="skillDeleteBtn"
                    onClick={() => {
                      handleDelete(item?._id);
                    }}
                  >
                    <p>Delete</p>
                  </div>
                  <div
                    className="skillEditBtn"
                    onClick={() => {
                      handleCategory(item?._id, item?.title, item?.avatar);
                    }}
                  >
                    <p>Edit</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {box ? (
        <div className="add_skill">
          <div className="skillClose" onClick={handleBox}>
            <img align="right" src={close} alt="Close btn" />
          </div>
          <CategoryBox
            title="Add category"
            holder="Add category"
            btn="Add"
            funCall={true}
            img={null}
          />
        </div>
      ) : null}
      {editCat ? (
        <div className="add_skill">
          <div className="skillClose" onClick={handleCategory}>
            <img align="right" src={close} alt="Close btn" />
          </div>
          <CategoryBox
            title="Update category"
            holder={value}
            btn="Update"
            funCall={false}
            categoryId={categoryId}
            img={img}
          />
        </div>
      ) : null}
    </>
  );
};

export default Category;
