import form from "./form";

// Transforms API data to HTML elements
// import data

//Promise to pull data from API:

const createElements = {
    transformData() {       // This method is "domBuilder()" in flow-chart
    // transform data from the API into HTML elements that can be appended to the DOM
    // create empty HTML elements for the data to go in
        // Build out the HTML elements necessary to capture information the user enters via the form
        
        let displayCardsContainer = $("<div>").attr({"class":"cards-container"}).appendTo("#cards-display")
        
        // Given a user already has points of interests
        // When the user opens the application, all points of interests should be displayed with their:
        //  name,
        // description,
        // cost,
        // review if it's not blank and
        // the place it is located
        
        let cardHeader = $("<h4>").text("Place Card").appendTo(displayCardsContainer)

        let cardContentName = $("<p>").attr({"id": "card-content-name"}).appendTo(displayCardsContainer)
        // Can I make an array out of cardsContent and just loop through it??
        let cardContentDesc = $("<p>").attr({"id": "card-content-desc"}).appendTo(displayCardsContainer)
        let cardContentCost = $("<p>").attr({"id": "card-content-cost"}).appendTo(displayCardsContainer)
        let cardContentReview = $("<p>").attr({"id": "card-content-review"}).appendTo(displayCardsContainer)
        let cardContentPlace = $("<p>").attr({"id": "card-content-place"}).appendTo(displayCardsContainer)



    }

}

export default createElements