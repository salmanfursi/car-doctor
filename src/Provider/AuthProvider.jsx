import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext =createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
   const [loading,setloading]=useState(true);

   const createUser =(email,password)=>{
      setloading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const signin =(email,password)=>{
      setloading(true)
      return signInWithEmailAndPassword(auth, email, password);
   }
   
   useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser.photoURL
            );
           console.log('current user',currentUser)
           setloading(false)
         });
     
         return () =>{
            return unsubscribe()
         };
     
   },[])

   const authInfo ={
      createUser,signin,user
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;