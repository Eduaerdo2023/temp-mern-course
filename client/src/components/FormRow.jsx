import React from 'react'

const FormRow = ({ name, type, id, defaultValue, labelText, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className='form-label'>{labelText || name}
      </label>
      <input type={type} id={name} name={name} className='form-input' defaultValue={defaultValue || ''} 
      onChange={onChange}
      />
    </div>
  )
}

export default FormRow