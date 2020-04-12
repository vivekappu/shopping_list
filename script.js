var button=document.querySelector('button');
var list=document.querySelector('ul');
var input=document.querySelector("input");
var deletebuttons=document.querySelectorAll("li button");

/* function returns input string length */
function inputLength(){
    return input.value.length;
}


/* function to add list after mouse clicking on add button */
function addListAfterClick(){
    if(inputLength()>0 ){
        var newitem=document.createElement("li");
        var newbutton=document.createElement("button");
        newbutton.innerHTML="delete";
        newitem.innerHTML=input.value;
        newitem.appendChild(newbutton);
        list.appendChild(newitem);
        input.value="";
        newbutton.addEventListener("click",deleteAfterClick);
        newitem.addEventListener("click",addEventtoMark);
    }
}
/* function to add list after keypress (enter key)*/
function addListAfterKeypress(e){
    if(input.value.length>0 && e.keyCode===13){
        var newitem=document.createElement("li");
        var newbutton=document.createElement("button");
        newbutton.innerHTML="delete";
        newitem.innerHTML=input.value;
        newitem.appendChild(newbutton);
        list.appendChild(newitem);
        input.value="";
        newbutton.addEventListener("click",deleteAfterClick);
        newitem.addEventListener("click",addEventtoMark);
    }
}
/* adding event listeners to add button and input elements */
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

/* function to delete list  */
function deleteAfterClick(event){
    event.target.parentNode.remove();
    }
/*function to add event listeners to all the list elements */
function addEventtodeleteButton(item){
    item.addEventListener("click",deleteAfterClick);
}
/* function to mark the list (indicates finished item)*/
function addEventtoMark(event){
   event.target.classList.toggle("done");
}
/* function to add event listeners to all the lists */
function AddEventtoMarkforeachElement(item){
    item.addEventListener("click",addEventtoMark);
}
/* adding event listners to buttons and list elements and passing respective functions */
deletebuttons.forEach(addEventtodeleteButton);
list.childNodes.forEach(AddEventtoMarkforeachElement);


