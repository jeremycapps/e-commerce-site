import React from 'react';

import "./custom-button.styles.scss";

const CustomButton = ({ children, customClassName, ...otherProps }) => (
    <button className={`${customClassName} custom-button`} {...otherProps}>
      {children}
    </button>
  )

export default CustomButton;
