
import  mongoose  from "mongoose";
import express from "express";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

//app config
const app=express();
const port= process.env.PORT ||3000;
const pusher = new Pusher({
    appId: "1242198",
    key: "94f615f50aafa92d52eb",
    secret: "2753a583a614d11707b4",
    cluster: "eu",
    useTLS: true
  });



//middleware
app.use(express.json());
app.use(cors());


//DB config
const connectionUrl="mongodb+srv://Roopshree:Roop69025594@cluster0.py3lz.mongodb.net/whatsappDB?retryWrites=true&w=majority";
mongoose.connect(connectionUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
});

const db=mongoose.connection;
db.once("open",function(){
    console.log("DB is connected!");
    const msgCollection=db.collection("messagecontents");
    const changeStream=msgCollection.watch();

    changeStream.on('change',function (change){
        

        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
                
            });
        }else{
            console.log("Error triggering pusher!");
        }

    });
});




//api -routes
app.get("/",function(req,res){
    res.status(200).send("Hello Roop!");
});

app.get("/messages/sync", function(req,res){
    Messages.find(function (err,data){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

app.post("/messages/new", function (req,res){
    const dbMessage=req.body;
    Messages.create(dbMessage, function (err,data){
        if(err)
        res.status(500).send(err);
        else
        res.status(201).send(data);
    });


});


app.listen(port,function (){
    console.log(`Listening on localhost: ${port}`);
});