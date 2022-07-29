import Blocks from '../Blocks/Blocks';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import './MainLearningObjectives.css' 


function MainLearningObjectives() {
    return (
      <div className='main-LO-background'>
        <Sidebar />
        <Blocks />
      </div>
    );
  }
  
  export default MainLearningObjectives;