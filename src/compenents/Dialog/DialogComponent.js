import './DialogComponents.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const COURSE_API_URL = 'http://localhost:8081/home/message'

const dialogs = () => axios.get(COURSE_API_URL)
const DialogComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        dialogs()
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleString(); // Преобразует дату и время в локальный формат
    };

    return (
        <div className="Glavny_block">
        <div className="DialogComponent">
            {messages.map(message => (
                <div key={message.id} className="messagePanel">
                    <div className="messageContent">
                        <div className="messageField">Имя: {message.senderId.firstname}</div>
                        <div className="messageField">Сообщение: {message.message}</div>
                        <div className="messageField">Время: {formatTime(message.timeofSend)}</div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default DialogComponent;
