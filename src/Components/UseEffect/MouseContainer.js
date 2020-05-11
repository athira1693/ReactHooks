import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  const toggleDisplay = () => {
    setDisplay(false);
  };
  return (
    <div>
      <button onClick={toggleDisplay}>Toggle</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
