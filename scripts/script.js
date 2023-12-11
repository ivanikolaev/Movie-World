"use strict"
 
// Code for slider
const sliderContainer = document.querySelector('.slider-container');
const sliderPrev = sliderContainer.querySelector('.slider-prev');
const sliderNext = sliderContainer.querySelector('.slider-next');
const content1 = sliderContainer.querySelector('.content1');
const content2 = sliderContainer.querySelector('.content2');
const content3 = sliderContainer.querySelector('.content3');
const content4 = sliderContainer.querySelector('.content4');

let currentContent = 0;

sliderPrev.addEventListener('click', function() {
    content1.style.transform = `translateX(-${100 * ((currentContent + 3) % 4)}%)`;
    content2.style.transform = `translateX(-${100 * ((currentContent + 3) % 4)}%)`;
    content3.style.transform = `translateX(-${100 * ((currentContent + 3) % 4)}%)`;
    content4.style.transform = `translateX(-${100 * ((currentContent + 3) % 4)}%)`;
    currentContent = ((currentContent + 3) % 4);
});

sliderNext.addEventListener('click', function() {
    content1.style.transform = `translateX(-${100 * ((currentContent + 1) % 4)}%)`;
    content2.style.transform = `translateX(-${100 * ((currentContent + 1) % 4)}%)`;
    content3.style.transform = `translateX(-${100 * ((currentContent + 1) % 4)}%)`;
    content4.style.transform = `translateX(-${100 * ((currentContent + 1) % 4)}%)`;
    currentContent = (currentContent + 1) % 4;
});



//Code for glass cards
const cards = document.querySelectorAll('.glass-text');
let cardTexts = [];

function selectCards() {
    cards.forEach(function(element) {
        cardTexts.push(element.textContent);
        element.textContent = truncate(element.textContent, 43);
    });
}
 
function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + '…';
    else
        return str;
}
document.addEventListener('DOMContentLoaded', selectCards);

function changeContent(number) {
    const selectedButton = document.getElementById('button' + number);
    if (selectedButton.textContent == 'Подробнее') {
        const selectedContent = document.getElementById('content' + number);
        selectedContent.textContent = cardTexts[number - 1];
        selectedButton.textContent = 'Перейти';
    }
    else
        window.location.href = 'media.html';
}