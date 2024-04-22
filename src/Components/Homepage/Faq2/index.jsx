import React from "react";
import style from "../Faq2/style.module.css";
import { useState } from "react";

const Faq2 = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.accordion}>
        {data.map((item, i) => (
          <div className={style.item}>
            <div className={style.title} onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span className={style.span}>{selected === i ? "x" : "+"}</span>
            </div>
            <div
              className={
                selected === i
                  ? `${style.content} ${style.show}`
                  : style.content
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq2;

const data = [
  {
    question: "How do I book an appointment through Bloom ?",
    answer:
      "Booking an appointment is easy! Simply browse through our list of beauty services, select your preferred professional, date, and time, and proceed to confirm your booking securely through our platform.",
  },
  {
    question:
      "Are the beauty businesses on Bloom vetted for quality and reliability?",
    answer:
      "Yes they are vetted to the ensure quality services to our customers",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "",
  },
  {
    question: "How do I leave a review for a beauty service Ive used?",
    answer: "",
  },
  {
    question: "Is my payment information secure on Bloom Beauty?",
    answer: "",
  },
  {
    question: "How can I contact Bloom Beauty for support or inquiries?",
    answer: "",
  },
];
