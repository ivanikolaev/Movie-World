//Code for changing bg

function change(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = banner.querySelectorAll('.content');
    banner.style.background = `url("./img/${bg}") no-repeat`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    })
}