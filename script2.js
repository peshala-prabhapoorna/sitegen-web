const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    const mdCode = document.querySelector('#md-code');
    mdCode.value = '# TITLE\n\nParagraph goes here!';
    const convertButton = document.querySelector('#convert');
    convertButton.click();
});

const uploadInputElement = document.querySelector('#invisible-upload');

uploadInputElement.addEventListener('change', () => {
    if (uploadInputElement.files.length !== 1) {
        console.log('Failed to upload file.');
        return;
    }
    
    const [markdownFile] = uploadInputElement.files;
    let fileContent;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        fileContent = reader.result;

        const markdownCode = document.querySelector('#md-code');
        markdownCode.value = fileContent;
    });
    reader.readAsText(markdownFile);

    uploadInputElement.value = '';
});
