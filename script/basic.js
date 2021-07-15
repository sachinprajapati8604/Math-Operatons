
//making object of data used in html row and column 
const data = {
    fileurl: ["fizzbuzz.html", "factorial.html", "gcd.html", "nNatural_sum.html", "prime_factor", "square.html", "sqrt.html", "power.html"],
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
            <a href="files/${data.fileurl[i]}" class="btn btn-success">click to go</a>
        </div>
        </div>
        `;
        i = i + 1;
        row.append(col);  //appending column into row 
    }
    mainbox.append(row);  //appending row into container 
}

window.addEventListener('load', (event) => {
    displayNavbar();
    displayFooter();
})

function displayNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.innerHTML =
        `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Math-Operations</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Populars
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
    `;
}

function displayFooter() {
    let footer = document.getElementById('footer');
    footer.innerHTML =
        `
    <div class="myfooter container-fluid bg-dark text-light mt-4 p-3">
    <p class="text-center mb-0">Made by Sachin Prajapati &copy; 2021 | All right reserved </p>
    </div>
    `;
}


