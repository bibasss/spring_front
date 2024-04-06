import './App.css';
import React, { useState } from 'react';
import DialogComponent from './compenents/Dialog/DialogComponent';
import Leviblock from "./compenents/leviblock/Leviblock";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Profil from "./compenents/profil/Profil";
import Friend from "./compenents/friends/Friend";
import RegisterForm from "./compenents/Autentification/RegisterForm";
import {LoginForm} from "./compenents/Autentification/LoginForm";
import News from "./compenents/News/News";

const App = () => {
    const [showLeviblock, setShowLeviblock] = useState(true);

    return (
        <BrowserRouter>

            {showLeviblock && <Leviblock />}

            <Routes>
                <Route path="/" element={<Profil />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/dialog" element={<DialogComponent />} />
                <Route path="/friends" element={<Friend />} />
                <Route path="/news" element={<News />} />
                <Route path="/register"  element={<AuthWrapper component={RegisterForm} setShowLeviblock={setShowLeviblock} />} />
                <Route path="/login" element={<AuthWrapper component={LoginForm} setShowLeviblock={setShowLeviblock} />}/>
            </Routes>

        </BrowserRouter>
    );
};

const AuthWrapper = ({ component: Component, setShowLeviblock, ...rest }) => {
    React.useEffect(() => {
        setShowLeviblock(false);
        return () => setShowLeviblock(true);
    }, [setShowLeviblock]);

    return <Component {...rest} />;
};






export default App;
