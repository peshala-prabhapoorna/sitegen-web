const guideButton = document.querySelector('#guidebtn');
const guide = document.querySelector('#guide');
const guideOkButton = document.querySelector('#guide-ok-btn');
console.log(guideOkButton);

guideButton.addEventListener('click', () => {
    guide.style.display = 'flex';
});

guideOkButton.addEventListener('click', () => {
    guide.style.display = 'none';
});

guideButton.dispatchEvent(new Event('click'));
