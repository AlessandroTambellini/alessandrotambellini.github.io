const website_nav = document.querySelector('#website-nav');
const hamburger_btn = website_nav.querySelector('#website-nav-btn');
const menu_entries = website_nav.querySelector('#website-nav ul');

// 'f' stands for flag.
let f_menu_is_open = false;

hamburger_btn.addEventListener('click', e => 
{
    f_menu_is_open = !f_menu_is_open;

    if (f_menu_is_open) 
    {
        menu_entries.style.display = 'block';
        website_nav.style.boxShadow = '-1px -1px 5px rgb(237, 237, 237)';
        website_nav.style.backgroundColor = 'rgb(18, 18, 18)';
    } 
    else {
        menu_entries.style.display = 'none';
        website_nav.style.boxShadow = 'unset';
        website_nav.style.backgroundColor = 'unset';
    }

    e.stopPropagation();
});

website_nav.addEventListener('click', e => e.stopPropagation());

// can i revert the bubbling order
// stopPropagation() vs stopImmediatePropagation()

document.addEventListener('click', () => 
{
    f_menu_is_open = false;

    menu_entries.style.display = 'none';
    website_nav.style.boxShadow = 'unset';
    website_nav.style.backgroundColor = 'unset'; 
});
