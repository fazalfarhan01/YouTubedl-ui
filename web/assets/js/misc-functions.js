eel.expose(printStdout);
function printStdout(standardOutput) {
    var currentContent = document.getElementById("stdout-from-python");
    // currentContent.innerText = (currentContent.innerText + standardOutput);
    console.log(standardOutput);
}

eel.expose(setDownloadPercent);
function setDownloadPercent(percent) {
    var completed = percent/100;
    NProgress.set(completed);
    var heading = document.getElementById("mainHeading");
    if (percent >= 100) {
        heading.innerHTML = "Download Complete, Converting to proper format";
    }
    else{
        heading.innerText = "Please Wait. Downloading...";
    }
}