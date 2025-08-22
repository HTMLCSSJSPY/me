function copyCode(button) {
    const code = button.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = "✅ Copied!";
        setTimeout(() => {
            button.TextContent = "📋 Copy";
        }, 1500);
    });
}