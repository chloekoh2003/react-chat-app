import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="d-flex bg-dark justify-content-center align-items-center vh-100">
            <div className="p-5 bg-light rounded text-center">
                <h1 className="mb-4">Join</h1>
                <div className="mb-3">
                    <input placeholder="Name" className="form-control" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input placeholder="Room" className="form-control" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-primary w-100" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;