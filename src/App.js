import React, { useState } from "react";
import "./main.scss";

const Toggle = ({ ...rest }) => {
  const [value, setValue] = useState({ toggle: false });

  const onChange = e => {
    setValue({ [e.target.name]: !value.toggle });
  };

  return (
    <div
      className={`toggle__wrapper ${
        value.toggle ? "toggle__wrapper-checked" : ""
      }`}
    >
      <span className={`toggle__off ${!value.toggle ? "active" : ""}`}></span>
      <span
        className={`toggle__on ${value.toggle ? "active" : ""}`}
      ></span>{" "}
      <div
        className={`toggle__btn ${
          value.toggle ? "toggle__checked toggle__btn-checked" : ""
        }`}
      >
        <input
          {...rest}
          className="toggle__input"
          checked={value.toggle}
          onChange={onChange}
        />
        <label htmlFor={rest.id} className="toggle__label"></label>
      </div>
    </div>
  );
};

const App = () => <Toggle name="toggle" id="toggle" type="checkbox" />;

export default App;
