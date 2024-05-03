import React from 'react'

function EducationalInformation() {
    return (
        <form className="form label general-info">
            <label>
                School:
                <input type="text" />
            </label>
            <label>
                Degree:
                <input type="text" />
            </label>
            <label>
                Graduation Year:
                <input type="number" />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EducationalInformation