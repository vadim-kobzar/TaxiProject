const Car = require('../../models/Employee');

const verifyToken = require('../../../verifyToken');

module.exports = function (app) {
    app.get('/dispatchers', function (req, res) {
        res.json([
            {
                id: 1,
                name: 'asacv',
                email: 'gfhdjk@m.wjd',
                salary: 120000,
                password: 'vjckk8989'
            },
            {
                id: 2,
                name: 'akrkr',
                email: 'gfhdjk@m.d',
                salary: 120000,
                password: 'vjckk80009'
            }

        ]);
    });
    app.get('/dispatcher/:dispatcherId', verifyToken, function (req, res) {

    })

    app.put('/dispatvher/:dispatcehrId', verifyToken, function (res, res) {

        let id = req.params.dispacherId;
        let update = req.bady.dispacher;

        for (let key in update) {
            currentDiaspacher[key] = update[key];
        }
        writeFile(employee, 'dispatcher')
        res.json({
            status: 'ok'
        });
    })

    app.delete('/dispatvher/:dispatcehrId', verifyToken, function (req, res) {
        //request to db for removing car by id
        res.json({
            status: 'ok',
            message: 'employee succesfuly removed'
        });
    });

}