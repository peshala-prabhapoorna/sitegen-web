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
