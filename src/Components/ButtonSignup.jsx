import styles from "./signup.module.css";

export const ButtonSignup = () => {
  return (
    <div>
      <button className={styles.btn}>Sign Up</button>
    </div>
  );
};

// export const Buttons = (props) => {

//     const classNames = {
//         primary: "Btn",
//         outline: "transparentbtn",
//         secondary: "bigBtn",
//         outlinetwo: "Btn-invert",

//     }

//     const className = classNames[props.type] || classNames.primary
//     const classes = combineClasses(className, props.className)

//         return(
//             props.onClick ?
//             <button onClick={props.onClick} className={classes}>
//                 {props.children}

//             </button>
//                 :
//             <a href='#/' className={classes}>{props.children}</a>
//         )

// }

// export const combineClasses = (...arg) => {
//     return arg.join('')

// }
