
//to check empty input
function isEmpty() {
    let num = document.getElementById('number').value;
    if (num === "" || num <= 0) { //to check empty
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter  numbers.'
        })
        return true;
    }
    return false;
}

//writing function for reset input field
function reset() {
    document.getElementById('number').value = "";
}
// js for the fizzbuzz part
function printFizzBuzz() {
    var output = document.getElementById('output');
    var msg = document.getElementById('msg');
    var count = document.getElementById("count");
    msg.innerHTML = "";
    output.innerHTML = "";
    count.innerHTML = "";
    let fizz = 0, buzz = 0, fizzbuzz = 0, numberCount = 0;  // using for count
    var num = document.getElementById('number').value;
    //writing some edge cases  to check empty or negative number 
    if (isEmpty()) {
        return isEmpty();
    } else {

        msg.innerHTML = "FizzBuzz from <b> 1 </b> to  <b>" + num + "</b>";
        // console.log(num);
        for (var i = 1; i <= num; i++) {
            if (i % 15 == 0) {
                // console.log("FizzBuzz");
                output.innerHTML += ` <span class="op1  text-wrap">${"FizzBuzz"}</span>`;
                fizzbuzz++;
            } else if (i % 5 == 0) {
                // console.log(" Buzz ");
                output.innerHTML += ` <span class="op2  text-wrap">${"Buzz"} </span>`;
                buzz++;

            } else if (i % 3 == 0) {
                // console.log("Fizz");
                output.innerHTML += ` <span class="op3  text-wrap">${"Fizz"} </span>`;
                fizz++;

            } else {
                numberCount++;
                // console.log(i);
                output.innerHTML += ` <span class="op4  text-wrap"> ${i} </span>`;

            }
        }
        //i am using literals
        count.innerHTML = `Total Fizz :<b> ${fizz}</b> , Total Buzz : <b> ${buzz}</b> ,Total FizzBuzz : <b> ${fizzbuzz}</b> , Total Numbers : <b> ${numberCount}</b> `;
        reset();
    }
}

//script for the factorial 
function calculateFactorial(num) {

    if (num == 0 || num == 1) {
        return 1;
    }
    return num * calculateFactorial(num - 1);
}

function getFact() {
    var num = document.getElementById("number").value;
    // console.log(num);
    //writing some edge cases  to check empty or negative number 
    if (isEmpty()) {
        return isEmpty();
    } else {
        const result = calculateFactorial(num);
        document.getElementById("output").innerHTML = "Factorial of " + num + " is : " + result;
        document.getElementById("output").innerHTML = `Factorial of ${num} is  <span class="finalans"> ${result} </span>`;
        reset();
    }
}

//wrtring gcd script

function gcd(a, b) {
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);
}

function getGCD() {
    if (isEmpty()) {
        return true;
    } else {
        var num = document.getElementById("number").value; //this will return value as string
        num = num.trim(); //removing white spaces from start and end
        num = num.split(" ").map(Number); //now sperate string when space seen and parse it into integer(Number)
        // console.log(typeof(num));  //num is object array
        num.sort(); //sort the array if user enter in unsorted way
        var hcf = 0;
        for (var i = 0; i < num.length; i++) {
            hcf = gcd(hcf, num[i]);
            // console.log("hcf "+hcf+" num "+num[i]);

            if (hcf === 1) {
                // console.log("If consloe"+hcf);
                document.getElementById("output").innerHTML = `GCD of ${num} is : <span class="finalans">${1}</span>`;
                reset();
                return;
            }
        }
        // console.log("exit loop "+hcf);
        document.getElementById("output").innerHTML = `GCD of ${num} is : <span class="finalans">${hcf}</span>`;
        reset();
        return;
    }
}


//writing js for the prime factor 
function getPrime() {
    if (isEmpty()) {
        return isEmpty();
    } else {

        let n = document.getElementById("number").value;
        // console.log(n);
        let output = document.getElementById("output");
        output.innerHTML = "";
        output.innerHTML += "Prime factor of " + n + " is   ";
        // printing the number of 2's which divides the n
        while (n % 2 == 0) {
            output.innerHTML += `<span class="finalans"> ${2}, </span>`;
            n = n / 2;
        }
        //now checking if n is become odd  
        for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
            while (n % i == 0) {
                output.innerHTML += `<span class="finalans"> ${i}, </span>`;
                n = n / i;
            }
        }
        //if n is  a prime  number greater than 2
        if (n > 2) {
            output.innerHTML += `<span class="finalans"> ${n}, </span>`;
        }
        reset();
    }
}

//to get n natural number sum
function naturalSum() {
    if (isEmpty()) {
        return isEmpty();
    } else {
        var n = Number(document.getElementById('number').value);
        const sum = n * (n + 1) / 2;
        // console.log(sum+" "+n);
        document.getElementById('output').innerHTML = `Sum of 1 to ${n}  is <span class="finalans">${sum}</span>`;
        reset();
    }
}

function getSquare() {
    let num = document.getElementById('number').value;
    let output = document.getElementById('output');
    output.innerHTML = "";
    if (isEmpty()) {
        return isEmpty();
    } else {
        output.innerHTML = `Square of ${num} is <span class="finalans">${num * num} </span>`;
        reset();
    }

}

function getSqrt() {
    let num = document.getElementById('number').value;
    let output = document.getElementById('output');
    if (isEmpty()) {
        return isEmpty();
    } else {
        // toFixed method precise the solutionn upto 4 decimal place
        output.innerHTML = `Square root of ${num} <span class="finalans"> ${Math.sqrt(num).toFixed(5)}</span>`
        reset();
    }
}

function power(a, b) {
    if (b == 1) {
        return a;
    }
    return a * power(a, b - 1);
}

function getPower() {
    let num = document.getElementById('number').value;
    let p = document.getElementById('power').value;
    let output = document.getElementById('output');
    if (isEmpty()) {
        return isEmpty();
    } else {
        output.innerHTML = `${num} to the power ${p} is <span class="finalans">${power(num, p)} </span>`
        document.getElementById('power').value = ""; //for reset  power input
        reset();

    }
}


function weightConverter() {
    let select = document.getElementById('selectUnit');
    var option = select.options[select.selectedIndex].value;
    if (option === "kg") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v = e.target.value;
            document.getElementById('output').innerHTML = `<span >Kilogram : ${v}</span> <br> <span class="op3" >Gram : ${v * 1000}</span> <br> <span class="op4">Pounds : ${(v * 2.2046).toFixed(4)}</span> <br> <span class="op2">Ounces : ${(v * 35.274).toFixed(4)}</span>`;
        })

    }
    else if (option === "grams") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v = e.target.value;
            document.getElementById('output').innerHTML = `<span >Grams : ${v}</span> <br> <span class="op3" >Kilogram : ${(v / 1000).toFixed(4)}</span> <br> <span class="op4">Pounds : ${(v * 0.0022046).toFixed(4)}</span> <br> <span class="op2">Ounces : ${(v * 0.035274).toFixed(4)}</span>`;
        })

    }
    else if (option === "pounds") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v = e.target.value;
            document.getElementById('output').innerHTML = `<span >Pounds : ${v}</span> <br> <span class="op3" >Kilogram : ${(v / 2.2046).toFixed(4)}</span> <br> <span class="op4">Gram : ${(v / 0.0022046).toFixed(4)}</span> <br> <span class="op2">Ounces : ${(v * 16).toFixed(4)}</span>`;
        })

    }
    else if (option === "ounces") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v = e.target.value;
            document.getElementById('output').innerHTML = `<span >Ounces : ${v}</span> <br> <span class="op3" >Kilogram : ${(v / 35.274).toFixed(4)}</span> <br> <span class="op4">Gram : ${(v / 0.035274).toFixed(4)}</span> <br> <span class="op2">Pounds : ${(v * 0.0625).toFixed(4)}</span>`;
        })

    }
}

function BaseConverter() {
    let select = document.getElementById('selectUnit');
    var option = select.options[select.selectedIndex].value;
    if (option === "decimal") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v =Number(e.target.value);
            document.getElementById('output').innerHTML = `<span >Decimal : ${v}</span> <br> <span class="op3" >Binary : ${(v).toString(2)}</span> <br> <span class="op4">Octal : ${(v.toString(8))}</span> <br> <span class="op2">Hexa Decimal : ${v.toString(16)}</span>`;
        })

    }
    else if (option === "binary") {
        reset();
       
        document.getElementById('number').addEventListener('input', function (e) {
           
            let v =Number(e.target.value.replace(/[^0-1]/g, '').replace(/(.{4})/g, '$1 ').trim());
            document.getElementById('output').innerHTML = `<span >Binary : ${v}</span> <br> <span class="op3" >Decimal : ${(v).toString(10)}</span> <br> <span class="op4">Octal : ${(v.toString(8))}</span> <br> <span class="op2">Hexa Decimal : ${v.toString(16)}</span>`;
        })

    }
    else if (option === "octal") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v =Number(e.target.value);
            document.getElementById('output').innerHTML = `<span >Octal : ${v}</span> <br> <span class="op3" >Binary : ${(v).toString(2)}</span> <br> <span class="op4">Decimal : ${(v.toString(10))}</span> <br> <span class="op2">Hexa Decimal : ${v.toString(16)}</span>`;
        })

    }
    else if (option === "hexa") {
        reset();
        document.getElementById('number').addEventListener('input', function (e) {
            let v =Number(e.target.value);
            document.getElementById('output').innerHTML = `<span >Hexa Decimal : ${v}</span> <br> <span class="op3" >Binary : ${(v).toString(2)}</span> <br> <span class="op4">Octal : ${(v.toString(8))}</span> <br> <span class="op2">Decimal : ${v.toString(10)}</span>`;
        })

    }
}

function getH2B(){
    let num = document.getElementById('number').value;
    let output = document.getElementById('output');
    if (isEmpty()) {
        return isEmpty();
    } else {
        let bigha=Number((num*3.99).toFixed(4));
        let biswa=Number((num*79.36).toFixed(4));
        let op1;
        let op2;
      

        if(biswa>=19.88){           
            op1=parseInt(biswa/19.88);
            op2=Number((biswa%19.88).toFixed(8));
            output.innerHTML = `Area result for <span class="op4"> ${num} </span> Hectare :  <br> <span class="finalans"> ${biswa}</span> Biswa <br> or<br> <span class="finalans"> ${bigha} </span>Bigha <br>or<br> Your Total area : <span class="finalans"> ${op1} </span>Bigha  , <span class="finalans"> ${op2} </span> Biswa`;
        }else{
            output.innerHTML = `Area result for ${num} Hectare :  <br> or<br><span class="finalans"> ${biswa}</span> Biswa <br>or<br> <span class="finalans"> ${bigha} </span>Bigha`;
        }
        document.getElementById('number').value = "";
        reset();

    }
}