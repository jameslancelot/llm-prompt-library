function copyToClipboard(elementId: string): void {
    const el = document.getElementById(elementId);
    if (el) {
        const text = el.textContent;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Copying to clipboard was successful!');
                showCopiedMessage(elementId);
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
        }
    }
}

function showCopiedMessage(elementId: string): void {
    const button = document.querySelector(`button[onclick="copyToClipboard('${elementId}')"]`);
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('bg-blue-500', 'hover:bg-blue-600');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
            button.classList.add('bg-green-500', 'hover:bg-green-600');
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
});