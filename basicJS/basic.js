let num = 0;

function tickUp() {
    num++;
    document.getElementById("counter").innerHTML = num;
}

function tickDown() {
    num--;
    document.getElementById("counter").innerHTML = num;
}

function runForLoop() {
    for (i= 0; i <= num; i++) {
        let next = document.createElement('span');
        next.textContent = i + ' ';
        document.getElementById("forLoopResult").appendChild(next);
    }
}

function showOddNumbers() {
    for (i= 0; i <= num; i++) {
        if (i % 2 != 0) {
            let odd = document.createElement('span');
            odd.textContent = i + ' ';
            document.getElementById("oddNumberResult").appendChild(odd);
        }
    }
}

function addMultiplesToArray() {
    const arr = [];
    for (i = num; i >= 0; i--) {
        let tmp = i;
        if (i % 5 == 0) {
            arr.push(tmp);
        }
    }
    console.log(arr);
}

function printCarObject() {
    const car = {};
    car.cType = document.getElementById("carType");
    car.cMPG = document.getElementById("carMPG");
    car.cColor = document.getElementById("carColor");
    console.log(car);
}

function loadCar(choice) {
    const c = () => {
        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            if (choice == 1) {
                document.getElementById("carObject1").innerHTML = printCarObject;
            } else if (choice == 2) {
                document.getElementById("carObject2").innerHTML = data;
            } else if (choice == 3) {
                document.getElementById("carObject3").innerHTML = data;
            }
            
        });
    }
}

function changeColor(select) {
    let change = document.getElementById("styleParagraph");
    if (select == 1) {
        change.style.color = "red";
    } else if (select == 2) {
        change.style.color = "green";
    } else if (select == 3) {
        change.style.color = "blue";
    }
}
