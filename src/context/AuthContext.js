import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const userCall = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            // console.log(user)
        })
        return userCall();
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
