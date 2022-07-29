import DashboardNavBar from '../../components/Navbar/Navbar';
import MainVideoTutorial from './components/MainVideoTutorials/MainVideoTutorials';
import Footer from '../../components/Footer/Footer';
import './VideoTutorial.css';
 

function VideoTutorial() {
    return (
      <div className='video-tutorial-main-background'>
        <DashboardNavBar />
        <MainVideoTutorial />
        <Footer />
      </div>
    );
  }
  
  export default VideoTutorial;