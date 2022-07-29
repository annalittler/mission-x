import './ButtonScreen.css';
import { Link } from 'react-router-dom';

function ButtonScreen() {
    return(
        <div className='button-dashboard-background'>
            <div>
                <Link to='/learningObjectives'>
                <button className='home-button'>
                <img src='./images/objectives dark@2x.png' alt='Objectives' />
                <p>LEARNING OBJECTIVES</p>
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/instructions'>
                <button className='home-button'>
                <img src='./images/steps dark@2x.png' alt='Instructions' />
                <p>INSTRUCTIONS</p> 
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/videoTutorial'>
                <button className='home-button'>
                <img src='./images/video dark@2x.png' alt='Video Tutorial' />
                <p>VIDEO TUTORIAL</p>   
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/makeProject'>
                <button className='home-button'>
                <img src='./images/new proj dark@2x.png' alt='Make Project' />
                <p>MAKE PROJECT</p> 
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/submitProject'>
                <button className='home-button'>
                <img src='./images/submit proj dark@2x.png' alt='Submit Project' />
                <p>SUBMIT PROJECT</p>   
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/studentBuilderDashboard'>
                <button className='home-button'>
                <img src='./images/prize copy dark@2x.png' alt='Bonus Challenge' />
                <p>BONUS CHALLENGE</p>    
                </button>   
                </Link>    
            </div>
            <div>
                <Link to='/studentBuilderDashboard' >
                <button className='home-button'>
                <img src='./images/list copy dark@2x.png' alt='Take the Quiz' />
                <p>TAKE THE QUIZ</p>  
                </button>   
                </Link> 
            </div>
        </div>
    )
}
export default ButtonScreen;