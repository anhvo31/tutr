import React from 'react';
import logo from './logo.svg';

const HomePage = () => {
    return (
        <header class="main-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 class="app-name">
                Welcome to Tutr!
            </h1>
            <p class="app-description">
                The premier website for connecting students with tutors online.
            </p>
        </header>
    );
};

export default HomePage