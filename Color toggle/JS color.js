let toggleNavStatus = false;

let toggleNav = function() {
let getNavMain = document.querySelector(".nav-main");
   let getNavMainUl = document.querySelector(".nav-main ul");
   let getNavMainLinks = document.querySelectorAll(".nav-main a");   
   if (toggleNavStatus === false) {
       getNavMainUl.style.visibility = "visible";

       let arrayLength = getNavMainLinks.length;
       for (let i=0; i < arrayLength; i++){
           getNavMainLinks[i]
       }

       toggleNavStatus = true;
   }

   else if (toggleNavStatus === true) {
    getNavMainUl.style.visibility = "hidden";
    let arrayLength = getNavMainLinks.length;
    for (let i=0; i < arrayLength; i++){
        getNavMainLinks[i]
    }

    toggleNavStatus = false;
}
}

let toggleColorRed = function () {
    document.body.style.backgroundColor = "red";
    toggleNav();
}

let toggleColorBeige = function () {
    document.body.style.backgroundColor = "beige";
    toggleNav();
}

let toggleColorOrange = function() {
    document.body.style.backgroundColor = "orange";
    toggleNav();
}

let toggleColorPurple = function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
}

let toggleColorGreen = function () {
    document.body.style.backgroundColor = "green";
    toggleNav();
}