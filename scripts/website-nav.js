const website_nav = document.querySelector('#website-nav');
const open_website_nav_btn = document.querySelector('#open-website-nav-btn');
const minify_nav_btn = website_nav.querySelector('button[title="minify nav"]');
const expand_nav_btn = website_nav.querySelector('button[title="expand nav"]');
const main = document.querySelector('main');

function switch_class(element, old_class, new_class) {
    element.classList.remove(old_class);
    element.classList.add(new_class);
}

open_website_nav_btn.addEventListener('click', e => 
{
    e.stopPropagation();
    switch_class(website_nav, 'display-none', 'flex');
    switch_class(open_website_nav_btn, 'display-block', 'display-none');
    main.classList.add('display-opaque');
});

minify_nav_btn.addEventListener('click', () => 
{
    website_nav.querySelector('ul').classList.add('minified-list');
    switch_class(minify_nav_btn, 'display-block', 'display-none');
    switch_class(expand_nav_btn, 'display-none', 'display-block');
});

expand_nav_btn.addEventListener('click', () => 
{
    website_nav.querySelector('ul').classList.remove('minified-list');
    switch_class(expand_nav_btn, 'display-block', 'display-none');
    switch_class(minify_nav_btn, 'display-none', 'display-block');
});

document.addEventListener('click', () => 
{
    switch_class(website_nav, 'flex', 'display-none'); 
    switch_class(open_website_nav_btn, 'display-none', 'display-block');
    main.classList.remove('display-opaque');
});


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', e => 
    {
        if (window.innerWidth >= 1050)
        {
            const img_wrapper = img.parentElement;
    
            const img_placeholder = img_wrapper.previousElementSibling;
            img_placeholder.style.height = `${img.clientHeight}px`;
            img_placeholder.style.width = `${img.clientWidth}px`;
            switch_class(img_placeholder, 'display-none', 'display-inline-block');
    
            img_wrapper.classList.add('fullscreen');
    
            switch_class(img, 'zooming_out', 'zooming_in');
        }
    });
});

document.querySelectorAll('.img-wrapper').forEach(img_wrapper => {
    img_wrapper.addEventListener('click', e => 
    {
        if (e.target === img_wrapper && window.innerWidth >= 1050)
        {
            const img = img_wrapper.querySelector('img');
            switch_class(img, 'zooming_in', 'zooming_out');

            const img_placeholder = img_wrapper.previousElementSibling;
            
            setTimeout(() => {
                img_wrapper.classList.remove('fullscreen');
                switch_class(img_placeholder, 'display-inline-block', 'display-none');
                img_placeholder.style.height = '';
                img_placeholder.style.width = '';
            }, 300);
        }
    });
});    


