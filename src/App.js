import './App.css';
import GeneralInformation from './components/GeneralInformation';
import EducationalInformation from './components/EducationalInformation';
import PracticalInformation from './components/PracticalInformation';


const App = () => {

  return (
    <div className='container'>
      <div className='edit-container'>
      <GeneralInformation />
      <EducationalInformation />
      <PracticalInformation />
      </div>
      <div className='resume-container'>
        Hello
      </div>

    </div>

    
    
  );
}

export default App;
