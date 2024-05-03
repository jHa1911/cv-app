import React from 'react'

function GeneralInformation() {
    return (
        <form className="form label general-info">
            <label>
                Name:
                <input type="text" />
            </label>
            <label>
                Email:
                <input type="email" />
            </label>
            <label>
                Phone Number:
                <input type="number" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}


export default GeneralInformation