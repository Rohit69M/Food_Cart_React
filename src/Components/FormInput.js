import React from "react";

const FormInput = (props) => {
  return (
    <main className="group">
      <input
        type={props.type}
        onChange={props.handleChange}
        value={props.value}
      />
      <label
        className={`${
          props.value.length > 0 ? "input_label shrink" : "input_label"
        }`}
      >
        {props.label}
      </label>
    </main>
  );
};

export default FormInput;
