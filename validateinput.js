function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname"). value;
    console.log(firstName);
    let lastName = document.getElementById("lname"). value;
    console.log(lastName);
    let zip = document.getElementById("zip"). value;
    console.log(zip);

    let firstLast  = firstName + " " + lastName;
    console.log(firstName);

    if(firstLast.length < 2){
        alert("Not enough characters. First and last name must have at least 2 characters.");
        return;
    }
    console.log("Valid first and last name!");

    let parsedZip = parseInt(zip);
    console.log(parsedZip);
    if(zip.length != 5 || !Number.isInteger(parsedZip)){
        alert("Invalid zip code. ZIp must be a number of 5 digits. ");
        return;
    }
    console.log(parseInt("33"));

    console.log("Zip valid!")
}



    window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm")
    if (form) {
        form,addEventListener("submit", validateInput)
    }
})