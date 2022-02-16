import React from "react";

const CategoryDropdown = ({ name }) => {
  return (
    <>
      <option value={name}>{name}</option>
    </>
  );
};

export default CategoryDropdown;
