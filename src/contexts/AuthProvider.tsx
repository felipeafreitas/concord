import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { User } from '../types/User';

interface AuthContextType {
  user: any;
  signin: (user: User) => void;
  signout: () => void;
  retrieve: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const signin = async (newUser: User) => {
    try {
      return api.post('/register', newUser);
    } catch (err) {
      throw err;
    }
  };

  const signout = () => {
    setUser({} as User);
    localStorage.clear();
  };

  // TODO: Implement SWR
  const retrieve = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const { data } = await api.get(`/user/${token}`);
        setUser(data.user);
      } catch (err) {
        throw err;
      }
    }
  };

  useEffect(() => {
    if (!!localStorage.getItem('token') && !user) {
      retrieve();
    }
  }, [user]);

  const value = { user, signin, signout, retrieve };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
