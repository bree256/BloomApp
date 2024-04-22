import React from "react";
import style from "../Button/style.module.css";
// import chaticon from "../../Assets/chaticon.svg";
const Button = ({
  backgroundColor,
  text,
  border,
  img: Logos = () => {},
  margin,
  width,
  onClick: onClick,
  disabled: disabled,
  className,
  imgClassName,
  imgSrc,
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
      onClick={onClick}
      disabled={disabled}
    >
      {imgSrc && (
        <img src={imgSrc} alt="button icon" className={style.buttonImage} />
      )}
      <Logos className={imgClassName} />
      <div className={style.text}>{text}</div>
    </button>
  );
};

export default Button;
