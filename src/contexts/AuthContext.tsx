import { createContext, useContext, ReactNode } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

type AuthContextType = {
  session: Session | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  signIn: (provider?: string, options?: any) => Promise<any>;
  signOut: () => Promise<any>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  status: 'unauthenticated',
  signIn: () => Promise.resolve(null),
  signOut: () => Promise.resolve(null),
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  return (
    <AuthContext.Provider value={{ session, status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
