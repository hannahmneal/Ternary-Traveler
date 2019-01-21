// This module transform data from the API into HTML elements that can be appended to the DOM
// Build out the HTML elements necessary to capture information the user enters via the form
import form from "./form"

const domAppender = {

    transformData(entry) {

        let displayCardsContainer = $("#cards-display")
        // console.log(displayCardsContainer);

        // displayCardsContainer.appendTo("#cards-display")

        // Given a user already has points of interests
        // When the user opens the application, all points of interests should be displayed with their:
        // name,
        // description,
        // cost,
        // review if it's not blank and
        // the place it is located

        // Interest dataset:
        // {
        //     "placeId": "",       // Ask about this
        //     "name": "",
        //     "description": "",
        //     "cost": "",
        //     "place": "",
        //     "review": "",
        //     "id": ""             // Ask about this
        //   }


        // let displayCardsContainer = $("div")
        // displayCardsContainer.appendTo(displayCardsContainer)
        $("<h4>").text(entry.name).appendTo(displayCardsContainer)
        $("<p>").text(entry.description).appendTo(displayCardsContainer)
        $("<p>").text(entry.place).appendTo(displayCardsContainer)
        $("<p>").text(entry.cost).appendTo(displayCardsContainer)
        // $("<p>").attr({"id":"cost", "contentEditable": false}).text(entry.cost).appendTo(displayCardsContainer) // I want to use contentEditable to change this to an editable field upon "click"
        // It is not necessary to declare a variable before creating and appending the elements; jQuery doesn't care about that.
        // Therefore, this: let cardContentDesc = $("<p>").attr({"id": "card-content-desc"}).appendTo(displayCardsContainer) is incorrect for jQ.

//============================================      EDIT BUTTON     =====================================================================

        $("<button>").attr({"id": "edit-btn","type": "submit"}).text("Edit").appendTo(displayCardsContainer)
        // .click((event) => {event.preventDefault(); editInterest.handleEdit()})

//======================================    HANDLE DELETE AND CAPTURE ENTRY "ID"    ===============================================
// This feature requires an affordance that includes a "cancel" option:
        // In the event handler for the delete button, implement an alert to ask the user whether they are sure they want to delete
        // If the user clicks, "yes", delete
        // If the user clicks, "no", break the handle event

        $("<button>").attr({"class": "delete-btn", "id": `${entry.id}`,"type": "submit"}).click((event) => {form.deleteHandler()}).text("Delete").appendTo(displayCardsContainer)
        // In order to capture the "id" value of the API entry in the "places" array,
        //set the button attribute id like this:
        // .attr({"id": `${entry.id}`})
        // When the browser is refreshed and the button element inspected, the "id" will be equal to the first entry's id (in this case, it shows id=1)
        // $(".delete-btn").click((event) => {form.deleteHandler()})

        //============================================      SAVE BUTTON     =====================================================================================
// The save button needs to trigger a handler that sends PATCH to the API and updates the cards display

        $("<button>").attr({"id": "save-btn", "type": "submit"}).text("Save").appendTo(displayCardsContainer)
        // .click((event) => {event.preventDefault(); editInterest.handleSave()})
        // The .click is for the edit form later; the module and methods have not been created yet

//=================================================================================================================================

        return displayCardsContainer   // You have to include a "return"!

//======================================  TRANSFORM-HTML METHOD FOR EDITED CONTENT =====================================================
// Create a method that loops through getInterests and builds display cards for edited content; ideally, it will reuse the original form

    // transformEdited(int) {
    //     // Should return a log of the interests retrieved from the fetch call in dataTransform
    //     // console.log();
    //     // Separate divs for "editable" content; can be selected and appended separately; try using "contenteditable" method for cost and review

    // }

    // return displayEditedContainer
    }
}
export default domAppender