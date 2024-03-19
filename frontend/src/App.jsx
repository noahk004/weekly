import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import React from 'react'
import './App.css'

import Home from './home/Home.jsx'
import Interface from './interface/Interface.jsx'
import SignIn from './sign-in/SignIn.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Interface />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}