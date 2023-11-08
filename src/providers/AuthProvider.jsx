import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [isLoading, setIsLoading] = useState(true);

  // Create new user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (username, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoUrl,
    });
  };

  // User login
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const xyz = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setIsLoading(false);
      // console.log(currentUser);
      // Give token to user
      const loggedUser = { email: userEmail };
      if (currentUser) {
        axios
          .post(
            "https://library-management-server-five.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("from token", res.data);
          });
      } else {
        axios
          .post(
            "https://library-management-server-five.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      return xyz();
    };
  }, []);

  const values = {
    createUser,
    updateUser,
    login,
    googleLogin,
    user,
    isLoading,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
