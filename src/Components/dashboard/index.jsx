import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { RightSidebar } from "./RightSidebar"
import {Main} from "./Main"
import style from "./dashboard.module.css"

export const Dashboard = () =>{
    return(
        <section className={ style.gridContent}>
        <Header></Header>
        <div className={style.mainDiv}>
        <Sidebar></Sidebar>
        <Main></Main>
         <RightSidebar></RightSidebar>
         </div>
       </section>
    )
}





