import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { User } from '../types/User';

interface AuthContextType {
  user: User;
  signin: (user: User) => void;
  signout: () => void;
  retrieve: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as User);

  const signin = async (newUser: User) => {
    try {
      setUser(newUser);
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

    try {
      const user = await api.get<User>('/user', token);
      setUser(user as User);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (!!localStorage.getItem('token') && !user) {
      retrieve();
    }
  }, []);

  const value = { user, signin, signout, retrieve };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
