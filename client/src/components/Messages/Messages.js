import React from 'react';

import ScrolltoBottom from 'react-scroll-to-bottom';

import Message from './Message/Message'

const Messages = ({ messages, name }) => (
    <ScrolltoBottom className="h-100 overflow-auto">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrolltoBottom>
);

export default Messages;