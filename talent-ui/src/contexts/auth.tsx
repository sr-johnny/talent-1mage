import React, { createContext, useState } from 'react'
import { authLogin } from '../services/auth.login'

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await authLogin();

    setUser(response.user); 
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
