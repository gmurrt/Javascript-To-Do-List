
// function addItem(msg){
//     // var display = document.getElementById("display");
//     //display.innerHTML = "Edited Display";
//     var p = document.createElement('p');
//     p.innerHTML = String(msg);
//     document.body.appendChild(p);
// }

function getItem(msg){
    // Selecting the input element and get its value 
    var Item = {
        text: document.getElementById("myInput").value,
        status: "todo"        
    }


    //creating the p elent
    var p = document.createElement('p');

    //creating the button elements
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
//assigning text to p
    msg = Item.text;
    p.innerHTML = String(msg);

    //Appending
    document.body.appendChild(p);
    document.body.appendChild(doneBtn);
    document.body.appendChild(deleteBtn);

    doneBtn.onclick = function(event) {
        p.style.color = "green";
        // Item.status = "done";
        // console.log(Item.status);
      }
      deleteBtn.onclick = function(event) {
        p.style.display = 'none';   
        deleteBtn.style.display = 'none';  
        doneBtn.style.display = 'none';   
        // Item.status = "deleted";
        // console.log(Item.status);
      }
 
  
}