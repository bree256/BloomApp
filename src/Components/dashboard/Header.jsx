import style from "./dashboard.module.css"
import { FiSearch } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { MdOutlineMailOutline } from "react-icons/md";
import { PiBellThin } from "react-icons/pi";
import img from "./images/logo.png"

export const Header = () =>{
    return(
       <section>
        <header className={style.header}>
         <img src={img} alt="" />
       
        <div className={style.select1}>
        <HiOutlineBriefcase />  <label htmlFor="select">select services</label>
       <select name="services" id="">select service</select>
       </div>
       <div className={style.select2}>
        <label htmlFor="work">working staff</label>
        <select name="staff" id="">
            {/* <option value="hair dressing">hair stylist</option>
            <option value="">makeup artist</option> */}
        </select>
       </div>
       <div className={style.textToday}>
       <p> <IoIosArrowBack className={style.arrow} /> Today <IoIosArrowForward  className={style.arrow}/></p>
       </div>
       <div className={style.search}>
        <input type="text" placeholder="search"/>
         <FiSearch />
         
       </div>
       <div>
       <MdOutlineMailOutline className={style.mailbox} />
       </div>
       <div>
       <PiBellThin className={style.bell} />
       </div>
       <div className={style.btnService}>
        <button>+ Create Service</button>
       </div>
        </header>
       </section>
    )
}
