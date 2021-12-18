import { Component, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

function requireAuth(Element: ComponentType<any | string>): any {
  return (props: Component) => {
    if (!localStorage.getItem('token')) {
      return <Navigate to='/' />;
    }

    return <Element {...props} />;
  };
}

export default requireAuth;
