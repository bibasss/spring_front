import './News.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const COURSE_API_URL = 'http://localhost:8081/home/userspost'
const dialogs = () => axios.get(COURSE_API_URL)
const News = () => {
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
                        <br/><div className="post_block">

                        <td>category: {m.category}</td><br/>
                        <td>title: {m.title}</td><br/>
                        <td>content: {m.content}</td><br/>

                        <td><img className="post_img" src={m.image}/></td><br/>
                        </div>
                    </tr>
                ))}
                {

                }
            </div>
        </>
    );
};

export default News;
