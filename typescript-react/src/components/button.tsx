import React, {PropsWithChildren} from 'react';

// Define the type for the button's props
interface ButtonProps extends PropsWithChildren {
  onClick: () => void; // Function to call when button is clicked
  disabled?: boolean; // Optional prop to disable the button
  className?: string; // Optional prop for custom CSS classes
}

// Functional component with typed props
const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, className = '', children }) => {
  return ( 
    <button
      onClick={onClick}
      disabled={disabled}
    >
        {children}
    </button>
  );
};

export default Button;