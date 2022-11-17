import React, { createContext, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import { useState } from 'react';


export const OuthContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [update, setUpdate] = useState(true);
    // console.log(auth.currentUser)

    const googleSignIn = googleProvider => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const contextData = { 
        googleSignIn, 
        user, 
        setUser, 
        logOut, 
        createUserWithPassword, 
        signInWithPassword,
        updateUser,
        loading
    };
    return (
        <OuthContext.Provider value={contextData}>
            {children}
        </OuthContext.Provider>
    );
};

export default AuthContext;