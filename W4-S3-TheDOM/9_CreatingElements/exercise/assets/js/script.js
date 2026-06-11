// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var sidebarListEl = document.querySelector('.sidebar ul');

var profileItemEl = document.createElement('li');
profileItemEl.textContent = 'Profile';
sidebarListEl.appendChild(profileItemEl);

var messagesItemEl = document.createElement('li');
messagesItemEl.textContent = 'Messages';
sidebarListEl.appendChild(messagesItemEl);
// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
