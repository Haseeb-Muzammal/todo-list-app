console.log("JS file attached Successfully.");

let inputBox = document.getElementById("inputBox");
let toDoList = document.getElementById("toDoItems");
let addInList = document.getElementById("addBtn");

let saveBtn = document.getElementById("saveBtn");

let toDoArray = JSON.parse(localStorage.getItem("toDoArray")) || [];

let addMenu = document.getElementById("create-item-modal");

addMenu.style.display = "none";


for (let i = 0; i < toDoArray.length; i++) {

    toDoList.innerHTML +=
        "<li>" +
        toDoArray[i] +
        "<i class='bx bx-trash deleteBtn'></i>" +
        "</li>";
}
let deleteBtn = document.querySelectorAll(".deleteBtn");
const delete_Item = (e) => {

    for (let i = 0; i < deleteBtn.length; i++) {

        if (e.target === deleteBtn[i]) {
            toDoArray.splice(i, 1);
            localStorage.setItem("toDoArray",JSON.stringify(toDoArray));
            let removeItem = deleteBtn[i].parentElement;
            removeItem.remove();
            deleteBtn = document.querySelectorAll(".deleteBtn");
            break;
        }
    }
};

for (let i = 0; i < deleteBtn.length; i++) {
deleteBtn[i].addEventListener("click",delete_Item);
}

const addItemfunc = addItem = () => {

    toDoList.innerHTML = "";
    let inputValue = inputBox.value.trim();
    if (inputValue === "") {

        alert("Please Fill the fields to proceed.");

        return;
    }
    toDoArray.unshift(inputValue);
    localStorage.setItem("toDoArray", JSON.stringify(toDoArray) );
    for (let i = 0; i < toDoArray.length; i++) {

        toDoList.innerHTML +=
            "<li>" +
            toDoArray[i] +
            "<i class='bx bx-trash deleteBtn'></i>" +
            "</li>";
    }
    deleteBtn = document.querySelectorAll(".deleteBtn");    
    for (let i = 0; i < deleteBtn.length; i++) 
        {
        deleteBtn[i].addEventListener("click",delete_Item);
        }
        inputBox.value="";
};

saveBtn.addEventListener("click", addItemfunc);

let clearBtn = document.getElementById("clearbtn");
const clickedClearButton = clearAllBtn = () => {

    toDoArray = [];
    toDoList.innerHTML = "";
    localStorage.removeItem("toDoArray");
};


clearBtn.addEventListener("click",clickedClearButton);




const add_Menu_Open_Func = () => {

    if (addMenu.style.display === "none") {

        addMenu.style.display = "block";

        addMenu.style.backgroundColor = "lightblue";

    } else {

        addMenu.style.display = "none";

        addMenu.style.backgroundColor = "";
    }
};


addInList.addEventListener("click",add_Menu_Open_Func);