function dropdownhandle () {
    this.classList.toggle("active") //turns on and off the active class
    var content = this.nextElementSibling; 
    if (content.style.maxHeight){ // the content is at max height, makes it null
        content.style.maxHeight = null;
    }
    else{ // id the content has no value, aka null, makes mac height the scroll height
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

var dropd = document.getElementsByClassName("dropdown")


for (let i=0; i<dropd.length ; i++)
     //goes through all dropdowns
    {
        dropd[i].addEventListener("click", dropdownhandle) //does the function if the event "click"
    }