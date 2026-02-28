function copyCode(button) {
    const code = button.parentElement.querySelector("pre code").innerText.trim();
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = "✅ Copied!";
        setTimeout(() => {
            button.textContent = "📋 Copy";
        }, 1500);
    });
}
