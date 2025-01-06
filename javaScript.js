const navBar = document.getElementsByClassName("navbar")[0];
const navBottom = document.getElementsByClassName("nav-bottom")[0];


window.addEventListener('scroll', () => {
    const navBottomRect = navBottom.getBoundingClientRect();
    const navBarRect = navBar.getBoundingClientRect();
    if (navBottomRect.top < 0) {
        navBar.style.position = "fixed";
    }else{
        navBar.style.position = "static";
    }
}) 