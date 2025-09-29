import React, { useState, useEffect } from "react";
import { AuthContext } from "./authcontext/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    if(loading){
        return <div>Loading...</div>;
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        setLoading(true);
        try {
            await auth.signOut();
            setUser(null); // set user state to null after successful sign out
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        loading,
        createUser,
        loginUser,
        user,
        logout
    };

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
