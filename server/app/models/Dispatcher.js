const Employee = require('../../models/Employee');


class Dispatcher extends Employee {
    constructor(dispatcher) {
        super(dispatcher);
        this.passwords = dispatcher.password;
    }
}