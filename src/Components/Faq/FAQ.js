import React from "react";
import style from "../Faq/style.module.css";
import plus from "../../Assets/plus.svg";
import x from "../../Assets/x.svg";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq" + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={style.faqquestion}>
        {faq.question}
        <div className={style.icons}>
          <img src={plus} alt="plus" className={style.plus} />
          <img src={x} alt="xicon" className={style.x} />
        </div>
      </div>
      <div className={style.faqanswer}>{faq.answer}</div>
    </div>
  );
};

export default FAQ;
