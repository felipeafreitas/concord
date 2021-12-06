import { createContext, useState } from 'react';
import api from '../api';
import { User } from '../types/User';

interface AuthContextType {
  user: User;
  signin: (user: User) => void;
  signout: () => void;
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

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
