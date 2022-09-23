import type { FC } from 'react';

interface UserProps {
  id: number;
  age: number;
  name: string;
}
const User: FC<UserProps> = ({ id, age, name }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <span>{age}</span>
    </div>
  );
};

export default User;
