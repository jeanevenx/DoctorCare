
window.addEventListener("scroll", onScroll);
onScroll();

function onScroll(){
    changeNavbarColor();
    backToTop();
}

function backToTop(){
    let btnBackToTop = document.getElementById('btnBackToTop');
    if(scrollY >= 500){
        btnBackToTop.classList.add('show');
    } else {
        btnBackToTop.classList.remove('show');
    }
}

function changeNavbarColor(){
    if(scrollY > 0){
        navigation.classList.add("scroll");
    } else{
        navigation.classList.remove("scroll");
    }
}

function openAndCloseMenu(isOpen){
    switch(isOpen){
        case true:
            document.body.classList.add("menu-expanded");
        break;

        case false:
            document.body.classList.remove("menu-expanded");
        break;
    }
    
}

ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: 700
}).reveal(`
    #home, #home img, #home .statistics,
    #services header, #services .card,
    #about, #about .content, #about img
`);