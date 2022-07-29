import Content from '../Content/Content';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import './MainMakeProject.css'


function MainMakeProject() {
    return (
      <div className='main-MP-background'>
        <Sidebar />
        <Content />
      </div>
    );
  }
  
  export default MainMakeProject;