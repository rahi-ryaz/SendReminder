const express=require("express");

const bodyParser = require("body-parser");
const {PORT} =require("./config/serverConfig");

const TicketController = require('./controllers/ticket-controller');
//const { sendBasicEmail }= require("./services/email-service");
const jobs =require("./utils/job");

const setupAndStartServer=()=>{

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/v1/tickets', TicketController.create);

app.listen(PORT,()=>{

    console.log(`server started at port ${PORT}`);
    jobs();

    // sendBasicEmail(
    //     'suppport@admin.com',
    //     'eduflixwithrahie@gmail.com',
    //     'This is testing email',
    //     'Hey how are u , I hope u like the support'
    // )

})

}


setupAndStartServer();
