import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='dashboard-sidebar-body'>
            <div className='student-profile-picture'>
                <img src='./images/Ellipse 38.png' alt='Profile Pic' id='profile-picture' />
            </div>
            <div>
                <Link to='/learningObjectives' className='sidebar-button'>
                <img src='./images/objectives.png' alt='objectives' />
                <p>LEARNING OBJECTIVES</p>
                </Link>    
            </div>
            <div>
                <Link to='/instructions' className='sidebar-button'>
                <img src='./images/steps.png' alt='Instructions' />
                <p>INSTRUCTIONS</p> 
                </Link>    
            </div>
            <div>
                <Link to='/videoTutorial' className='sidebar-button'>
                <img src='./images/video.png' alt='Video Tutorial' />
                <p>VIDEO TUTORIAL</p> 
                </Link>    
            </div>
            <div>
                <Link to='/makeProject' className='sidebar-button'>
                <img src='./images/new proj.png' alt='Make Project' />
                <p>MAKE PROJECT</p> 
                </Link>    
            </div>
            <div>
                <Link to='/submitProject' className='sidebar-button'>
                <img src='./images/submit proj.png' alt='Submit Project' />
                <p>SUBMIT PROJECT</p>   
                </Link>    
            </div>
            <div className='sidebar-button'>
                <img src='./images/prize copy.png' alt='Bonus Challenge' />
                <p>BONUS CHALLENGE</p>    
            </div>
            <div className='sidebar-button'>
                <img src='./images/list copy.png' alt='Take the Quiz' />
                <p>TAKE THE QUIZ</p>  
            </div>

            <div className='arrow-to-hide-sidebar'>
                <img src='./images/Red sidebar arrow.png' alt='Red Arrow'></img>
            </div>

            <div className='sidebar-account-section'>
                <div className='sidebar-account-button'>
                    <img src='./images/Icon awesome-user-circle.png' alt='Profile Icon'/>
                    <p id='account-text'>Profile</p>
                </div>
                <div className='sidebar-account-button'>
                    <img src='./images/Icon material-settings.png' alt='Settings Icon'/>
                    <p id='account-text'>Settings</p>
                </div>
                <div className='sidebar-account-button'>
                    <img src='./images/Icon awesome-sign-out-alt.png' alt='Log Out Icon'/>
                    <p id='account-text'>Log out</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;