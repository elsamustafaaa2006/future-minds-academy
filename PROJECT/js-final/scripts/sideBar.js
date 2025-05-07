const sidebar = document.querySelector("aside");
const main = document.querySelector("main");
const toggleBtn = document.querySelector(".circleBTN");


toggleBtn.addEventListener("click", function () {

    sidebar.classList.toggle("collapsed");

    main.classList.toggle("collapsed");

});


const menuHeaders = document.querySelectorAll(".aside-item-header");

for (let i = 0; i < menuHeaders.length; i++) {
    const header = menuHeaders[i];

    header.addEventListener("click", function () {
        const parent = header.parentElement;
        if (parent) {
            parent.classList.toggle("active");
        }
    });
}


