const $burger = document.querySelector(".burger");
const $navLinksContainer = document.querySelector(".nav_links_container");
const $navLinks = document.querySelectorAll(".nav_links_container li");

$burger.onclick = () => {
    $navLinksContainer.classList.toggle("nav_clicked");
    $burger.classList.toggle("burger_clicked");
    
    $navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 +
                0.5}s`;
        }
        
    });    
};
