/*
 * 
 *  Side-Nav
 */

const side_nav = document.querySelector('#side-nav');
const open_side_nav_btn = document.querySelector('#open-side-nav-btn');
const minify_nav_btn = side_nav.querySelector('#minify-nav-btn');
const expand_nav_btn = side_nav.querySelector('#expand-nav-btn');
const main = document.querySelector('main');

open_side_nav_btn.addEventListener('click', e => 
{
    e.stopPropagation();
    side_nav.classList.replace('display-none', 'flex');
    open_side_nav_btn.classList.replace('display-block', 'display-none');
    main.classList.add('display-opaque');
});

document.addEventListener('click', () => 
{
    side_nav.classList.replace('flex', 'display-none'); 
    open_side_nav_btn.classList.replace('display-none', 'display-block');
    main.classList.remove('display-opaque');
});

minify_nav_btn.addEventListener('click', () => 
{
    side_nav.querySelector('menu').classList.add('minified-list');
    minify_nav_btn.classList.replace('display-block', 'display-none');
    expand_nav_btn.classList.replace('display-none', 'display-block');
});

expand_nav_btn.addEventListener('click', () => 
{
    side_nav.querySelector('menu').classList.remove('minified-list');
    expand_nav_btn.classList.replace('display-block', 'display-none');
    minify_nav_btn.classList.replace('display-none', 'display-block');
});


/*
 * 
 *  Image Zooming
 */

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => 
    {
        if (window.innerWidth >= 1050)
        {
            const img_wrapper = img.parentElement;
    
            const img_placeholder = img_wrapper.previousElementSibling;

            // If there isn't a placeholder, simply don't do anything to the image.
            if (!img_placeholder || !img_placeholder.classList.contains('img-placeholder')) return;

            /* For the height is used the img_wrapper height because the img has a bit of margin-block.
            Therefore the height of the img doesn't reflect the actual space occupied. */
            img_placeholder.style.height = `${img_wrapper.clientHeight}px`;
            switch_class(img_placeholder, 'display-none', 'display-inline-block');
    
            img_wrapper.classList.add('fullscreen');
            
            switch_class(img, 'zooming-out', 'zooming-in');
        }
    });
});

document.querySelectorAll('.img-wrapper').forEach(img_wrapper => {
    img_wrapper.addEventListener('click', e => 
    {
        if (e.target === img_wrapper && window.innerWidth >= 1050)
        {
            const img = img_wrapper.querySelector('img');
            switch_class(img, 'zooming-in', 'zooming-out');

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

function switch_class(element, old_class, new_class)
{
    element.classList.remove(old_class);
    element.classList.add(new_class);
}


