import style from "./email.module.css"
import { Link } from "react-router-dom"

export const Successverification = () =>{
    return(
        <section className={style.main}>
        
                <div className={style.circle}></div> <br /> <br />
                <h5>Email Verified</h5>
                <p>Your email Mir*****@gmail.com has successfully been verified. <br />
                 Proceed to complete your account creation.</p>
               <Link to = "/Homepage"><button>continue</button> </Link>
            
        </section>
    )
}