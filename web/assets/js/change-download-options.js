function changeOptions(value) {
    if (value == "video") // If type of download is video
    {
        var option1 = document.getElementById("media-quality-1");
        option1.innerText = "480p";

        var option2 = document.getElementById("media-quality-2");
        option2.innerText = "720p";

        var option3 = document.getElementById("media-quality-3");
        option3.innerText = "1080p";

        var format1 = document.getElementById("media-format-1");
        format1.innerText = "mp4";
        var format2 = document.getElementById("media-format-2");
        format2.innerText = "mkv";
        var format3 = document.getElementById("media-format-3");
        format3.innerText = "avi";
    } else {
        var option1 = document.getElementById("media-quality-1");
        option1.innerText = "128 kbps";

        var option2 = document.getElementById("media-quality-2");
        option2.innerText = "256 kbps";

        var option3 = document.getElementById("media-quality-3");
        option3.innerText = "320 kbps";

        var format1 = document.getElementById("media-format-1");
        format1.innerText = "mp3";

        var format2 = document.getElementById("media-format-2");
        format2.innerText = "m4v";

        var format3 = document.getElementById("media-format-3");
        format1.innerText = "ogg";
    }
}


function sendDataToPython() {
    validateForm();
    htmlForm = document.getElementById("downloadForm");
    console.log(htmlForm.elements.mediaUrl.value);
    console.log(htmlForm.elements.mediaFormat.value);
    console.log(htmlForm.elements.downloadType.value);
    console.log(htmlForm.elements.mediaQuality.value);
}

function validateForm() {
    var x = document.forms["downloadForm"]["mediaUrl"].value;
    if (!isValidUrl(x)) {
        alert("Please enter a valid URL");
        return false;
    }
}

function isValidUrl(string) {
    try {
        new URL(string);
    } catch (_) {
        return false;
    }

    return true;
}