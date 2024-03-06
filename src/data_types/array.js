import React from "react";
import Type from "./type";

const ArrayType = (props) => {
  const { value } = props;
  console.log(value);
  return (
    <ul>
      {value.map((v, i) => (
        <li key={i}>
          <Type value={v} />
        </li>
      ))}
    </ul>
  );
};

export default ArrayType;
