import React, { Children } from 'react';
import Button from './components/button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button 
        onClick={handleClick} 
        className="my-custom-class" 
      >
        Click me
        <p>icon</p>
      </Button>

    </div>
  );
};

export default App;