let sidebar = document.querySelector(".navbar-nav"),
    sidebarLi = sidebar.querySelectorAll(".nav-item");
for (var i = 0; i < sidebarLi.length; i++) {
    sidebarLi[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

window.onscroll = () => {

    let section = document.querySelectorAll('article');
    let menuLinks = document.querySelectorAll('.collapse .navbar-nav .nav-item');
    let sectionHeight = document.querySelector('article').offsetHeight;
    let sectionStartingPointArray = [];
    let menuLinksArray = [];
    section.forEach((sec) => {
        sectionStartingPointArray.push(sec.offsetTop);
    });
    menuLinks.forEach((menuLink) => {
        menuLinksArray.push(menuLink);
    });

    let downwardScroll = window.scrollY;
    sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
        if (downwardScroll >= sectionStart - sectionHeight / 2) {
            menuLinksArray.forEach((menu) => {
                menu.classList.remove('active');
            });
            menuLinksArray[sectionIndex].classList.add('active');
        }
    });

}