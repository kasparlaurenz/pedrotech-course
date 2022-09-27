import React, { useState, useContext } from 'react';
import { AppContext, AppContextTypes } from '../App';

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState<string>('');
  const { setUsername } = useContext(AppContext) as AppContextTypes;

  return (
    <div>
      {''}
      <input
        type="text"
        placeholder="Username"
        onChange={e => setNewUsername(e.target.value)}
      />
      <button onClick={() => setUsername(newUsername)}>Change username</button>
    </div>
  );
};

export default ChangeProfile;
