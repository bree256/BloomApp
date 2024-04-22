import React from "react";
import styles from './signup.module.css'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";


export const CustomInput = ({text, ...props}) => {
    const [show, setShow] = React.useState(false)
    let type = props.type
    if(props.type === 'password'){
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    return(
        <div className={styles.wrapper}>
            <input 
                {...props}
                type={type}
            />
            {
                props.type === 'password' && <div onClick={handleIconToggle} className={styles.icon}>
                   {!show?
                     <FaRegEyeSlash size={'1.5rem'} />:
                     <FaRegEye size={'1.5rem'} />}
                </div>
            }
        </div>
    )
}