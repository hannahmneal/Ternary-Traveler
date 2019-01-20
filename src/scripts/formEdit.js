// 1. Create an edit button for the display cards in domTransform; Append in domAppend
      // Remove the dropdown, review  fields from the first entry in dataTransform; When the user creates a place for the first time, form fields should only contain name, cost and description.
// 2. When a card is generated, an "edit" and "delete" button should be visible.
      // a. If edit is clicked, the form will generate but it will have a review field and the user will also be able to edit the cost
          // This will be a "PUT" request
          // b. If the user wants to edit the same information for a second time, it will be a PATCH request
     // c. If delete is clicked, the card will be deleted from the display and the drop-down.

// DONE // Use "cost" as your starting point.
// DONE // Cost is displayed with the rest of the interest info in the display section.
// DONE // Add an edit and delete button
// Attach a handler to the edit button.
    // The handler will send a "PUT" or PATCH to the api
        // DONE: created a PATCH in data.js, patchInterests()
        // Import patchInterests() here
    // Go through the steps of "refreshing" the api
    // populate the display with the new cost info

import fetchData from "./data";

const editInterest = {
    handleEdit() {

        fetchData.patchInterests().then(c => {
                console.log("Hello c!");
            })
        }
        //Created simple handle to console.log; attach to edit button.


        // Separate divs for "editable" content; can be selected and appended separately
        // Copied from domAppend and pasted here
        // $("<div>").attr({"id":"cost-edit"}).appendTo(displayCardsContainer)
        // $("<p>").text(s.cost).appendTo("#cost-edit")
        // $("<div>").attr({"id":"review-edit"}).appendTo(displayCardsContainer)
        // $("<p>").text(s.review).appendTo("#review-edit")
    }

    export default editInterest
