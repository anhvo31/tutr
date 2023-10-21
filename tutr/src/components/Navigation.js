import React from 'react';

const Navigation = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/log-in">Log In</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/sign-up">Sign Up</a>
            </li>
        </ul>
    );
};

export default Navigation