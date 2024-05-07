import React, { useState } from 'react'
import InputGroup from './InputGroup';
import CollapsibleSection from './CollapsibleSection';
import './educationalInformation.css'
import DispalyList from './DispalyList';

function EducationalInformation() {

    const [educationList, setEducationList] = useState([])

    const [educationData, setEducationData] = useState(
        { school: "", degree: "", graduationdate: "" }
    );

    const [isCollapsed, setIsCollapsed] = useState(false);

    const [isEducation, setIsEducation] = useState(true);

    function handleInputChange(e) {
        const id = e.target.id;
        const value = e.target.value;

        // create new object and update state
        setEducationData({ ...educationData, [id]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedList = [...educationList, educationData];
        setEducationList(updatedList);
        console.log('Added Education Entry:', educationData); // Log the added formData
        console.log('Updated Education List:', updatedList); // Log the updated educationList
        setEducationData({
            school: '',
            degree: '',
            graduationDate: ''
        });
        setIsEducation(!isEducation)
    }

    function addEducation() {
        setIsEducation(false)
    }

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    } 



    return (
        <div>
            <CollapsibleSection
                title="Education"
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />
            {
                isCollapsed && (
                    <div className="education-list">
                        {
                            isEducation ? (
                                <>
                                    <DispalyList
                                        educationList={educationList}
                                        educationData={educationData} 
                                    />
                                    <button className='submit-btn' onClick={addEducation}><span><ion-icon name="add-outline"></ion-icon></span>  Education</button>
                                </>
                            ) : (
                                <div>
                                    <InputGroup
                                        id="school"
                                        label="School"
                                        type="text"
                                        value={educationData.school}
                                        onChange={handleInputChange}
                                        placeholder="Enter School"
                                        required
                                    />
                                    <InputGroup
                                        id="degree"
                                        label="Degree"
                                        type="text"
                                        value={educationData.degree}
                                        onChange={handleInputChange}
                                        placeholder="Enter Degree"
                                        required
                                    />
                                    <InputGroup
                                        id="date"
                                        label="Graduation Date"
                                        type="date"
                                        value={educationData.graduationDate}
                                        onChange={handleInputChange}
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

export default EducationalInformation