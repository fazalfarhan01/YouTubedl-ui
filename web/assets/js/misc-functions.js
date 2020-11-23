eel.expose(printStdout);
function printStdout(standardOutput) {
    var currentContent = document.getElementById("stdout-from-python");
    currentContent.innerText = (currentContent.innerText + standardOutput);
}