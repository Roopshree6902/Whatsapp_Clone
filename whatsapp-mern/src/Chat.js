import { IconButton,Avatar } from "@material-ui/core";
import { AttachFile, MoreVert,  SearchOutlined } from "@material-ui/icons";
import  InsertEmoticonIcon  from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from "react";
import axios from "./axios";

import "./Chat.css";

function Chat({messages}){

    const [input, setInput]=useState("");

    const sendMessage= async(event)=>{
        event.preventDefault();

        await axios.post("/messages/new",{
            message:input,
            name:"Roop",
            timestamp:"just Now",
            received:false


        });
        setInput("");
    };
    return <div className="chat">
        <div className="chatHeader">
            <Avatar />
            <div className="chatHeader_info">
                <h3>Room Name</h3>
                <p>last seen at...</p>
            </div>
            <div className="chatHeaderRight">
            <IconButton>
            <SearchOutlined />
            </IconButton>
            <IconButton>
            <AttachFile/>
            </IconButton>
            <IconButton>
            <MoreVert />
            </IconButton>
            </div>

        </div>

        <div className="chatBody">
            {messages.map(message =>(
                <p className={`chat_message ${!message.received && "chat_receiver"}`}>
                <span className="chat_name">{message.name}</span>
                {message.message}
                <span className="chat_timestamp">
                    {message.timestamp}
                </span>
            </p>

            ))}
            

            
        </div>

        <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
}

export default Chat;