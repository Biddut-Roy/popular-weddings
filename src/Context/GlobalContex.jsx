import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase.init";
import PropTypes from 'prop-types';

export const globalContext = createContext(null);

const GlobalContex = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = ()=>{
    return signInWithPopup( auth , provider )
  }

  const logOut = () => {
    return signOut(auth);
  };

  const authinfo = { user, signUp, signIn , logOut ,signInGoogle };

  return (
    <globalContext.Provider value={authinfo}>
      {children}
    </globalContext.Provider>
  );
};

GlobalContex.propTypes = {
  children: PropTypes.node
};

export default GlobalContex;
