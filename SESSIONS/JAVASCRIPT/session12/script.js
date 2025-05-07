let notificationInterval;
const defaultTitle = "Notification Library";
const bellFavicon = "bell.png";
const starFavicon = "star.png";

function startNotification(text) {
    endNotification();
    const favicon = document.querySelector("#favicon");

    notificationInterval = setInterval(() => {
        if (document.title === defaultTitle) {
            document.title = text;
            favicon.href = bellFavicon; 
        } 
        else {
            document.title = defaultTitle;
            favicon.href =  starFavicon; 
        }
    }, 1000);
}

function endNotification() {
    clearInterval(notificationInterval);
    document.title = defaultTitle;
    document.querySelector("#favicon").href =  starFavicon;
}

