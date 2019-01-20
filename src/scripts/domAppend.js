// This module transform data from the API into HTML elements that can be appended to the DOM
// Build out the HTML elements necessary to capture information the user enters via the form
import editInterest from "./formEdit"


const domAppender = {
    transformData(s) {
        
        let displayCardsContainer = $("div").attr({"class":"cards-container"})
        console.log(displayCardsContainer);
        
        displayCardsContainer.appendTo("#cards-display")
        
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
        $("<p>").text(s.cost).appendTo(displayCardsContainer)
        

        // // Separate divs for "editable" content; can be selected and appended separately
        // Copied and pasted the following into formEdit; try use them there when the edit or delete buttons here are invoked.
        // $("<div>").attr({"id":"cost-edit"}).appendTo(displayCardsContainer)
        // $("<p>").text(s.cost).appendTo("#cost-edit")
        // $("<div>").attr({"id":"review-edit"}).appendTo(displayCardsContainer)
        // $("<p>").text(s.review).appendTo("#review-edit")
        // The "review" feature should only be displayed if the user clicks "edit" on the card and adds the review.

        // Create edit and delete buttons, then attach them to a handler that taps the API for PUTS, PATCHES, and DELETES:
        $("<button>").attr({"id":"edit-content-btn"}).text("Edit").click((event) => {event.preventDefault(); editInterest.handleEdit()}).appendTo(displayCardsContainer)
        $("<button>").attr({"id":"delete-content-btn"}).text("Delete").appendTo(displayCardsContainer)

        // It is not necessary to declare a variable before creating and appending the elements; jQuery doesn't care about that.
        // Therefore, this: let cardContentDesc = $("<p>").attr({"id": "card-content-desc"}).appendTo(displayCardsContainer) is incorrect for jQ.

        return displayCardsContainer    // You have to include a "return"!
    }
}
export default domAppender