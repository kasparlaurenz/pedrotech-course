import React from 'react';
import ChangeProfile from '../components/ChangeProfile';

type ProfileProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};
const Profile = ({ username, setUsername }: ProfileProps) => {
  return (
    <div>
      <h1>Profile of {username}</h1>
      <ChangeProfile setUsername={setUsername} />
    </div>
  );
};

export default Profile;
