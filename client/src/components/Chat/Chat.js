import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import ScrolltoBottom from 'react-scroll-to-bottom';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    // const ENDPOINT = 'https://react-chat-app1-97c250744018.herokuapp.com/';
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, () => {
            
        });
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);

    return (
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center vw-100 vh-100">
            <div className="card h-75 w-75 p-2 d-flex flex-column">
                <InfoBar room={room}/>
                <div className="flex-grow-1 overflow-auto mb-3">
                    <Messages messages={messages} name={name} />
                </div>
                <Input className="p-4" message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
};

export default Chat;