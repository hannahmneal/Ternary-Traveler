// Captures user input
// Handles button click
// Posts to API
// import data module

console.log("form.js");
import data from "./data.js"

const form = {
//     createInputForm() {
        
//         // let formContainer = document.getElementById("form-container")

//         // let interestForm = document.createElement("form")
//         // $(interestForm).appendTo(formContainer) //append fragment to DOM
        
//         // // let formHeader = document.createElement("h3")
//         // // $(formHeader).text("Enter New Interest")
//         // // let formHeaderFragment = document.createDocumentFragment() // create fragment
//         // // $(formHeader).appendTo(formHeaderFragment).appendTo(interestForm)    //append fragment to DOM
        
//         // let nameContainer = document.createElement("fieldset")

//         // let nameField = document.createElement("input")
//         // $(nameField).attr({"id": "name-field","type": "text"}).text("Interest Name")
//         // let nameFieldFragment = document.createDocumentFragment()
//         // $(nameField).appendTo(nameFieldFragment).appendTo(nameContainer).appendTo(interestForm)
// },

handleNewInterest() {
    let formSubmit = document.getElementById("form-submit")
    formSubmit.addEventListener("click", event => {
        // console.log("hello");

        const userInputName = document.getElementById("name-input").value
            // console.log(userInputName);

            let newPlacesObj = {
                name: userInputName
            }
            data.postPlaces(newPlacesObj)
            .then(place => {
                // dataTransform.DOMBuilder()
                // console.log();
                
            })
        })
    }
}


    //     let newInterestObj = {

    //     }
    // }



export default form
// the display module needs to capture this module and build the form out when "new interest" is created