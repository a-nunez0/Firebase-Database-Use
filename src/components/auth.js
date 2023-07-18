import './auth.css';
import { useState } from 'react';
import { auth } from '../firethings/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const signIn = async() =>{
        await createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <div className='sign'>
        <form className='register'>

            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}> SignUp </button>

        </form>
        </div>
    );
};