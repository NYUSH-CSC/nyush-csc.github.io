const members = {
    "A":"aaa@sendaemail.com",
    "B":"bbbb@sendaemail.com",
    "C":"ccccc@sendaemail.com",
    "D":"dd@sendaemail.com",
    "E":"e@sendaemail.com"};
document.getElementById("Search Form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("searchName").value.trim();
    const result= document.getElementById("searchResult");
    const contact= document.getElementById("contactsection");
    const addNewMember= document.getElementById("AddNewMember");
    contact.style.display = "none";
    addNewMember.style.display = "none";
    if (members[name]) {
        result.innerHTML = "Team Member Found";
        contact.style.display = "block";
    }
    else {
        result.innerHTML = "No Team Member Found. Would you like to add "+name+" to the Team?";
        const newname = document.getElementById("Name");
        newname.innerHTML="Name: "+name;
        addNewMember.style.display = "block";
    }
});
document.getElementById("Contact Form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("searchName").value.trim();
    const subject = document.getElementById("contactsubject").value;
    const message = document.getElementById("contactmessage").value;
    const result= document.getElementById("searchResult");
    alert("Message sent to " + name+" ("+members[name] +")"+ " with subject: " + subject);
    document.getElementById("contactsubject").value = "";
    document.getElementById("contactmessage").value = "";
    document.getElementById("searchName").value = "";
    result.innerHTML = "";
    document.getElementById("contactsection").style.display = "none";
});
document.getElementById("Add Member Form").addEventListener("submit", function(event) {
    event.preventDefault();
    const addNewMember= document.getElementById("AddNewMember");
    const name = document.getElementById("searchName").value.trim();
    const role = document.getElementById("newmemberrole").value.trim();
    let email = document.getElementById("newmemberemail").value.trim();
    if (!email.endsWith("@sendaemail.com")) {
        const userconfirm=window.confirm("Please enter a valid email ending with @sendaemail.com, would you like me to add this for you");
        if (!userconfirm){
            return;
        }
        else {
            email = email + "@sendaemail.com";
        }
    }
    const result= document.getElementById("searchResult");
    alert(name + " has been added to the Team with role: " + role);
    document.getElementById("teamlist").innerHTML +=`<div class="member">${name} - ${role}</div>`;
    members[name]=email;
    document.getElementById("newmemberrole").value="";
    document.getElementById("newmemberemail").value="";
    document.getElementById("searchName").value = "";
    result.innerHTML = "";
    addNewMember.style.display = "none";
});
