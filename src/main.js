const navOpen = document.getElementById('nav__open');
const navClose = document.getElementById('nav__close');
const navBar = document.querySelector('nav');

function toggleNav(){
    navBar.classList.toggle('translate');
}

navOpen?.addEventListener('click', toggleNav);
navClose?.addEventListener('click', toggleNav);

const togglers = Array.from(document.querySelectorAll('button.dropdown__toggler'));
const linkContainers = document.querySelectorAll('.link__container');
const dropdownLists = document.querySelectorAll('.dropdown_list');

// Close all dropdowns reusable function (trgt for target)
function closeAllDropdowns(trgt = null) {
    linkContainers.forEach(container => {
        const dropdown = container.querySelector('.dropdown');
        const icon = container.querySelector('.drop__icon');

        if (dropdown && dropdown !== trgt && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            if (icon) icon.style.setProperty('transform', 'rotate(0deg)');
        }
    });
}

// Handle toggler click
togglers.forEach(toggler => {
    toggler.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent document click
        const targetDropdown = this.nextElementSibling;
        const dropIcon = this.querySelector('.drop__icon');

        // Close others
        closeAllDropdowns(targetDropdown);

        // Toggle current
        targetDropdown.classList.toggle('open');

        // Rotate Icon
        if(dropIcon){
            targetDropdown.classList.contains('open') 
                ? dropIcon.style.setProperty('transform', 'rotate(180deg)')
                : dropIcon.style.setProperty('transform', 'rotate(0deg)');
        }

        if(body.classList.contains('collapse')){
            body.classList.toggle('collapse');
        }
    });
});

// Global click to close dropdowns if click happens outside dropdown Container
document.addEventListener('click', function (e) {
    if (!e.target.closest('.link__container')) {
        closeAllDropdowns();
    }
});

const navCollapser = document.getElementById('collapser');
const body = document.querySelector('body');

navCollapser.addEventListener('click', () =>{
    body.classList.toggle('collapse');
})

window.addEventListener('resize', () => {
    
    const body = document.body;
    const width = window.innerWidth

    if(width <= 1020 && body.classList.contains('collapse')){
        body.classList.remove('collapse');
    }
})