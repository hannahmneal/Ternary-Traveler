import fetchData from "../data.js"

// To use  the edit form:

// Handler: editHandler
    // Re-freshes page with a new form to edit with name, description and place fields pre-populated
        // To pre-populate certain fields, use input type = text instead of input
    // Attach the editHandler to the edit button
// Handler: saveHandler
    // Same as "submit" from original form (you probably don't have to create a new one)
// Use a PATCH instead of a PUT to send the edited content to the API
// Refresh the page using a GET (use specific id of the interest you want to get back)

const editForm = {
    createEditForm(entry) {

        let editFormSection = $("#form-display")
        let editFormContainer = $("<form>").addClass("edit-form-container").appendTo(editFormSection)

        let editFormHeader = $("<h3>").text("Enter Information")
        // let formHeaderFragment = document.createDocumentFragment() // create fragment
        $(editFormHeader).appendTo(editFormContainer)

        let editNameContainer = $("<fieldset>").appendTo(editFormContainer)
        let editNameField = $("<input>").attr({"id": "edit-name-field","type": "text", "placeholder": "Name", "readonly": true})
        editNameField.val(entry.name)
        editNameField.appendTo(editNameContainer)

        let editDescContainer = $("<fieldset>").appendTo(editFormContainer)
        let editDescField = $("<input>").attr({"id": "edit-desc-field","type": "text", "placeholder": "Description", "readonly": true})
        editDescField.val(entry.description)
        $(editDescField).appendTo(editDescContainer)

        let editCostContainer = $("<fieldset>").appendTo(editFormContainer)
        let editCostField = $("<input>").attr({"id": "edit-cost-field","type": "text", "placeholder": "Cost", "contentEditable": false})
        editCostField.val(entry.cost)
        $(editCostField).appendTo(editCostContainer)

        //DROPDOWN:
        let editPlaceContainer = $("<fieldset>").appendTo(editFormContainer)
        let editPlaceField = $("<select>").attr({"id": "edit-place-field","type": "text", "readonly": true}).text("Place")
            fetchData.getPlaces().then(res => { // This fetch call is getting the list of places directly from the API.
                res.map(place => {
                    $("<option>").attr({"value": place.id}).text(place.name).appendTo(editPlaceField) // place.id is the value of the place in the "places" array.
                })
            })
        editPlaceField.val(entry.placeId)
        $(editPlaceField).appendTo(editPlaceContainer)

        // REVIEW SECTION:
        let editReviewContainer = $("<fieldset>").appendTo(editFormContainer)
        let editReviewField = $("<input>").attr({"id": "edit-review-field","type": "text", "placeholder": "Review"}).text("Review")
        $(editReviewField).appendTo(editReviewContainer)

        $("<button>").attr({"id": "edit-submit-btn", "type": "submit"}).text("Save Changes").click((event) => {event.preventDefault();
        // This is the correct syntax for creating a button and adding a "click" handler to it; notice that it uses form.handleNewInterest() on the second line and appends it to the editFormContainer as well.
        // even.preventDefault() in the handler prevents the page reloading in a loop; without it, every time the submit button is clicked, the page will continue to reload.

            let editedFormValues = {
                placeId: editPlaceField.val(),
                name: editNameField.val(),
                description: editDescField.val(),
                cost: editCostField.val()
            }
        fetchData.patchInterests(entry.id, editedFormValues)
        }).appendTo(editFormContainer)
    }
}

    export default editForm