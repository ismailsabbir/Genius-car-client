import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init'
export const Authcontext=createContext();
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const Usercontex = ({children}) => {
    const[users,setuser]=useState({});
    const[loading,setloading]=useState(true);
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginuser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signupwithgoogle=()=>{
        return signInWithPopup(auth,provider);
    }
    const logoutuser=()=>{
        localStorage.removeItem('genius_token')
        return signOut(auth);
    }
    const updateusername=(name)=>{
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then((data)=>{console.log(data)})
        .catch(error=>console.error(error))
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            setloading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authinfo={users,createuser,loginuser,logoutuser,signupwithgoogle,loading,updateusername};
    return (
<Authcontext.Provider value={authinfo}>
    {children}
</Authcontext.Provider>
    );
};

export default Usercontex;