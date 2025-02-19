const website_nav = document.querySelector('#website-nav');
const button = document.querySelector('#website-nav button');
const ul = document.querySelector('#website-nav ul');
button.addEventListener('click', toggle_ul);

let is_menu_closed = true;
function toggle_ul() {
    if (is_menu_closed) {
        ul.style.display = 'block';
        website_nav.style.boxShadow = '0 0 5px rgb(237, 237, 237)';
        website_nav.style.backgroundColor = 'rgb(18, 18, 18)';
    } else {
        ul.style.display = 'none';
        website_nav.style.boxShadow = 'unset';
        website_nav.style.backgroundColor = 'unset';
    }

    is_menu_closed = !is_menu_closed;
}
