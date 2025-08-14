const website_nav = document.querySelector('#website-nav');
const open_website_nav_btn = document.querySelector('#open-website-nav-btn');
const main = document.querySelector('main');

open_website_nav_btn.addEventListener('click', () => 
{    
    website_nav.className = 'display-block';
    open_website_nav_btn.className = 'display-none';
    main.className = 'display-opaque';
});

website_nav.addEventListener('click', e => e.stopPropagation());
open_website_nav_btn.addEventListener('click', e => e.stopPropagation());

document.addEventListener('click', () => {
    website_nav.className = 'display-none';
    open_website_nav_btn.className = 'display-block';
    main.className = '';
});
