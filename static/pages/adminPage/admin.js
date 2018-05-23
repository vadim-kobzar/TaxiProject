
let user;
let car;

function User(user) {
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.status = user.status;
    this.password = user.password;
}


function Car(car) {
    this.mark = car.mark;
    this.year = car.year;
    this.number = car.number;
    this.carDriver = car.carDriver
}
$('#header').load('../partials/header.html', function () {

    if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));
        let loginBtn = document.getElementById('login-button');
        loginBtn.classList.add('hide');
        document.getElementById('user-email').innerHTML += user.email;
        document.getElementById('logout-button').classList.remove('hide');
    }
})

function addEmployeeForm() {
    $("#main").load("companySettings/add/addEmployeeForm.html");
}

function manageEmployee() {
    $("#main").load("companySettings/add/manageEmployee.html");
}

function addTaxiForm() {
    $("#main").load("carSettings/add/addTaxiForm.html");
}

function addTaxi() {
    let mark = document.getElementById("mark").value;
    let year = document.getElementById("year").value;
    let number = document.getElementById("number").value;
    let carDriver = document.getElementById("car-driver").value;
    car = new Car({
        mark: mark,
        year: year,
        number: number,
        carDriver: carDriver
    });
    $.ajax({
        type: 'POST',
        data: JSON.stringify(car),
        contentType: 'application/json',
        url: 'http://localhost:3000/addCar',
        headers: {
            'token': localStorage.getItem('token')
        },
        success: function (data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });
}


function addEmployee() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let roleSelect = document.getElementById("role");
    let role = roleSelect.options[roleSelect.selectedIndex].value;
    user = new User({
        name: name,
        email: email,
        phone: phone,
        role: role
    });

    $.ajax({
        type: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        url: 'http://localhost:3000/createUser',
        success: function (data) {

            console.log('success');
            console.log(data);
            return false;
        }
    });

    return false;
}

function createTbale(data) {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let row, cell;
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    table.appendChild(tbody);
    getElementById('table-div').appendChild(table);
}

function showDoshboard() {

}
function showNotif() {

}

let c = {
    cars: [
        {
            "mark": "audi",
            "year": "2000",
            "number": "125456",
            "carDriver": "Select driver"
        },
        {
            "mark": "audi",
            "year": "2000",
            "number": "12AR123",
            "carDriver": "Select driver"
        },
        {
            "mark": "audi",
            "year": "2000",
            "number": "56ER325",
            "carDriver": "Select driver"
        },
        {
            "mark": "audi",
            "year": "2000",
            "number": "45RE65",
            "carDriver": "Select driver"
        },
        {
            "mark": "audi",
            "year": "2000",
            "number": "89ET325",
            "carDriver": "Select driver"
        },
        {
            "mark": "audi",
            "year": "2000",
            "number": "125Po65",
            "carDriver": "Select driver"
        }
    ]
}

let t = document.getElementById("t");
function manageTaxi() {
    var tbl = document.createElement("table");
    console.log(Object.values(c));
    console.log(c[1]);
    var arr = Object.values(c);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < arr[i].length; j++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = arr[i][j];

            console.log(arr[i][j]);
        }
        row.appendChild(cell);
        tbl.appendChild(row);
    }
    t.appendChild(tbl)
}
