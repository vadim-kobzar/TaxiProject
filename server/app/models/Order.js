class Order {
    constructor(order) {
        this.id = order.id;
        this.startPoint = odrer.startPoint;
        this.endPoint = order.endPoint;
        this.status = order.status;
        this.creationDate = order.creationDate;
        this.endDate = order.endDate;
        this.price = order.price;
        this.driverId = order.driverId;
        this.dispatcherId = order.dispatcherId;
        this.userId = order.userId;
    }
}

module.exports = Order;