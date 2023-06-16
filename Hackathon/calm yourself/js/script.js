const sideNav = document.getElementById('mySidenav');
const title = document.getElementById('title');
const knowMore = document.getElementById('know-more');

const openNav = () => {
    sideNav.style.width = '250px';
}
const closeNav = () => {
    sideNav.style.width = '0';
}
const hover = () => {
    if (window.innerWidth >= 1020) {
        title.innerHTML = "<span id=\"mm\">Science Forum</span>"
        title.style.fontSize = "8.6458333333333335vw"
    } else {
        title.innerHTML = "<span id=\"mm\">S</span>cience <span id=\"mm\">F</span>orum"
    }
}
const leave = () => {
    if (window.innerWidth >= 1020) {
        title.innerHTML = "<span id=\"mm\">S</span>cience <span id=\"mm\">F</span>orum"
        title.style.fontSize = "10.6458333333333335vw"
    } else {
        title.innerHTML = "<span id=\"mm\">S</span>cience <span id=\"mm\">F</span>orum"
    }
}
knowMore.addEventListener("mouseover", hover);
knowMore.addEventListener("mouseleave", leave);