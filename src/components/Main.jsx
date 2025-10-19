import React from 'react';
import Weather from './Weather';
import Header from './header';

export default function MainPage() {
    return (
        <>
        <Header />
        <h1 style={{textAlign: 'center'}}>Log in to see other data</h1>
        <Weather />
        </>
    )
}