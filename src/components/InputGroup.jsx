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
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
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