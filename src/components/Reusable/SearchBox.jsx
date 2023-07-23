import React from "react";
import "./SearchBox.css";
const SearchBox = () => {
  return (
    <>
      <input
        className="searchUserBox"
        type="text"
        placeholder="Search user by name, email..."
      />
    </>
  );
};

export default SearchBox;
