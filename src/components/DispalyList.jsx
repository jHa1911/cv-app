import React from 'react'

function DispalyList({educationList, educationData}) {
    return (
        <div>
            <ul>
                {
                    educationList.map((education, index) => (
                        <li key={index}>
                            <p>School: {education.school}</p>
                            <p>Degree: {education.degree}</p>
                            <p>Graduation Date: {education.graduationDate}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DispalyList