import './Navbar.css';

function DashboardNavBar() {
    return (
        <div className='dashboard-navbar-body'>
            <hr></hr>
            <div className='left-box'>
                <img src='./images/Star Logo 07-3.png' id='level-up-works-logo' alt='Level Up Works Logo' />
            </div>
            
            <div className='right-box'>
                <div className='right-box-buttons'>
                    <img src='./images\take-screenshot-button.png' alt='Take Screenshot' id='take-screenshot-button'></img>
                    <img src='./images\more-projects-button.png' alt='More Projects' id='more-projects-button'></img>
                    <img src='./images\ask-teacher-button.png' alt='Ask Teacher' id='ask-teacher-button'></img>
                </div>
                
                <div className='right-box-flags'>
                    <img src='.\images\NZ Flag.png' alt='New Zealand Flag' id='new-zealand-flag'></img>
                    <img src='.\images\Maori flag.png' alt='Maori Flag' id='maori-flag'></img>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardNavBar;