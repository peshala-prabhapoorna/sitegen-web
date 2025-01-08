const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    const mdCode = document.querySelector('#md-code');
    // Resetting both the preview and html code is a pain in the ass.
    // So did this instead. Probably better than having blanks.
    mdCode.value = '# TITLE\n\nParagraph goes here!';
    const convertButton = document.querySelector('#convert');
    convertButton.click();
});
