import { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('access');
    return token ? jwtDecode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) 
    {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();
      if (!isExpired) {
        axios.get('/profile/')
          .then(res => setUser(res.data))
          .catch(() => logoutUser());
      } 
      else {
        logoutUser();
        }
    }
    }, []);


  const loginUser = (token) => {
    localStorage.setItem('access', token);
    setUser(jwtDecode(token));
  };

  const logoutUser = () => {
    localStorage.removeItem('access');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
