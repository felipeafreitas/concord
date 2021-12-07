import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

  if (!localStorage.getItem('token')) {
    return <Navigate to='/' state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
