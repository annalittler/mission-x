import DashboardNavBar from './components/Navbar/Navbar'
import MainStudentBuilderDashboard from './Pages/Home/MainStudentBuilderDashboard';
import Footer from './components/Footer/Footer'
import './StudentBuilderDashboard.css';

function StudentBuilderDashboard() {
  return (
    <div className='sbd-main-background'>
      <DashboardNavBar />
      <MainStudentBuilderDashboard />
      <Footer />
    </div>
  );
}

export default StudentBuilderDashboard;