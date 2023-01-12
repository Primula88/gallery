import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from './firebase.js';
import './index.css';

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div classname="block">
      <div className="ml-52">
        <h3> Register User </h3>
        <input className= "bg-slate-500 border-black text-gray-100"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input className= "bg-slate-500 border-black text-gray-100"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button className="inline-block px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={register}> Create User</button>
      </div>

      <div className="ml-52">
        <h3> Login </h3>
        <input className= "bg-slate-500 border-black text-gray-100"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input className= "bg-slate-500 border-black text-gray-100"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button className="inline-block px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={login}> Login</button>
      </div>

      <h4 className= "ml-52"> User Logged In: </h4>
      {user?.email}

      <button className= "ml-52 inline-block px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Login;
