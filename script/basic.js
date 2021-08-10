//onload event 
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
                    <a class="nav-link" href="#footer"  >Contact us</a>
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
    <ul class="social-icons">
    <li><a class="facebook" href="https://www.facebook.com/bullet.raja.1998"><i class="fab fa-facebook-f"
                aria-hidden="true"></i></a></li>
    <li><a class="twitter" href="https://twitter.com/SachinP40"><i class="fab fa-twitter"
                aria-hidden="true"></i></a></li>
    <li><a class="instagram" href="https://www.instagram.com/prajapati_rangbaz?r=nametag"><i
                class="fab fa-instagram" aria-hidden="true"></i></a></li>
    <li><a class="github" href="https://github.com/sachinprajapati8604"><i class="fab fa-github"
                aria-hidden="true"></i></a></li>
    <li><a class="linkedin" href="https://www.linkedin.com/in/sachin-prajapati-8b1993188"><i
                class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>

    </ul>
    </div>
    `;
}
