import React from 'react';

import "./form-validation.styles.scss";

const FormValidation = ({ isValid, errorMessage, successMessage = null }) => (
      <span className={`${isValid ? "success" : "error"} message`}>
        {isValid ? successMessage : errorMessage}
      </span>
  )

export default FormValidation;
