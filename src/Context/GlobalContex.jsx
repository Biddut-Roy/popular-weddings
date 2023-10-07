import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import PropTypes from 'prop-types';



export const globalContext = createContext(null);

const GlobalContex = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loder , setLoder] = useState(true);
  const provider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = ()=>{
    setLoder(true)
    return signInWithPopup( auth , provider )
  }

  const logOut = () => {
    setLoder(true)
    return signOut(auth);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
          setUser(currentUser)
          setLoder(false)
      } else {
        // User is signed out
    // ..
      }
    });
    return()=>{
      unsubscribe();
    }
  },[user])

  const authinfo = { user, signUp, signIn , logOut ,signInGoogle , loder };

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
