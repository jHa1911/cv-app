import React, { useState } from 'react'
import CollapsibleSection from './CollapsibleSection'

function GeneralInformation() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [submittedData, setSubmittedData] = useState(null)
    //const [isGeneralInfoCollapsed, setGeneralInfoCollapsed] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
   // const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        setSubmittedData({ name: name, email: email, phoneNumber: phoneNumber });
        setIsCollapsed(!isCollapsed);
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleEdit = (e) => {
        setIsCollapsed(true)
        if (!submittedData) return;
        setName(submittedData.name);
        setEmail(submittedData.email);
        setPhoneNumber(submittedData.phoneNumber);
        
    };




    return (
        <div>
            <h1>General Information</h1>
            <button className="collapse-button" onClick={toggleCollapse}>
                {isCollapsed ? '▼' : '▲'}
            </button>
            {
                isCollapsed && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Phone Number:
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                )
            }
            { 
                submittedData && !isCollapsed && (
                    <div>
                        <h2>Submitted Data</h2>
                        <p>Name: {submittedData.name}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Phone Number: {submittedData.phoneNumber}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}


export default GeneralInformation