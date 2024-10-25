import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: {user, text}, name }) => {
    let isSentByCurrentUser = user === name.trim().toLowerCase;
    
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="d-flex justify-content-end my-2">
                    <div>
                        <p className="text-muted mb-1">{trimmedName}</p>
                        <div className="bg-info text-white rounded p-2">
                            {ReactEmoji.emojify(text)}
                        </div>
                    </div>
                </div>
            )
            : (
                <div className="d-flex justify-content-start my-2">
                    <div>
                        <p className="text-muted mb-1">{user}</p>
                        <div className="bg-light text-dark rounded p-2">
                            {ReactEmoji.emojify(text)}
                        </div>
                    </div>
                </div>
            )
    )
};

export default Message;