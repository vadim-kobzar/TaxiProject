const Employee = require('../../models/Employee');

class Driver extends Employee {
    constructor(driver) {
        super(driver);
        this.carId = driver.carId;
    }
}