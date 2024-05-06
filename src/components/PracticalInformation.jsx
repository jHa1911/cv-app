import React from 'react'
import { useState } from 'react'
import InputGroup from './InputGroup'
import CollapsibleSection from './CollapsibleSection'

function PracticalInformation() {
    const [experienceInfo, setExperienceInfo] = useState({
        company: '',
        role: '',
        startDate: '',
        endDate:'present'
    });

    const [isCollapsed, setIsCollapsed] = useState(true)

    function handleChange(e) {
        setExperienceInfo({ ...experienceInfo, [e.target.id]: e.target.value });
    };

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <div className='experience-info'>
                <CollapsibleSection
                    title="Experience"
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}  
                />
                {
                    !isCollapsed && (
                        <div>
                            <InputGroup
                                id="company"
                                label="Company"
                                type="text"
                                value={experienceInfo.company}
                                onChange={handleChange}
                                placeholder="company"
                                required
                            />
                            <InputGroup
                                id="role"
                                label="Role"
                                type="text"
                                value={experienceInfo.role}
                                onChange={handleChange}
                                placeholder="role"
                                required
                            />
                            <InputGroup
                                id="date"
                                label="Date"
                                type="date"
                                value={experienceInfo.startDate}
                                onChange={handleChange}
                                placeholder="Date"
                                required
                            />
                            <InputGroup
                                id="date"
                                label="Date"
                                type="date"
                                value={experienceInfo.endDate}
                                onChange={handleChange}
                                placeholder="Date"
                                required
                            />
                        </div>
                    )
                }
                <div className="educationaldetails">
                    <h2>Educational Details</h2>
                    <p>Degree: {experienceInfo.company}</p>
                    <p>School: {experienceInfo.role}</p>
                    <p>Date: {experienceInfo.date}</p>
                </div>
    
            </div>
    )
}

export default PracticalInformation