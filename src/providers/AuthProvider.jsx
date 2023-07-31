import { useEffect, useState } from "react";
import { createContext } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);

    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('current user', currentUser);
           
        })
        return () => {
            return unsubscribe();
        }
     }, []) 
   

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;