import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logPosition = (e) => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logPosition);

    return () => {
      console.log('Component unmounting');
      window.removeEventListener('mousemove', logPosition);
    };
  }, []);
  return (
    <div>
      X position: {x}
      <br />Y position: {y}
    </div>
  );
}

export default HookMouse;
