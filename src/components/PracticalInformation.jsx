import React from 'react'

function PracticalInformation() {
    return (
        <form className="form label general-info">
            <label>
                Company Name:
                <input type="text" />
            </label>
            <label>
                Position:
                <input type="text" />
            </label>
            <label>
                Start Date:
                <input type="date" />
            </label>
            <label>
                End Date:
                <input type="date" />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PracticalInformation