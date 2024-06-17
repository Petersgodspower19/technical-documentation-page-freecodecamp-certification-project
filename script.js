const links = document.querySelectorAll(".nav-link");

const showBar = () => {
    document.getElementById("navbar").style.width = "250px";
}
const closeBar = () => {
    document.getElementById("navbar").style.width = "0";
}

let screenWidth = window.innerWidth;
if (screenWidth <= 600) {
    links.forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("navbar").style.width = "0";
        })
    })
}
