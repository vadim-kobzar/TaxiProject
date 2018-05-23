const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('static'));

require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});


/* 
var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "Your Gmail ID",
        pass: "Gmail Password"
    }
});
var rand, mailOptions, host, link;

app.get('/', function (req, res) {
    res.sendfile('index.html');
});
app.get('/send', function (req, res) {
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?id=" + rand;
    mailOptions = {
        to: req.query.to,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.get('/verify', function (req, res) {
    console.log(req.protocol + ":/" + req.get('host'));
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        console.log("Domain is matched. Information is from Authentic email");
        if (req.query.id == rand) {
            console.log("email is verified");
            res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
        }
        else {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else {
        res.end("<h1>Request is from unknown source");
    }
});

app.listen(3000, function () {
    console.log("Express Started on Port 3000");
});
*/

/*
var fs = require('fs');

var obj = {
   table: []
};

fs.exists('myjsonfile.json', function(exists){
    if(exists){
        console.log("yes file exists");
        fs.readFile('myjsonfile.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj);
        fs.writeFile('myjsonfile.json', json);
        }});
    } else {
        console.log("file not exists")
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj);
        fs.writeFile('myjsonfile.json', json);
        }
    }); */

/*let exp = function () {
    rerturn {
        get: function get(x, hhh) {
            
            
            .....ret hhh(hhh, nnn)
        }
    };
}

let x = exp();
x.get(fff, )*/
/*

const fs = require('fs'); esi requirea anum

let rawdata = fs.readFileSync('student.json'); es json filen karduma
let student = JSON.parse(rawdata); parsa anum 
console.log(student); u tpuma


*/

