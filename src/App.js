import './App.css';
import GeneralInformation from './components/GeneralInformation';
import EducationalInformation from './components/EducationalInformation';
import PracticalInformation from './components/PracticalInformation';


const App = () => {

  return (
    <div className='container-box'>
      <div className='edit-container'>
      <GeneralInformation />
      <hr />
      <EducationalInformation />
      <hr />
      <PracticalInformation />
      </div>
      <div className='resume-container'>
        hello
      </div>

    </div>

    
    
  );
}

export default App;
