const notificationKey = 'notifications';

const defaultNotifications = [
    'John Doe sent a message',
    'Someone viewed your profile',
    'John Doe sent a message',
    'Someone viewed your profile',
    'John Doe sent a message'
];

if (!localStorage.getItem(notificationKey)) {
    localStorage.setItem(notificationKey, JSON.stringify(defaultNotifications));
}



function loadNotifications() {
    const notifications = JSON.parse(localStorage.getItem(notificationKey)) || [];

    const dropdown = document.getElementById('notificationDropdown');
    const counter = document.getElementById('notificationCount');

    dropdown.innerHTML = '';

    for (let i = 0; i < notifications.length; i++) {
        const p = document.createElement('p');
        p.className = 'notificationdropdowntext';
        p.textContent = notifications[i];
        dropdown.appendChild(p);
    }

    counter.textContent = notifications.length;
}




document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('notificationIcon');
    const dropdown = document.getElementById('notificationDropdown');


    loadNotifications();




    icon.addEventListener('click', function () {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });



});
