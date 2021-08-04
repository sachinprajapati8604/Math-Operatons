//onload event 
window.addEventListener('load', (event) => {
    display();
    weigthDisplay();
})
//making object of data used in html row and column 
const data = {
    fileurl: ["fizzbuzz.html", "factorial.html", "gcd.html", "nNatural_sum.html", "prime_factor.html", "square.html", "sqrt.html", "power.html"],
    filetitle: ["FizzBuzz", "Factorial", "GCD(Greatest common divisor)", "Sum of n natural number", "Prime factor", "Square of number", "Square root of number", "Power of number"],
}

//onload event to display column 
//calling the funtion in body onload of index.html only

//making funtion to add column in row 
function display() {
    let len1 = data.fileurl.length;
    let len2 = data.filetitle.length;
    let i = 0;
    let mainbox = document.getElementById('mainbox');
    let row = document.getElementById('mainrow');
    // let row=document.createElement('div');
    // row.className='row';
    while (i < len1 && i < len2) {
        //  alert()
        // console.log(data.fileurl[i]);
        let col = document.createElement('div');
        col.className = 'col-3';
        //adding card in column inside  literrals ``
        col.innerHTML =
            `
        <div class="card text-dark  h-100 mycard">
        <div class="card-body">
            <h5 class="card-title">${data.filetitle[i]}</h5>
            <p class="card-text">click button to find solution</p>
        </div>
        <div class="card-footer">
            <a href="files/${data.fileurl[i]}" class="btn btn-success">click me</a>
        </div>
        </div>
        `;
        i = i + 1;
        row.append(col);  //appending column into row 
    }
    mainbox.append(row);  //appending row into container 
}

const convertor = {
    fileurl: ["Weight_conv.html","number_system.html"],
    filetitle: ["weight conversion","Number convertor"],
}

//making funtion to add column in row 
function weigthDisplay() {
    let len1 = convertor.fileurl.length;
    let len2 = convertor.filetitle.length;
    let i = 0;
    let mainbox = document.getElementById('convertor_box');
    let row = document.getElementById('convertor_row');

    while (i < len1 && i < len2) {

        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
            `
        <div class="card text-dark  h-100 mycard">
        <div class="card-body">
            <h5 class="card-title">${convertor.filetitle[i]}</h5>
            <p class="card-text">click button to get conversion.</p>
        </div>
        <div class="card-footer">
            <a href="files/${convertor.fileurl[i]}" class="btn btn-success">click me</a>
        </div>
        </div>
        `;
        i = i + 1;
        row.append(col);  //appending column into row 
    }
    mainbox.append(row);  //appending row into container 
}





