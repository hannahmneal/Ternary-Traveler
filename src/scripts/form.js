// Captures user input
// Handles button click
// Posts to API

console.log("form.js");
import fetchData from "./data.js"
import domAppender from "./domAppend.js";

const form = {
    createInputForm() {

        let formSection = $("#form-display")
        let formContainer = $("<form>").addClass("form-container").appendTo(formSection)

        let formHeader = $("<h3>").text("Enter Information")
        // let formHeaderFragment = document.createDocumentFragment() // create fragment
        $(formHeader).appendTo(formContainer)

        let nameContainer = $("<fieldset>").appendTo(formContainer)
        let nameField = $("<input>").attr({"id": "name-field","type": "text", "placeholder": "Name"})
        nameField.appendTo(nameContainer)

        let descContainer = $("<fieldset>").appendTo(formContainer)
        let descField = $("<input>").attr({"id": "desc-field","type": "text", "placeholder": "Description"})
        $(descField).appendTo(descContainer)

        let costContainer = $("<fieldset>").appendTo(formContainer)
        let costField = $("<input>").attr({"id": "cost-field","type": "text", "placeholder": "Cost", "contentEditable": false})
        $(costField).appendTo(costContainer)

        //DROPDOWN:
        let placeContainer = $("<fieldset>").appendTo(formContainer)
        let placeField = $("<select>").attr({"id": "place-field","type": "text"}).text("Place")
            fetchData.getPlaces().then(res => { // This fetch call is getting the list of places directly from the API.
                res.map(place => {
                    $("<option>").attr({"value": place.id}).text(place.name).appendTo(placeField) // place.id is the value of the place in the "places" array.
                })
            })
        $(placeField).appendTo(placeContainer)

        // REVIEW SECTION:
        let reviewContainer = $("<fieldset>").appendTo(formContainer)
        let reviewField = $("<input>").attr({"id": "review-field","type": "text", "placeholder": "Review"}).text("Review")
        $(reviewField).appendTo(reviewContainer)

        $("<button>").attr({"id": "form-submit-btn", "type": "submit"}).text("Submit").click((event) => {event.preventDefault(); form.handleNewInterest()}).appendTo(formContainer)
        // This is the correct syntax for creating a button and adding a "click" handler to it; notice that it uses form.handleNewInterest() on the second line and appends it to the formContainer as well.
        // even.preventDefault() in the handler prevents the page reloading in a loop; without it, every time the submit button is clicked, the page will continue to reload.
    },

    handleNewInterest(event) {
        // console.log("hello");

        let newInterestObj = {

            placeId: $("#place-field").val(),  // This needs to be assigned to the correct place id; Not sure how to target the value
            name: $("#name-field").val(),   // When using jQ, you .val() is a method; in vanilla JS, .value is sufficient.
            description: $("#desc-field").val(),
            cost: $("#cost-field").val(),
            place: $("#place-field").val(),
            review: $("#review-field").val()
           //The review should not be visible until the user enters it (via the "edit") feature on the display card.
        }
        console.log(newInterestObj.placeId);

        fetchData.postInterest(newInterestObj)
        .then(p => {
        })
    },

    deleteHandler(event) {
        console.log("goodbye");

        // $(placeId).this.event.target.id   // Not sure if this is correct

        //Commented this out to test the event.target code above:
        let deleteInterestObj = {
            name: $("#name-field").val(),
            description: $("#desc-field").val(),
            cost: $("#cost-field").val(),
            place: $("#place-field").val(),
            review: $("#review-field").val()
        }

            let delId = `${entry.id}`
            console.log(delId);

//Passed placeId in below to test
        fetchData.deleteInterest(deleteInterestObj) // Is it necessary to have the both elements in the fetch call as arguments?
        .then(del => {
            domAppender(transformData(deleteInterestObj))
        })
    }
}

export default form
// the display module needs to capture this module and build the form out when "new interest" is created