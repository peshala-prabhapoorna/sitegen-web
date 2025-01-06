// disable preview toggle until conversion
const previewToggle = document.querySelector('#toggle-preview');
previewToggle.disabled = true;
// disable convert button until Pyodide has loaded
const convertButton = document.querySelector('#convert');
convertButton.disabled = true;

let htmlSite;
let articleElement;
const htmlCodeElement = document.createElement('textarea');
htmlCodeElement.classList.add('code');
htmlCodeElement.readOnly = true;

doThingsWithPyodide();

previewToggle.addEventListener('click', () => {
    if (previewToggle.textContent === 'HTML') {
        htmlCodeElement.value = htmlSite;
        appendChildToHtmlWorkspace(htmlCodeElement);

        previewToggle.textContent = 'Preview';
    } else {
        appendChildToHtmlWorkspace(articleElement);

        previewToggle.textContent = 'HTML';
    }
});

async function doThingsWithPyodide() {
    // load Pyodide, micropip and install sitegen
    const pyodide = await loadPyodide();
    await pyodide.loadPackage('micropip');
    const micropip = pyodide.pyimport('micropip');
    await micropip.install(
        'http://127.0.0.1:8080/assets/sitegen-1.0.0-py3-none-any.whl'
    );

    await pyodide.runPython(`
    from sitegen import sitegen
    print("Imported sitegen")
    `);
    // finish loading Python related packages

    convertButton.disabled = false;

    convertButton.addEventListener('click', async () => {
        // convert markdown to html
        await pyodide.runPython(`
        from js import document
        markdown = document.querySelector('#md-code').value
        html_site = sitegen.generate(markdown)
        `);
        htmlSite = pyodide.globals.get('html_site');

        // extract only the body from the html document
        const parser = new DOMParser();
        const parsedHtmlSite = parser.parseFromString(htmlSite, 'text/html');
        articleElement = parsedHtmlSite.querySelector('article');
        articleElement.classList.add('preview');

        appendChildToHtmlWorkspace(articleElement);
        previewToggle.textContent = 'HTML';

        previewToggle.disabled = false;
    });
}

function appendChildToHtmlWorkspace(child) {
    const htmlWorkspaceElement = document.querySelector('#html-workspace');
    htmlWorkspaceElement.removeChild(
        htmlWorkspaceElement.firstElementChild
    );
    htmlWorkspaceElement.appendChild(child);
}
