import React, { useState } from 'react'
import InputGroup from './InputGroup'

function GeneralInformation() {
    const [personalInfo, setPersonalInfo] = useState({
        fullname: '',
        email: '',
        phone: ''
    });
    function handleChange(e) {
        setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
    };


    return (
        <div>
            <InputGroup 
                id="fullname"
                label="Full Name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                value={personalInfo.fullname}
            />
            <InputGroup
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
            />
            <InputGroup 
                id="phone"
                label="Phone"
                type="tel"
                placeholder="Enter your phone number"
                onChange={handleChange}
            />

            <div className="personaldetails">
                <h2>Personal Details</h2>
                <p>Full Name: {personalInfo.fullname}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
            </div>

        </div>
    )
}

export default GeneralInformation