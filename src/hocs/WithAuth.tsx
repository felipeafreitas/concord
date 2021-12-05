import { ComponentType } from 'hoist-non-react-statics/node_modules/@types/react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function WithAuth(Element: ComponentType<any | string>) {
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     navigate('/login')
  //   }
  // }, [navigate])

  return (
    <Element />
  )
}

export default WithAuth
