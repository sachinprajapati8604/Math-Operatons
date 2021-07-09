
// js for the fizzbuzz part
function printFizzBuzz() {
    let fizz = 0, buzz = 0, fizzbuzz = 0, numberCount = 0;  // using for count
    var num=document.getElementById('number').value;
    //writing some edge cases  to check empty or negative number 
    if (num === "" || num <= 0) { //to check empty
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number greater or equal to 1'
        })
        return;
    }

    var output=document.getElementById('output');
    var msg=document.getElementById('msg');

    msg.innerHTML = "FizzBuzz from <b> 1 </b> to  <b>" + num+"</b>";
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
    document.getElementById("count").innerHTML=`Total Fizz :<b> ${fizz}</b> , Total Buzz : <b> ${buzz}</b> ,Total FizzBuzz : <b> ${fizzbuzz}</b> , Total Numbers : <b> ${numberCount}</b> `;
    reset();
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
    if (num === "" || num < 0) { //to check empty
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number greater or equal to 0'
        })
        return;
    }

    const result = calculateFactorial(num);
    document.getElementById("output").innerHTML = "Factorial of " + num + " is : " + result;
    document.getElementById("output").innerHTML = `Factorial of ${num} is  <span class="finalans"> ${result} </span>`;
    reset();
}

//wrtring gcd script

function gcd(a, b) {
    if (a == 0) {
        return b;
    }
    return (b % a, a);
}

function getGCD() {
    var num = document.getElementById("number").value; //this will return value as string 
    num = num.split(" ").map(Number); //now sperate string when space seen and parse it into integer(Number)
    // console.log(typeof(num));  //num is object array
    num.sort(); //sort the array if user enter in unsorted way
    var hcf = 0;
    for (var i = 0; i < num.length; i++) {
        hcf = gcd(hcf, num[i]);
        // console.log("hcf "+hcf+" num "+num[i]);

        if (hcf === 1) {
            // console.log("If consloe"+hcf);
            document.getElementById("output").innerHTML = `GCD of ${num} is : <span class="finalans">${hcf}</span>`;
            reset();

            return;
        }
    }
    // console.log("exit loop "+hcf);
    document.getElementById("output").innerHTML = `GCD of ${num} is : <span class="finalans">${hcf}</span>`;
    reset();
    return;
}
//writing function for reset input field
function reset() {
    document.getElementById('number').value = "";
}

//writing js for the prime factor 
function getPrime() {
    let n = document.getElementById("number").value;
    // console.log(n);
    let output = document.getElementById("output");
    output.innerHTML="";
    output.innerHTML+="Prime factor of "+n+" is   ";
    // printing the number of 2's which divides the n
    while (n % 2 == 0) {
        output.innerHTML +=`<span class="finalans"> ${2}, </span>`;
        n = n / 2;
    }
    //now checking if n is become odd  
    for(var i=3;i<=Math.sqrt(n);i=i+2){
        while(n%i==0){
            output.innerHTML+=`<span class="finalans"> ${i}, </span>`;
            n=n/i;
        }
    }
    //if n is  a prime  number greater than 2
    if(n>2){
        output.innerHTML+=`<span class="finalans"> ${n}, </span>`;
    }
  reset();
}

//to get n natural number sum
function naturalSum(){
    var n=Number(document.getElementById('number').value);
    const sum=n*(n+1)/2;
    // console.log(sum+" "+n);
    document.getElementById('output').innerHTML=`Sum of 1 to ${n}  is <span class="finalans">${sum}</span>`;
    reset();
}
