import React from "react";
import styles from "./index.module.css"
import logo from "../../assets/spatch.png"
import questionIcon from "../../assets/questionIcon.png"
import downArrowIcon from "../../assets/downArrorIcon.png"

 const NavBar:React.FC = ()=>{
    return(
        <div className={styles.navBar}>
            <div className={styles.logo} >
                <img src={logo} alt={"logo"} width={90}/>
            </div>

            <div className={styles.sideNav}>
                <div>
                    <img src={  questionIcon} alt={"questionIcon"}/>
                </div>
                <div className={styles.dummyProfilePicture}>

                </div>

                <div className={styles.userName}>Tee</div>
                <div>
                    <img src={downArrowIcon} alt={"downArrowIcon"}/>
                </div>
            </div>
        </div>
    )
 }
export default NavBar