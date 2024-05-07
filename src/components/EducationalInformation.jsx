import React, { useState } from 'react'
import InputGroup from './InputGroup';

function EducationalInformation() {

    const [educationList, setEducationList] = useState([])

    const [educationData, setEducationData] = useState(
        { school: "", degree: "", graduationdate: "" }
    );

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
        setIsEducation(true)
    }



    return (
        <div>
            <h1>education</h1>
            {
                isEducation && (
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
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )
            }
            <button onClick={addEducation}>Add Education</button>
        </div>
    )
}

export default EducationalInformation