"use strict";
function copyToClipboard(elementId) {
    var el = document.getElementById(elementId);
    if (el) {
        var text = el.textContent;
        if (text) {
            navigator.clipboard.writeText(text).then(function () {
                console.log('Copying to clipboard was successful!');
                showCopiedMessage(elementId);
            }, function (err) {
                console.error('Could not copy text: ', err);
            });
        }
    }
}
function showCopiedMessage(elementId) {
    var button = document.querySelector("button[onclick=\"copyToClipboard('".concat(elementId, "')\"]"));
    if (button) {
        var originalText_1 = button.textContent;
        button.textContent = 'Copied!';
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('bg-blue-500', 'hover:bg-blue-600');
        setTimeout(function () {
            button.textContent = originalText_1;
            button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
            button.classList.add('bg-green-500', 'hover:bg-green-600');
        }, 2000);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    Prism.highlightAll();
});
