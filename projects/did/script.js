// Variables 
const entrySubmit = document.querySelector(".submit_new"); 
const divContainer = document.getElementById("div-container"); 
const dateValue = document.getElementById("date_entry");
const divCounter = document.querySelector(".counter");
// Entire Div of Coded Entries 
const divCodedEntries = document.getElementsByClassName("coded-entries");
// The Array That Holds all Divs. 
const divArray = [];

// Event listener for the .submit class that runs a function called AddNewDate 
entrySubmit.addEventListener("click", AddNewDate); 

//This Function Adds New Dates. It runs when you click the "Submit" button.
function AddNewDate() {                             
// Declaring newDiv variable, which creates a new div.  These divs are being created, but are currently not going anywhere on the HTML. Adds the classlist "coded-entries" to newDiv variables. 
    const newDiv = document.createElement("div");   
    newDiv.className = "coded-entries";    
// Creates a li element. This is not going anywhere on the HTML. Adds the class list of entry-list to the li HTML elements.     
    const newEntry = document.createElement('li');
    newEntry.classList.add('entry-list');

// Declares a variable that creates a div element. Gives the dateValueFormat div a classname of "date-entry-text"
    let dateValueFormat = document.createElement("div"); 
    dateValueFormat.className = "date-entry-text";

// Gives the dateValueFormat div a value of dateValue which is = to dateValueInput 
    dateValueFormat = dateValue.value;

// Creates the correct date within the input. 
    let finalFormat = dateValueFormat.slice(5, 7) + "/" + dateValueFormat.slice(8, 10) + "/" + dateValueFormat.slice(0, 4); 
	let dateDiv = document.createElement("div");
	dateDiv.className = "date-of-new-entries";
	let entryCounter = divArray.length + 1;
	dateDiv.innerText = `${entryCounter}. ${finalFormat}`;
// Creates a text entry input and gives it class name of "what-did-you"
    let textEntry = document.createElement('input');
    textEntry.className = "what-did-you-learn";
	
//Trash Button
	const trashBtn = document.createElement('button');
	trashBtn.innerText = "Delete";
	trashBtn.classList.add("trash-btn");
	trashBtn.addEventListener("click", removeDateEntry);
	trashBtn.addEventListener("click", removeDateCounter);

// Save Button
	const saveBtn = document.createElement('button');
	saveBtn.innerText = "Save";
	saveBtn.classList.add("trash-btn");
	saveBtn.addEventListener('click', saveEntry);

// Appending Items 
	divContainer.appendChild(newDiv);
	newDiv.appendChild(newEntry);
	newEntry.append(trashBtn);
	newEntry.append(saveBtn);
    newEntry.append(textEntry);
	newEntry.append(dateDiv);

// Making the List appear in reverse Order 
// DivArray is an empty array. We are pushing (adding to end) a newDiv (newEntry) with a classlist of "coded-entries" and value of date.Value.value.  
    divArray.push(newEntry);
// The last array item is now in the variable lastDivArray                      
    let lastDivArray = divArray[divArray.length - 1];
// The lastDivArray (which is the last divarray) item is now the first array. 
    divArray.unshift(lastDivArray);                      
    divArray.pop(lastDivArray);  
// Adding divArray[0], which is newDiv (which creates a new div with a classlist of coded-entries) to the divContainer varaible. 
    divContainer.prepend(divArray[0]); 
	console.log(divArray);              

// Div Counter
   let divCount = divArray.length;
   divCounter.innerText = divCount;     
}

// Today's Current Date as default in correct format within the Calendar 
let today = new Date();                 
let dd = today.getDate();
    if (dd < 10) {
        dd = "0" + dd; 
    }
let mm = today.getMonth() + 1;
    if (mm < 10) {
         mm = "0" + mm;
    }
let yyyy = today.getFullYear();
let dateInputValue = yyyy + "-" + mm + "-" + dd;
                                     
dateValue.value = dateInputValue; 

function removeDateEntry(e) {
   const removeEntry = e.target;
   if (removeEntry.classList[0] === "trash-btn") {
       const trash = removeEntry.parentElement;
       trash.remove();   
   }
   let divCount = divArray.length;
   divCounter.innerText = divCount;
}

function removeDateCounter() {
    divArray.splice(1, 1);
    let divCount = divArray.length;
    if (divArray.length === 1) {
        divArray.pop();
        divCounter.innerText = "1";
    } else {
        divCounter.innerText = divCount; 
    } 
}

function saveEntry() {
	console.log("test")
}