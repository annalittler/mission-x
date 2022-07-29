import SubmitContent from '../SubmitContent/SubmitContent'
import Sidebar from '../../../../components/Sidebar/Sidebar';
import './MainSubmitProject.css'


function MainSubmitProject() {
    return (
      <div className='main-MSP-background'>
        <Sidebar />
        <SubmitContent />
      </div>
    );
  }
  
  export default MainSubmitProject;