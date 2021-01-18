var teamElement = document.getElementById("goAboutus");
var contactsElement = document.getElementById("goContacts");

teamElement.addEventListener('click', function(){
    document.getElementById("team").scrollIntoView();
});

contactsElement.addEventListener('click', function(){
    document.getElementById("contacts").scrollIntoView();
});