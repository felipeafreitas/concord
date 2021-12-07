import { AxiosResponse } from 'axios';
import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { User } from '../types/User';

interface AuthContextType {
  user: AxiosResponse<User>;
  signin: (user: User) => void;
  signout: () => void;
  retrieve: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AxiosResponse<User>>(
    {} as AxiosResponse<User>
  );

  const signin = async (newUser: User) => {
    try {
      return api.post('/register', newUser);
    } catch (err) {
      throw err;
    }
  };

  const signout = () => {
    localStorage.clear();
  };

  const retrieve = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const user = await api.get<User>(`/user/${token}`);
        setUser(user);
      } catch (err) {
        throw err;
      }
    }
  };

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      retrieve();
    }
  }, []);

  const value = { user, signin, signout, retrieve };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
