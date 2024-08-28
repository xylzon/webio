function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;
    const outputFrame = document.getElementById("outputFrame").contentWindow.document;

    outputFrame.open();
    outputFrame.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    outputFrame.close();
}

function formatCode() {
    alert("Format code functionality is under construction.");
}

function openTab(tabId) {
    const editors = document.querySelectorAll('.editor');
    editors.forEach(editor => editor.classList.add('hidden'));

    const activeTab = document.querySelector(`#${tabId}Editor`);
    if (activeTab) activeTab.classList.remove('hidden');

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add('active');
}

function toggleLivePreview() {
    const isLivePreviewEnabled = document.querySelector('.footer button[onclick="toggleLivePreview()"]').classList.toggle('active');
    if (isLivePreviewEnabled) {
        document.getElementById('htmlCode').addEventListener('input', runCode);
        document.getElementById('cssCode').addEventListener('input', runCode);
        document.getElementById('jsCode').addEventListener('input', runCode);
    } else {
        document.getElementById('htmlCode').removeEventListener('input', runCode);
        document.getElementById('cssCode').removeEventListener('input', runCode);
        document.getElementById('jsCode').removeEventListener('input', runCode);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    openTab('html');
});
