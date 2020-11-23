function changeOptions(value) {
    if (value == "video") // If type of download is video
    {
        var option1 = document.getElementById("media-quality-1");
        option1.innerText = "480p";
        option1.value = "480";

        var option2 = document.getElementById("media-quality-2");
        option2.innerText = "720p";
        option2.value = "720";

        var option3 = document.getElementById("media-quality-3");
        option3.innerText = "1080p";
        option3.value = "1080";

        var format1 = document.getElementById("media-format-1");
        format1.innerText = "mp4";
        format1.value = "mp4";

        var format2 = document.getElementById("media-format-2");
        format2.innerText = "mkv";
        format2.value = "mkv";

        var format3 = document.getElementById("media-format-3");
        format3.innerText = "avi";
        format3.value = "avi";
    } else {
        var option1 = document.getElementById("media-quality-1");
        option1.innerText = "128 kbps";
        option1.value = "128";

        var option2 = document.getElementById("media-quality-2");
        option2.innerText = "256 kbps";
        option2.value = "256";

        var option3 = document.getElementById("media-quality-3");
        option3.innerText = "320 kbps";
        option3.value = "320";

        var format1 = document.getElementById("media-format-1");
        format1.innerText = "mp3";
        format1.value = "mp3";

        var format2 = document.getElementById("media-format-2");
        format2.innerText = "m4a";
        format2.value = "m4a";

        var format3 = document.getElementById("media-format-3");
        format3.innerText = "ogg";
        format3.value = "ogg";
    }
}


function sendDataToPython() {
    validateForm();
    htmlForm = document.getElementById("downloadForm");
    var dataToSend = {
        "url": htmlForm.elements.mediaUrl.value,
        "mediaType": htmlForm.elements.downloadType.value,
        "format": htmlForm.elements.mediaFormat.value,
        "quality": htmlForm.elements.mediaQuality.value,
    }
    console.log(dataToSend);
    eel.processData(dataToSend);
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