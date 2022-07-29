import DashboardNavBar from '../../components/Navbar/Navbar';
import MainInstructions from './components/MainInstructions/MainInstructions';
import Footer from '../../components/Footer/Footer';
import './Instructions.css'
 

function Instructions() {
    return (
      <div className='instructions-main-background'>
        <DashboardNavBar />
        <MainInstructions />
        <Footer />
      </div>
    );
  }
  
  export default Instructions;