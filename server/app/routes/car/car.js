const Car = require('../../models/Car');

const verifyToken = require('../../../verifyToken');

module.exports = function (app) {
    app.get('/cars', function (req, res) {
        // do db call get all cars and return as JSON
        res.json([
            {
                id: 1,
                number: '13oo013',
                color: 'blue',
                model: 'C 240',
                brand: 'Mercedes-Benz'
            },
            {
                id: 2,
                number: '35uu047',
                color: 'red',
                model: 'Vectra 20',
                brand: 'Opel'
            },
            {
                id: 3,
                number: '35ss111',
                color: 'gray',
                model: 'TT',
                brand: 'Audi'
            }
        ]);
    });

    app.get('/car/:carId', function (req, res) {
        // do call to db get car detail return as a json
        let cars = [
            {
                id: 1,
                number: '13oo013',
                color: 'blue',
                model: 'C 240',
                brand: 'Mercedes-Benz'
            },
            {
                id: 2,
                number: '35uu047',
                color: 'red',
                model: 'Vectra 20',
                brand: 'Opel',
                carDriver: '2'
            },
            {
                id: 3,
                number: '35ss111',
                color: 'gray',
                model: 'TT',
                brand: 'Audi',
                carDriver: '1'
            }
        ];
        let currentCar = cars[req.params.carId - 1];
        res.json(currentCar);
    });

    //add car   
    app.post('/car', verifyToken, function (req, res) {
        let car = req.body.car;
        car = new Car({
            number: car.number,
            color: car.color,
            model: car.model,
            brand: car.brand,
            carDriver: car.carDriver
        });
        writeFile(car, 'cars')
        res.send(req.body);
    });

    app.put('/car/:carId', verifyToken, function (req, res) {
        let id = req.params.carId;
        let update = req.body.car;
        // do call to db get car by id, replace modified properties and stor to db
        let currentCar = {
            id: 3,
            number: '35ss111',
            color: 'gray',
            model: 'TT',
            brand: 'Audi',
            carDriver: '1'
        };
        for (let key in update) {
            currentCar[key] = update[key];
        }
        writeFile(car, 'cars')
        res.json({
            status: 'ok'
        });
    });

    app.delete('/car/:carId', verifyToken, function (req, res) {
        //request to db for removing car by id
        res.json({
            status: 'ok',
            message: 'car succesfuly removed'
        });
    });
};