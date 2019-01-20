// Use "cost" as your starting point.
// Cost is displayed with the rest of the interest info in the display section.
// Add an edit, save, and delete button to the display
// When the edit button is clicked, the "cost" section will be reopened as an input
// Create an object in the handler function that contains only the editable properties (cost, review)
//========================== displayEdit =============================================================
// Capture the user input (in the same way as the original form)
// Connect the edited user input you captured to it's matching property in the new editObject
// Create a PATCH request in data.js, patchInterests()
// Attach a handler to the save button that will invoke the PATCH request in data.js
// Link the edited information with the correct id of the existing object in the API
// Recycle the original form you created and simply add the fields you just edited
//====================================================================================================


import fetchData from "../data";
import form from "../form";
// import domAppender from "../domAppend";     // This is for the recycled form. You will add the edited data to it.

const editInterest = {
    createEditForm() {

        // $("<button>").attr({"id": "edit-btn", "type": "submit"}).text("Edit").click((event) => {event.preventDefault(); form.handleEdit()}).appendTo(form.createInputForm().formContainer)
        // $("<button>").attr({"id": "delete-btn", "type": "submit"}).text("Delete").click((event) => {event.preventDefault(); form.handleDelete()}).appendTo(formContainer)
        // $("<button>").attr({"id": "save-btn", "type": "submit"}).text("Save").click((event) => {event.preventDefault(); form.handleSave()}).appendTo(formContainer)



        form.createInputForm()

        let costContainer = $("<fieldset>").appendTo(formContainer)
        let costField = $("<input>").attr({"id": "cost-field","type": "text", "placeholder": "Cost"}).text("Cost")
        $(costField).appendTo(costContainer)

        $("<div>").attr({"id":"cost-edit"}).appendTo(displayCardsContainer)
        $("<p>").text(s.cost).appendTo("#cost-edit")

    },

    handleEdit() {
        console.log("edit");
        
    },
    handleDelete() {
        console.log("delete");

    },
    handleSave() {
        console.log("save");

    }

}


    export default editInterest
