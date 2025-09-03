const website_nav = document.querySelector('#website-nav');
const open_website_nav_btn = document.querySelector('#open-website-nav-btn');
const minify_nav_btn = website_nav.querySelector('button[title="minify nav"]');
const expand_nav_btn = website_nav.querySelector('button[title="expand nav"]');
const main = document.querySelector('main');

(function main()
{
    website_nav.switch_class          = 
    open_website_nav_btn.switch_class = 
    minify_nav_btn.switch_class       = 
    expand_nav_btn.switch_class       = switch_class;
    
    website_nav.addEventListener('click', e => e.stopPropagation());
    open_website_nav_btn.addEventListener('click', e => e.stopPropagation());
})();

open_website_nav_btn.addEventListener('click', () => 
{    
    website_nav.switch_class('display-none', 'display-block');
    open_website_nav_btn.switch_class('display-block', 'display-none');
    main.classList.add('display-opaque');
});

minify_nav_btn.addEventListener('click', () => 
{
    website_nav.querySelector('ul').classList.add('minified-list');
    minify_nav_btn.switch_class('display-block', 'display-none');
    expand_nav_btn.switch_class('display-none', 'display-block');
});

expand_nav_btn.addEventListener('click', () => 
{
    website_nav.querySelector('ul').classList.remove('minified-list');
    expand_nav_btn.switch_class('display-block', 'display-none');
    minify_nav_btn.switch_class('display-none', 'display-block');
});

document.addEventListener('click', () => {
    website_nav.switch_class('display-block', 'display-none'); 
    open_website_nav_btn.switch_class('display-none', 'display-block');
    main.classList.remove('display-opaque');
});

function switch_class(old, _new) {
    this.classList.remove(old);
    this.classList.add(_new)
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', e => {
        e.stopPropagation();
        img.parentElement.classList.add('fullsize');
    });
});

document.querySelectorAll('.img-wrapper').forEach(img_wrapper => {
    img_wrapper.addEventListener('click', () => {
        img_wrapper.classList.remove('fullsize');
    });
});
