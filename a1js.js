
const firstnameinput = document. getElementById("firstname");
const lastnameinput = document. getElementById("lastname");
const emailinput = document. getElementById("email");
const ageinput = document. getElementById("age");
const savebutton = document. getElementById("save");

        
savebutton.addEventListener("click", function(e){
	e.preventDefault();
const newTr = document.createElement("tr");
document.getElementById("tbody").append(newTr);

const newfirstname = document.createElement("td");
newfirstname.innerText = firstnameinput.value;
newTr.append(newfirstname);

const newlastname = document.createElement("td");
newlastname.innerText = lastnameinput.value;
newTr.append(newlastname);

const newemail = document.createElement("td");
newemail.innerText = emailinput.value;
newTr.append(newemail);

const newage = document.createElement("td");
newage.innerText = ageinput.value;
newTr.append(newage);

});


let sum = 0;

for (let i = 1; i <= 3; i++) {
    let userInput = parseFloat(prompt(`Enter number #${i}:`));

    if (isNaN(userInput)) {
        console.log("Invalid input. Please enter a valid number.");
        break;
    }

    sum += userInput;
}

document.write(`The sum of the entered numbers is: ${sum}`);

