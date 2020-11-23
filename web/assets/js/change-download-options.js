function changeOptions(value) {
    if (value == 0) // If type of download is video
    {
        var option1 = document.getElementById("select-quality-1");
        option1.innerText = "480p";

        var option2 = document.getElementById("select-quality-2");
        option2.innerText = "720p";

        var option3 = document.getElementById("select-quality-3");
        option3.innerText = "1080p";
    } else {
        var option1 = document.getElementById("select-quality-1");
        option1.innerText = "128 kbps";

        var option2 = document.getElementById("select-quality-2");
        option2.innerText = "256 kbps";

        var option3 = document.getElementById("select-quality-3");
        option3.innerText = "320 kbps";
    }
}