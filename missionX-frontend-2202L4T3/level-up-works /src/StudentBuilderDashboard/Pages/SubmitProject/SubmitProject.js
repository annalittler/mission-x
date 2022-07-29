import DashboardNavBar from '../../components/Navbar/Navbar';
import MainSubmitProject from './components/MainSubmitProject/MainSubmitProject';
import Footer from '../../components/Footer/Footer';
import './SubmitProject.css'
 

function SubmitProject() {
    return (
      <div className='submit-project-main-background'>
        <DashboardNavBar />
        <MainSubmitProject />
        <Footer />
      </div>
    );
  }
  
  export default SubmitProject;