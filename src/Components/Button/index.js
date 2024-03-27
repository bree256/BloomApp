import React from "react";
import style from "../Button/style.module.css";
const Button = ({
  backgroundColor,
  text,
  border,
  img: Logos = () => {},
  margin,
  width,
  className,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: border,
        margin: margin,
        width: width,
      }}
      className={className}
    >
      <Logos className={style.logos} />
      <div className={style.text}>{text}</div>
    </button>
  );
};

export default Button;
