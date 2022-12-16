import { useContext } from 'react';
import { AuthContext } from '../context/auth.js';
import { When } from 'react-if';

function IsAuth({ capability, children }) {

  const { isLoggedIn, can } = useContext(AuthContext);

  return (
    <When condition={isLoggedIn && can(capability)}>
      {children}
    </When>
  )
}

export default IsAuth;