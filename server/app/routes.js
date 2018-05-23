const fs = require('fs');
const nodeMailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const config = require('../config');
const verifyToken = require('../verifyToken');

const fileName = '../db.json';

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'taxitestproject@gmail.com',
        pass: 'taxitaxi'
    }
});

let employee, car;

function Employee(employee) {
    this.name = employee.name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.role = employee.role;
    this.pass = employee.pass
}

function Car(car) {
    this.mark = car.mark;
    this.year = car.year;
    this.number = car.number;
    this.carDriver = car.carDriver
}

module.exports = function (app) {
    app.get('/', function (request, response) {
        response.sendFile('./static/index.html');
    });

    app.post('/login', function (req, res) {
        let email = req.body.email;
        let pass = req.body.password;
        fs.readFile(fileName, function (err, data) {
            if (err) throw new Error(err);
            let users = JSON.parse(data).users;
            let user = getUser(users, email, pass);
            console.log(user);
            let token = jwt.sign({ id: user.email }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.json({
                status: 'ok',
                user: user,
                token: token
            });
        });
    });
    app.post('/createUser', function (req, res) {
        let email = req.body.email;
        let name = req.body.name;
        let phone = req.body.phone;
        let role = req.body.role;
        employee = new Employee({
            name: name,
            email: email,
            phone: phone,
            role: role,
            pass: ""
        });

        writeFile(employee, 'users')

        let link = 'http://' + req.get('host') + '/static/pages/adminPage/verify.html?id=' + Math.floor((Math.random() * 100) + 54) + '&email=' + email;

        let mailOptions = {
            from: 'Taxi', // sender address
            to: email, // list of receivers
            subject: 'Email confirm', // Subject line
            html: 'Hello,<br> Please Click on the link to verify your email.<br><a href=' + link + '>Click here to verify</a>'
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.log(err);
                res.json('error');
            } else {
                console.log("Message sent: " + res.message);
                res.json('ok');
            }
        });
    });
    app.post('/addCar', verifyToken, function (req, res) {
        console.log(req.userId);
        let mark = req.body.mark;
        let year = req.body.year;
        let number = req.body.number;
        console.log(number);
        let carDriver = req.body.carDriver
        car = new Car({
            mark: mark,
            year: year,
            number: number,
            carDriver: carDriver
        });

        writeFile(car, 'cars')
        res.send(req.body);
    });

}

function getUser(users, email, pass) {
    if (!users || !Array.isArray(users) || !email || !pass) return;
    return users.find(user => user.email === email && user.password === +pass);
}
function writeFile(item, tableName) {
    let fs = require('fs');
    fs.readFile(fileName, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            obj[tableName].push(item);
            let json = JSON.stringify(obj);
            fs.writeFile(fileName, json);
        }
    });
}

// writeFile(new Employee({
//     name: 'Arsen',
//     email: 'blabla@m.m',
//     phone: '+37477340477',
//     role: 'dispatcher',
//     pass: ''
// }), 'users');