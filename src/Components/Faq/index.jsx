import style from "../Faq/style.module.css";
import flower from "../../Assets/flower.svg";
import Button from "../Button/index";
import Faq2 from "../Homepage/Faq2";
import { Link } from "react-router-dom";
const Faq = () => {
  return (
    <div className={style.faqcontainer}>
      <h2>FAQ</h2>
      <p>
        We address commonly asked questions and provide comprehensive answers to
        help you navigate your way through your nutrition and wellness journey.
      </p>
      <br></br>
      <br></br>
      <div className={style.faqask}>
        <Faq2 />
        <div className={style.ask}>
          <img src={flower} alt="flower" className={style.flower} />
          <h3>Ask your question</h3>
          <p>Feel Free A Ask questions on anything</p>
          <Link to="/contacts">
            <Button
              text="Ask a question"
              width="250px"
              className={style.button}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
