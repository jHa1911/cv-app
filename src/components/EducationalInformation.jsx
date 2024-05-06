import React from 'react'
import { useState } from 'react'
import InputGroup from './InputGroup'
import CollapsibleSection from './CollapsibleSection'

function EducationalInformation() {
    const [educationalInfo, setEducationalInfo] = useState({
        degree: '',
        school: '',
        date: ''
    });

    const [isCollapsed, setIsCollapsed] = useState(true)

    function handleChange(e) {
        setEducationalInfo({ ...educationalInfo, [e.target.id]: e.target.value });
    };

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className='educational-info'>
                <CollapsibleSection
                    title="Educational Details"
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}  
                />
                {
                    !isCollapsed && (
                        <div>
                            <InputGroup
                                id="degree"
                                label="Degree"
                                type="text"
                                value={educationalInfo.fullname}
                                onChange={handleChange}
                                placeholder="Title of Study"
                                required
                            />
                            <InputGroup
                                id="school"
                                label="School"
                                type="text"
                                value={educationalInfo.email}
                                onChange={handleChange}
                                placeholder="school"
                                required
                            />
                            <InputGroup
                                id="date"
                                label="Date"
                                type="date"
                                value={educationalInfo.phone}
                                onChange={handleChange}
                                placeholder="Date"
                                required
                            />
                        </div>
                    )
                }
    
                <div className="educationaldetails">
                    <h2>Educational Details</h2>
                    <p>Degree: {educationalInfo.degree}</p>
                    <p>School: {educationalInfo.school}</p>
                    <p>Date: {educationalInfo.date}</p>
                </div>
    
            </div>
    )
}

export default EducationalInformation