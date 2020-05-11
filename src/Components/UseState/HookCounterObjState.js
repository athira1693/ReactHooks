import React, { useState } from 'react';

function HookCounterObjState() {
  const [name, setName] = useState({ fname: '', lname: '' });

  return (
    <div>
      <input
        type='text'
        value={name.fname}
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <input
        type='text'
        value={name.lname}
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />
      <br />
      <h2>First Name is: {name.fname}</h2>
      <h2>Last Name is:{name.lname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterObjState;
