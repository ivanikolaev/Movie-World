const closeButton = document.querySelector('.close-button');
const activeContent = document.querySelector('.active-content');
const activeImage = activeContent.querySelector('.active-image');
const activeArticle = activeContent.querySelector('.active-article');
const activeTitle = activeContent.querySelector('.active-title');
const mediaArticles = document.querySelectorAll('.media');

mediaArticles.forEach(function(element) {
    element.addEventListener('click', () => {activeContent.style.display = 'flex'})
});

closeButton.addEventListener('click', () => {activeContent.style.display = "none"});
document.addEventListener('keydown', event => {
    if (event.code == 'Escape')
        activeContent.style.display = "none";
})

function changeContent(number, bg) {
    activeImage.style.background = `url("./img/${bg}") no-repeat`;
    activeImage.style.backgroundSize = 'cover';
    activeImage.style.backgroundPosition = 'center';
    activeTitle.textContent = document.querySelector('.article' + number).textContent;
    activeArticle.innerHTML = document.querySelector('.content' + number).innerHTML;
}

