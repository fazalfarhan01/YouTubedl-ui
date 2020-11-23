function updateDate() {
    Date.prototype.toShortFormat = function () {

        let monthNames = ["January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];

        let day = this.getDate();

        let monthIndex = this.getMonth();
        let monthName = monthNames[monthIndex];

        let year = this.getFullYear();

        return `${monthName} ${day}, ${year}`;
    }
    var dateContainer = document.getElementById("current-date");
    let today = new Date();
    dateContainer.innerText = today.toShortFormat();
}