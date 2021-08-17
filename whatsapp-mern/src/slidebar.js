import React from "react";
import "./Slidebar.css" ;
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SlidebarChat  from "./SidebarChat";
function Slidebar(){
return <div className="sidebar">
        
    <div className="slidebar_header">
        <Avatar  src="https://avatars.githubusercontent.com/u/70578434?s=400&u=b3ed6f575be39e75d8f51ad3460dd9ed71dd5d21&v=4" />

        <div className="slidebar_headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>

            <IconButton>
            <ChatIcon />
            </IconButton>

            <IconButton>
            <MoreVertIcon />
            </IconButton>
        </div>
           
    </div>

    <div className="slidebar_search">
        <div className="slidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or Start new chat" type="text" />
            
        </div>

    </div>

    
    <div className="slidebar_chats">
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
        
        

        
    </div>
        

    

</div>
}


export default Slidebar;