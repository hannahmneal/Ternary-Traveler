// This module transform data from the API into HTML elements that can be appended to the DOM
// Build out the HTML elements necessary to capture information the user enters via the form

const domAppender = {
    transformData(s) {

        let displayCardsContainer = $("div").attr({"class":"cards-container", "id": "cards-display"})
        // console.log(displayCardsContainer);

        // displayCardsContainer.appendTo("#cards-display")

        // Given a user already has points of interests
        // When the user opens the application, all points of interests should be displayed with their:
        // name,
        // description,
        // cost,
        // review if it's not blank and
        // the place it is located

        $("<h4>").text(s.name).appendTo(displayCardsContainer)
        $("<p>").text(s.description).appendTo(displayCardsContainer)
        $("<p>").text(s.place).appendTo(displayCardsContainer)
        $("<p>").attr({"id":"cost", "contentEditable": false}).text(s.cost).appendTo(displayCardsContainer)
        // It is not necessary to declare a variable before creating and appending the elements; jQuery doesn't care about that.
        // Therefore, this: let cardContentDesc = $("<p>").attr({"id": "card-content-desc"}).appendTo(displayCardsContainer) is incorrect for jQ.

        $("<button>").attr({"id": "edit-btn", "type": "submit"}).text("Edit").appendTo(displayCardsContainer)
        // .click((event) => {event.preventDefault(); editInterest.handleEdit()})
        $("<button>").attr({"id": "delete-btn", "type": "submit"}).text("Delete").appendTo(displayCardsContainer)
        // .click((event) => {event.preventDefault(); editInterest.handleDelete()})
        $("<button>").attr({"id": "save-btn", "type": "submit"}).text("Save").appendTo(displayCardsContainer)
        // .click((event) => {event.preventDefault(); editInterest.handleSave()})
        // The .click is for the edit form later; the modele and methods have not been created yet

        
        return displayCardsContainer    // You have to include a "return"!
    },
    transformEdited(int) {
        // Should return a log of the interests retrieved from the fetch call in dataTransform
        // console.log();
        // Separate divs for "editable" content; can be selected and appended separately; try using "contenteditable" method for cost and review
        

    }
}

export default domAppender