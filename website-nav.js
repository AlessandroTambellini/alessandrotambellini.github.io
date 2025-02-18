const button = document.querySelector('#website-nav button');
const ul = document.querySelector('#website-nav ul');
button.addEventListener('click', toggle_ul);

let toggle = true;
function toggle_ul() {
    if (toggle) {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }

    toggle = !toggle;
}
