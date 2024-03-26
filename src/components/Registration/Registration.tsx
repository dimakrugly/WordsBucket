import React from 'react';

interface Props {
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void,
}
const Registration: React.FC<Props> = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="username">
      Username:
      <input type="text" name="username" />
    </label>
    <label htmlFor="password">
      Password:
      <input type="password" name="password" />
    </label>
    <button type="submit">Register</button>
  </form>
);

export default Registration;
