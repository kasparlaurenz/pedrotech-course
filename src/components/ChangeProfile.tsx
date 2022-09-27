import React, { useState } from 'react';

type ChangeProfileProps = {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

const ChangeProfile = ({ setUsername }: ChangeProfileProps) => {
  const [newUsername, setNewUsername] = useState<string>('');

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
