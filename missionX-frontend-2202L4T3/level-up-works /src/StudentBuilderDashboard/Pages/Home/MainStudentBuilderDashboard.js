import ButtonScreen from '../Home/components/ButtonScreen';
import Sidebar from '../../components/Sidebar/Sidebar';
import './MainStudentBuilderDashboard.css';


function MainStudentBuilderDashboard() {
    return (
      <div className='main-SBD-background'>
        <Sidebar />
        <ButtonScreen />
      </div>
    );
  }
  
  export default MainStudentBuilderDashboard;