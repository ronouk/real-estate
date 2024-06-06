import { createContext, useEffect, useState } from "react";
import Proptypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //setting user in state
    const [user, setUser] = useState(null);

    //create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //log out the user
    const logOut = () =>{
        return signOut(auth);
    }

    //keeping current user in state
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in auth state change", currentUser);
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    })

    //exporting all context
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: Proptypes.node,
}