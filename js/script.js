
const topbutton = document.getElementById('top');

function showtopbutton() {
    if (window.scrollY > 800) {
        topbutton.style.display = 'block';
    } else {
        topbutton.style.display = 'none';
    }
}

function gototop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', showtopbutton);

topbutton.addEventListener('click', gototop);

showtopbutton();