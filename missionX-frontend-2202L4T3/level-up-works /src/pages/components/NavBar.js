import React from "react"
import "../css/navBar.css"

export default function NavBar (){
    return (<div id="nav-bar-body">
        {/*left box*/}
        <div>
        <img src="../images/headerImage/levelupImage.png" alt="levelup logo"></img>
        </div>
        
        {/*right box*/}
        <div className="right-box">
            <div className="right-box-left">
            <div className= "right-box-link-one">
              <a href=""><img src="../images/headerImage/takeScreenShot.png" alt="takeScreenShot logo"></img></a>
            </div>
            <div className= "right-box-link-one">
            <a href=""><img src="../images/headerImage/moreProjectsImage.png" alt="moreProjectsImage logo"></img></a>
            </div>
            <div className= "right-box-link-one">
            <a href=""><img src="../images/headerImage/helpCentreImage.png" alt="helpCentreImage logo"></img></a>
            </div>
            </div>
            <div className="right-box-right">
                <div className="flag-image">
              <img src="../images/headerImage/NZFlag.png" alt="nzFlag logo"></img>
              </div>
         
                <div className="flag-image">
              <img src="../images/headerImage/Maoriflag.png" alt="maoriFlag logo"></img>
              </div>
            </div>

        </div>

        
    </div>)
   

}