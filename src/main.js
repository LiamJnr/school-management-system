const navToggler = document.getElementById('nav__toggler');
const navBar = document.getElementById('nav');
const container = document.querySelector('.container');
const menuIcon = document.querySelector('.menu__svg');
const closeIcon = document.querySelector('.close__svg');

navToggler.addEventListener('click', () => {
    navBar.classList.toggle('show');
    
    if(navBar.classList.contains('show')){
        menuIcon.style.setProperty('display', 'none');
        closeIcon.style.setProperty('display', 'block');
        return;
    }

    if(!navBar.classList.contains('show')){
        closeIcon.style.setProperty('display', 'none');    
        menuIcon.style.setProperty('display', 'block');
        return;
    }
});

const togglers = Array.from(document.querySelectorAll('.toggler'));
const dropdownContainers = document.querySelectorAll('.dropdown_container');
const dropdownLists = document.querySelectorAll('.dropdown_list');

// Close all dropdowns reusable function (trgt for target)
function closeAllDropdowns(trgt = null) {
    dropdownContainers.forEach(container => {
        const dropdown = container.nextElementSibling;
        const icon = container.querySelector('.drop_icon');

        if (dropdown !== trgt && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            if (icon) icon.style.setProperty('transform', 'rotate(0deg)');
        }
    });
}

// Handle toggler click
togglers.forEach(toggler => {
    toggler.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent document click
        const targetDropdown = this.parentElement.nextElementSibling;
        const dropIcon = this.querySelector('.drop_icon');

        // Close others
        closeAllDropdowns(targetDropdown);

        // Toggle current
        targetDropdown.classList.toggle('open');

        // Rotate Icon
        targetDropdown.classList.contains('open') 
            ? dropIcon.style.setProperty('transform', 'rotate(180deg)')
            : dropIcon.style.setProperty('transform', 'rotate(0deg)');
    });
});

// Global click to close dropdowns if click happens outside dropdown Container
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown_container')) {
        closeAllDropdowns();
    }
});

