// Appends elements created in dataTransform to DOM
// Displays the current interests; calls data form when "new interest" is clicked.
// import dataTransform
// import form from "./form"
// import createElements from "./dataTransform"

// form.createInputForm()

const domAppender = {
    transformData(s) {       // This method is "domBuilder()" in flow-chart
    // transform data from the API into HTML elements that can be appended to the DOM
        // Build out the HTML elements necessary to capture information the user enters via the form
        
        let displayCardsContainer = $("div").attr({"class":"cards-container"})
        console.log(displayCardsContainer);
        
        displayCardsContainer.appendTo("#cards-display")
        
        // Given a user already has points of interests
        // When the user opens the application, all points of interests should be displayed with their:
        //  name,
        // description,
        // cost,
        // review if it's not blank and
        // the place it is located
        $("<h4>").text(s.name).appendTo(displayCardsContainer)
        $("<p>").text(s.description).appendTo(displayCardsContainer)
        $("<p>").text(s.cost).appendTo(displayCardsContainer)
        $("<p>").text(s.place).appendTo(displayCardsContainer)
        $("<p>").text(s.review).appendTo(displayCardsContainer)

        // let cardContentDesc = $("<p>").attr({"id": "card-content-desc"}).appendTo(displayCardsContainer)
        // let cardContentCost = $("<p>").attr({"id": "card-content-cost"}).appendTo(displayCardsContainer)
        // let cardContentReview = $("<p>").attr({"id": "card-content-review"}).appendTo(displayCardsContainer)
        // let cardContentPlace = $("<p>").attr({"id": "card-content-place"}).appendTo(displayCardsContainer)
        return displayCardsContainer
    }
}
export default domAppender