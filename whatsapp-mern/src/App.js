
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Slidebar from './slidebar';
import Pusher from 'pusher-js';
import axios from './axios';
// import { func } from 'prop-types';

function App() {

  const [messages,setMessages]=useState([]);

  useEffect(function(){
    axios.get("/messages/sync").then(response=>{
      
      setMessages(response.data);
    });
  },[]);

  useEffect(function(){
    const pusher = new Pusher('94f615f50aafa92d52eb', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]); 

  

  console.log(messages);

  return (
    <div className="app">
    <div className="app_body">
    <Slidebar />
      <Chat messages={messages}/>
    </div>
      
    </div>
  );
}

export default App;
