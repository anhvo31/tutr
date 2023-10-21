import React, { useState } from 'react';

export const LogInPage = () => {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    return (
        <div>
            <input 
                type="text"
                placeholder='Username'
                value={userName} 
                onChange={(e) => {setUserName(e.target.value)}} 
                required 
            />
            <p></p>
            <input 
                type="text"
                placeholder='Password'
                value={password} 
                onChange={(e) => {setPassword(e.target.value)}} 
                required 
            />
            <p></p>
            <button type="submit"> 
                Log In
            </button> 
        </div>
    );
};

export default LogInPage;
