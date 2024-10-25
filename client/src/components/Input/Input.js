import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="d-flex mt-3" onSubmit={(e) => e.preventDefault()}>
        <input
            type="text" 
            className="form-control me-2"
            placeholder="Type a message..."
            value={message} 
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="btn btn-primary" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
);

export default Input;