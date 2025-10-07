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

// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('click', () => 
//     {
//         if (window.innerWidth >= 1050)
//         {
//             const img_wrapper = img.parentElement;
    
//             const img_placeholder = img_wrapper.previousElementSibling;
//             if (!img_placeholder || !img_placeholder.classList.contains('img-placeholder')) return;

//             img_placeholder.style.height = `${img.clientHeight}px`;
//             img_placeholder.style.width = `${img.clientWidth}px`;
//             img_placeholder.classList.replace('display-none', 'display-inline-block');
    
//             img_wrapper.classList.add('fullscreen');
            
//             img.classList.remove('zooming-out');
//             img.classList.add('zooming-in');
    
//             // img.classList.replace('zooming-out', 'zooming-in');
//         }
//     });
// });

// document.querySelectorAll('.img-wrapper').forEach(img_wrapper => {
//     img_wrapper.addEventListener('click', e => 
//     {
//         if (e.target === img_wrapper && window.innerWidth >= 1050)
//         {
//             const img = img_wrapper.querySelector('img');
//             img.classList.remove('zooming-in');
//             img.classList.add('zooming-out');
//             // img.classList.replace('zooming-in', 'zooming-out');

//             const img_placeholder = img_wrapper.previousElementSibling;
            
//             setTimeout(() => {
//                 img_wrapper.classList.remove('fullscreen');
//                 img_placeholder.classList.replace('display-inline-block', 'display-none');
//                 img_placeholder.style.height = '';
//                 img_placeholder.style.width = '';
//             }, 300);
//         }
//     });
// });    


