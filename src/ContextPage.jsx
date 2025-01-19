import axios from 'axios';
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { auth, db } from '../FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ContextPage = createContext();

export const ContextPageProvider = ({ children }) => {
  const [log, setLog] = useState(false);
  const [user,setUser] = useState(null);
  const apiUrl = "http://localhost:3001";

  const fetchUserById = async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data())
      } else {
        console.log("No such document!");
        setUser(null)
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fetchUserById(currentUser.uid); // User is logged in
      } else {
        setUser(null); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return (
    <ContextPage.Provider value={{apiUrl,user,setUser}}>
      {children}
    </ContextPage.Provider>   
  ); 
};
  
export const useMyContext = () => {
  return useContext(ContextPage); 
};
