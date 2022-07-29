import React from 'react'

export default function Header() {
    return (
        <div className="headerElement">
            
                <div className="headerElement-left">
                    <img src="../images/Star Logo 07-2.png" alt="" className="starLogo" />
                </div>

                <div className="headerElement-middle">
                        <div>HOME</div>
                        <div>PROJECTS</div>
                        <div>TEACHERS</div>
                </div>

                <div className="headerElement-right">
                        <div className="langSection">
                            <div>LANG</div>
                            <img src="../images/NZFlag.png" alt="" />
                            <img src="../images/Maori Flag.png" alt="" />
                </div>

                <div className="profileHeaderSection">
                    <img src="../images/Ellipse 38.png" alt="" className="headerProfilePic" />
                    <div>RAWIRI FLETCHER</div>
                </div>

                </div>
                
                
        </div>
        
    )

}