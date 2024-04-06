import './friends.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";


const COURSE_API_URL = 'http://localhost:8081/home/users'
const dialogs = () => axios.get(COURSE_API_URL)
const DialogComponent = () => {
    const [message, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dialogs()
            .then(response => {
                setMessages(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    if (loading) {
        return <div className = "Glavny_block" >Loading...</div>;
    }

    if(message.id === 1){
        console.log("Okay")
    }
    return (
        <>
            <div className = "Glavny_block">
                {message.map(m => (
                    <tr key={m.id}>
                        <td>{m.lastname}</td>
                        <td>{m.firstname}</td>
                    </tr>
                ))}
                {

                }
            </div>
        </>
    );
};

export default DialogComponent;