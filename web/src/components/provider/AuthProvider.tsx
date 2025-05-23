import { createContext, useContext, useState, ReactNode } from 'react';
import { fetchNui } from '../../utils/fetchNui';
import { User } from '../../types';
import { LoginResponse } from 'src/types/auth';

type AuthContextType = {
  user: User | null;
  loginError: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function login(username: string, password: string) {
    setLoading(true);

    fetchNui<LoginResponse>('fleecanow:login', {username, password}, {
      success: true,
      user: {
        uuid: '17fecfcd-c694-41a3-a647-118ccf7c6bed',
        username: 'maximusprime',
        displayName: 'Maximus Prime',
        avatar: undefined,
      }
    }).then(data => {
      if (data.success) {
        setUser(data.user);
      }
      else {
        setUser(null);
        setLoginError(data.error);
      }
      setLoading(false);
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginError, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
