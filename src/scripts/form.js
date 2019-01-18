// Captures user input
// Handles button click
// Posts to API
// import data module

console.log("form.js");
import fetchData from "./data.js"

const form = {
    createInputForm() {
        
        let formSection = $("#form-display")
        let formContainer = $("<form>").addClass("form-container").appendTo(formSection)
        
        let formHeader = $("<h3>").text("Enter Information")
        let formHeaderFragment = document.createDocumentFragment() // create fragment
        $(formHeader).appendTo(formHeaderFragment).appendTo(formContainer)    //append fragment to DOM
        
         let nameContainer = $("<fieldset>").appendTo(formContainer)

        let nameField = $("<input>").attr({"id": "name-field","type": "text", "placeholder": "Name"}).text("Interest Name")
        let nameFieldFragment = document.createDocumentFragment()
        $(nameField).appendTo(nameFieldFragment).appendTo(nameContainer)

        let formSubmitBtn = $("<button>").attr({"id": "form-submit-btn", "type": "submit"}).text("Submit").appendTo(formContainer)
        // formSubmitBtn.addEventListener("click", handleNewInterest())


},

        // Create a function to append the form fragments to the DOM by passing them in as arguments

handleNewInterest() {
    formSubmit.addEventListener("click", event => {
        // console.log("hello");

        const userInputName = $("form-container").value
            // console.log(userInputName);

            let newObj = {
                name: userInputName,
                // description: userInputDesc,
                // cost: userInputCost,
                // place: userInputPlace,
                // review: userInputReview
            }
            data.postPlaces(newObj)
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