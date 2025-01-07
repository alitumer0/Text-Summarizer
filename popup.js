document.getElementById("summarizeBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;

    if (text.length > 0) {
        const summary = summarizeText(text);
        document.getElementById("output").innerText = summary;
    } else {
        document.getElementById("output").innerText = "Please enter some text!";
    }
});

function summarizeText(text) {
    const sentences = text.split(".");
    const shortSummary = sentences.slice(0, 2).join(".") + ".";
    return shortSummary;
}
