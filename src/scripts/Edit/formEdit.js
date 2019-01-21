// To use  the edit form:

// Handler: editHandler
    // Re-freshes page with a new form to edit with name, description and place fields pre-populated
        // To pre-populate certain fields, use input type = text instead of input
    // Attach the editHandler to the edit button
// Handler: saveHandler
    // Same as "submit" from original form (you probably don't have to create a new one)
// Use a PATCH instead of a PUT to send the edited content to the API
// Refresh the page using a GET (use specific id of the interest you want to get back)