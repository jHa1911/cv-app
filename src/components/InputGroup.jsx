import React from 'react'

function InputGroup({
    id,
    label,
    type,
    value,
    onChange,
    placeholder,
    required,
}) 

{
    return (
        <div className='mb-3'>
            <label htmlFor={id} className='form-label'>{label}</label>
            <br />
            <input
                id={id}
                className='form-control'
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default InputGroup