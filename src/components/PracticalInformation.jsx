import React from 'react'
import { useState } from 'react'
import InputGroup from './InputGroup'
import CollapsibleSection from './CollapsibleSection'
import './practicalInformation.css'

function PracticalInformation() {
    const [experienceData, setExperienceData] = useState({
        company: '',
        role: '',
        startDate: '',
        endDate: ''
    });

    const [experienceList, setExperienceList] = useState([])

    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isExperience, setIsExperience] = useState(true)

    function handleInputChange(e) {
        setExperienceData({ ...experienceData, [e.target.id]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const updatedList = [...experienceList, experienceData];
        setExperienceList(updatedList);
        console.log('Added Education Entry:', experienceData); // Log the added formData
        console.log('Updated Education List:', updatedList); // Log the updated experienceList
        setExperienceData({
            company: '',
            role: '',
            startDate: '',
            endDate: ''
        });
        setIsExperience(!isExperience)
    }

    function addExperience() {
        setIsExperience(false)
    }

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
                isCollapsed && (
                    <div className="experience-list">
                        {
                            isExperience ? (
                                <>
                                    <ul>
                                        {experienceList.map((experienceData, index) => (
                                            <li key={index}>
                                                {experienceData.company}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className='submit-btn' onClick={addExperience}><span><ion-icon name="add-outline"></ion-icon></span> Experience</button>
                                </>
                            ) : (
                                <div>
                                    <InputGroup
                                        id="company"
                                        label="Company"
                                        type="text"
                                        value={experienceData.company}
                                        onChange={handleInputChange}
                                        placeholder="Enter Company"
                                        required
                                    />
                                    <InputGroup
                                        id="role"
                                        label="Role"
                                        type="text"
                                        value={experienceData.role}
                                        onChange={handleInputChange}
                                        placeholder="Enter Role"
                                        required
                                    />
                                    <InputGroup
                                        id="date"
                                        label="Starting Date"
                                        type="date"
                                        value={experienceData.startDate}
                                        onChange={handleInputChange}
                                    />
                                    <InputGroup
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        value={experienceData.endDate}
                                        onChange={handleInputChange}
                                        optional
                                    />
                                    <button className='btn btn-outline-primary' onClick={handleSubmit}>Submit</button>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default PracticalInformation