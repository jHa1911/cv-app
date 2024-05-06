import React, { useState } from 'react'
import InputGroup from './InputGroup'
import CollapsibleSection from './CollapsibleSection';

function GeneralInformation() {
    const [personalInfo, setPersonalInfo] = useState({
        fullname: '',
        email: '',
        phone: ''
    });

    const [isCollapsed, setIsCollapsed] = useState(false)

    function handleChange(e) {
        setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
    };

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <div className='personal-info'>
            <CollapsibleSection
                title="Personal Details"
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}  
            />
            {
                !isCollapsed && (
                    <div>
                        <InputGroup
                            id="fullname"
                            label="Full Name"
                            type="text"
                            value={personalInfo.fullname}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />
                        <InputGroup
                            id="email"
                            label="Email"
                            type="email"
                            value={personalInfo.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        <InputGroup
                            id="phone"
                            label="Phone"
                            type="tel"
                            value={personalInfo.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                        />
                    </div>
                )
            }

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