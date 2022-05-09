
window.addEventListener("scroll", onScroll);
onScroll();

function onScroll(){
    changeNavbarColor();
    backToTop();
    activedMenuAtcurrentSection(home);
    activedMenuAtcurrentSection(services);
    activedMenuAtcurrentSection(about);
    activedMenuAtcurrentSection(contact);
}


function activedMenuAtcurrentSection(section) {

    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionEndsAt = sectionTop + sectionHeight;
    
    const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;


    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBundaries = sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*='${sectionId}']`);

    menuElement.classList.remove('active');
    if(sectionBundaries) {
        menuElement.classList.add('active');
    }


    // console.log('targetLine: ' + targetLine + ' sectionTop: ' + sectionTop + ' height: ' + sectionHeight);
    // console.log('section top reached or passed the targetLine: ' + sectionTopReachedOrPassedTargetLine);
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