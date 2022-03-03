import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://www.meme-arsenal.com/memes/74a9592e66a76c818ed95c1216487fa7.jpg',
    name: 'Elena',
    message: 'Hey! How are you?',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <hr/>
        </div>
    )
}

export default HW1
