import './App.css';
import React, { useState } from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalInformation from './components/EducationalInformation';
import PracticalInformation from './components/PracticalInformation';
import CollapsibleSection from './components/CollapsibleSection';


const App = () => {
  const [isEducationalInfoCollapsed, setEducationalInfoCollapsed] = useState(false);
  const [isPracticalInfoCollapsed, setPracticalInfoCollapsed] = useState(false);

  return (
    <div className='container'>
      <GeneralInformation />
      <CollapsibleSection
        title="Educational Information"
        content={EducationalInformation}
        isCollapsed={isEducationalInfoCollapsed}
        toggleCollapse={() => setEducationalInfoCollapsed(!isEducationalInfoCollapsed)}
      />
      <CollapsibleSection
        title="Practical Information"
        content={PracticalInformation}
        isCollapsed={isPracticalInfoCollapsed}
        toggleCollapse={() => setPracticalInfoCollapsed(!isPracticalInfoCollapsed)}
      />

    </div>

    
    
  );
}

export default App;
