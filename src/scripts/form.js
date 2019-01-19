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
        // let nameFieldFragment = document.createDocumentFragment()
        nameField.appendTo(nameContainer)

        let descContainer = $("<fieldset>").appendTo(formContainer)

        let descField = $("<input>").attr({"id": "desc-field","type": "text", "placeholder": "Description"}).text("Description")
        // let descFieldFragment = document.createDocumentFragment()
        $(descField).appendTo(descContainer)

        let costContainer = $("<fieldset>").appendTo(formContainer)

        let costField = $("<input>").attr({"id": "cost-field","type": "text", "placeholder": "Cost"}).text("Cost")
        // let costFieldFragment = document.createDocumentFragment()
        $(costField).appendTo(costContainer)

        let placeContainer = $("<fieldset>").appendTo(formContainer)

        let placeField = $("<select>").attr({"id": "place-field","type": "text", "placeholder": "Place"}).text("Place")
            fetchData.getPlaces().then(res => {
                res.map(place => {
                    $("<option>").attr("value", place.name).text(place.name).appendTo(placeField)
                })
            })
        // let placeFieldFragment = document.createDocumentFragment()
        $(placeField).appendTo(placeContainer)

        let reviewContainer = $("<fieldset>").appendTo(formContainer)

        let reviewField = $("<input>").attr({"id": "review-field","type": "text", "placeholder": "Review"}).text("Review")
        // let reviewFieldFragment = document.createDocumentFragment()
        $(reviewField).appendTo(reviewContainer)

        $("<button>").attr({"id": "form-submit-btn", "type": "submit"}).text("Submit").click((event) => {event.preventDefault(); form.handleNewInterest()}).appendTo(formContainer)

        // formSubmitBtn.addEventListener("click", handleNewInterest())


},

        // Create a function to append the form fragments to the DOM by passing them in as arguments

handleNewInterest(event) {
    // form.createInputForm().formSubmitBtn.addEventListener("click", event => {
        // console.log("hello");


            // console.log(userInputName);

            let newObj = {
                name: $("#name-field").val(),
                description: $("#desc-field").val(),
                cost: $("#cost-field").val(),
                place: $("#place-field").val(),
                review: $("#review-field").val()
            }

            fetchData.postPlaces(newObj)
            .then(p => {
                // dataTransform.DOMBuilder()
                // console.log();
            })
        // })
    }
}


    //     let newInterestObj = {

    //     }
    // }



export default form
// the display module needs to capture this module and build the form out when "new interest" is created