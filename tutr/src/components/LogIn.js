import React, { useState } from 'react';

export const LogInPage = () => {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    return (
        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong">
                            <div class="card-body p-5 text-center">

                                <h3 class="mb-5">Log in</h3>
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
                                <button type="submit" class="btn btn-primary btn-block mb-4"> 
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogInPage;
