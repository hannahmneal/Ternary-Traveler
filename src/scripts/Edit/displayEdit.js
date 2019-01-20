import domAppender from "../domAppend";
import formEdit from "../Edit/formEdit"
// Capture the user input (in the same way as the original form)
// Connect the edited user input you captured to it's matching property in the new editObject
// Create a PATCH request in data.js, patchInterests()
// Attach a handler to the save button that will invoke the PATCH request in data.js
// Link the edited information with the correct id of the existing object in the API
// Recycle the original form you created and simply add the fields you just edited



// const createEditedDisplay = {
//     transformEditedData() {
//         domAppender.transformData(s)

//         let editedDisplayContainer = $("<div>").attr({"id":"cost-edit"}).appendTo(editedDisplayContainer)
//         editedDisplayContainer.appendTo("#cards-display")
//         $("<p>").text(c.cost).appendTo("#cost-edit")
//         $("<div>").attr({"id":"review-edit"}).appendTo(editedDisplayContainer)
//         $("<p>").text(c.review).appendTo("#review-edit")

//     return editedDisplayContainer
//     }
// }

// export default createEditedDisplay

const displayEditedForm = {
    displayEdit() {

        formEdit.createEditForm()
    }

}
export default displayEdit
