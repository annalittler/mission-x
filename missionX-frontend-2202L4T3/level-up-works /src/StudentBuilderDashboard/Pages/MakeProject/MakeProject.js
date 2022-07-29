import DashboardNavBar from '../../components/Navbar/Navbar';
import MainLearningObjectives from './components/MainMakeProject/MainMakeProject';
import Footer from '../../components/Footer/Footer';
import './MakeProject.css'
 

function MakeProject() {
    return (
      <div className='make-project-main-background'>
        <DashboardNavBar />
        <MainLearningObjectives />
        <Footer />
      </div>
    );
  }
  
  export default MakeProject;