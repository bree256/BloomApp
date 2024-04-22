// import { Button } from "../Button"
import { Link } from 'react-router-dom'
import styles from './email.module.css'

export const EmailVerification = ()=>{
    return(
        <div className={styles.container}>
            <h3>Confirm Your Email</h3>
            <p id="firstptag">Enter the 6 digit code we sent to <span> Mir****@gmail.com</span></p>
            <p>Enter verification code</p>
            <div className={styles.divcontainer}>
            <div className={styles.div1}><input type="text" /></div>
            <div className={styles.div2}><input type="text" /></div>
            <div className={styles.div3}><input type="text" /></div>
            <div className={styles.div4}><input type="text" /></div>
            <div className={styles.div5}><input type="text" /></div>
            </div>
            <p>Didn't recieve code? <span>Resend code</span></p>
           <Link to="/Successverification"> <button>Verify Now</button> </Link>
        </div>
    )
}