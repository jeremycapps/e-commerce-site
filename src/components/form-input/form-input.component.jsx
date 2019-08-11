import React from 'react';

import FormValidation from "../form-validation/form-validation.component";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, isValid = true, errorMessage = null, successMessage = null, ...otherProps }) => (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {
        label ? 
        (<label className={`${otherProps.value.length ? "shrink" : "" } form-input-label`}>
          {label}
        </label>) :
        null
      }
      {
        otherProps.value.length ? 
        (<FormValidation isValid={isValid} errorMessage={errorMessage} successMessage={successMessage}/>)
        : null
      }
    </div>
  )

export default FormInput;