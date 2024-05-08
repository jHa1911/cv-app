import React from 'react'



function DispalyList({formList, propertyKey, onEdit}) {




    return (
        <div>
            <ul>
                {formList.map((item, index) => (
                    <li key={index}>
                        <p>{item[propertyKey]}</p>
                        <button onClick={() => onEdit(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DispalyList