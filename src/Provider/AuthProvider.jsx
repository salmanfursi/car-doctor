import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // console.log('user:',user);

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const signin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = (auth)=>{
      return signOut(auth)
   }


   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false)

      });

      return () => {
         return unsubscribe()
      };

   }, [])

   const authInfo = {
      createUser, signin, loading, user,logOut,auth
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;