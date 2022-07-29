import DashboardNavBar from '../../components/Navbar/Navbar';
import MainLearningObjectives from './components/MainLearningObjectives/MainLearningObjectives';
import Footer from '../../components/Footer/Footer';
import './LearningObjectives.css'
 

function LearningObjectives() {
    return (
      <div className='learning-objectives-main-background'>
        <DashboardNavBar />
        <MainLearningObjectives />
        <Footer />
      </div>
    );
  }
  
  export default LearningObjectives;