import { Avatar } from "@material-ui/core";
import React from "react";
import "./SlidebarChat.css";

function SlidebarChat(){
    return <div className="SlidebarChat">
        <Avatar />
        <div className="SlidebarChat_info">
            <h4>
                Room Name
            </h4>
            <p>
                This is the last message.
            </p>

        </div>
    </div>
}

export default SlidebarChat;