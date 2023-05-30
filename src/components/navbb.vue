<template>
<div class="navcolor">
    <nav class="navbar navbar-dark bg-dark fixed-top">
    
      <button id="navbar-toggler" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon" style="width: 2em;
      height: 2em;">
          
        </span>
      </button>
      <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         <ui >
          <i class="bi bi-facebook  icon-on-sm"></i>
          <i class="bi bi-youtube  icon-on-sm"></i>
          <i class="bi bi-instagram  icon-on-sm"></i>
          <i class="bi bi-twitter  icon-on-sm"></i> 
        </ui>       
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" style="text-align: center;">
              <img src="../components/icons/MY-LOGO-22.png" style="max-width: 11em;
      max-height: 11em;">
            
            </li>
            <li class="nav-item" >
              <div class="line-onwe"></div>
              <a class="nav-link Welcom-to-f" href="../views/Welcome">Go To FGYM</a>
              <div class="line-onwe"></div>
            </li>
            <li class="nav-item nav-item-plus">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item nav-item-plus">
              <a class="nav-link"  href="../views/Nutrition">Nutrition</a>
            </li>
            <li class="nav-item nav-item-plus">
              <a class="nav-link" href="../views/Fitness">Fitness</a>
            </li>
            <li class="nav-item nav-item-plus">
              <a class="nav-link" href="../views/Boutique">Shop</a>
            </li>
           <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            -->
          </ul>
          <!--<form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
          </form>
          -->
        </div>
      </div>
  
  </nav>
  </div>

</template>
<style >
.nav-item-plus{
  font-size: 30px;
  margin-bottom: 0.5em;
}
.nav-item{
  text-align: center;
  font-weight: bold;
}
.line-onwe{
  background-color: rgba(237, 232, 232, 0.661);
     border: 1px solid rgba(237, 232, 232, 0.661);
     
}
.icon-on-sm{
    height: 1.75em;
    width: 1.75em;
    font-size: 1.1em;
    display: inline-block;
    margin-left: 0.1em;
  }
.offcanvas-header .btn-close{
  height: 70px;
    width: 70px;
    font-size: 40px;
}
.offcanvas.offcanvas-end{
  left: 0;
}
#navbar-toggler{
  height: 70px;
  width: 70px;
  background-color: #F9525A;
  border-radius: 50%;
  display: inline-block;
  font-size: 24px;
  margin: 15px;
}
.bg-dark{
  --bs-bg-opacity: 0;
}
.Welcom-to-f{
  font-size: 35px;
}
</style>