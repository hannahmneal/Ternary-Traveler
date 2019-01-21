// import form from "./form";
import fetchData from "./data"
import domAppender from "./domAppend"

// "Refreshes" API and transforms data to HTML elements
// get data in the form of a promise

const createElements = {
    refreshData() {

        fetchData.getInterests()    // Using getPlaces() generates an error.
        // fetchData.getInterests()
        .then(r => {    // r = response or refreshed data
            // console.log(refreshed);
            let refreshedPlaceFragment = $("div")    // jQuery creates fragments differently from vanilla JS; in JS, this would be: let refreshedDataFragment = document.createDocumentFragment();
            r.forEach(entry => {
                console.log(entry)  // This returns each object in the "places" array (e.g., {id: 1, name: "Buenos Aires", visa_required: false})
                let entryHTML = domAppender.transformData(entry)
                refreshedPlaceFragment.append(entryHTML)
                // Translation:
                // 1. Tap fetchData.getInterests() for the data and return it in the form of "r" so it can be manipulated.
                // 2. Create a fragment in which to display the data; You will use it later.
                // 3. Create a variable (sHTML, represents "s as HTML"). This will tap domAppender.trasformData()
                    // transformData() creates the HTML elements we want to use to display our data.
                    // to get "s" to be applied correctly using transformData(), you will need to pass "s" in as an argument here: domAppender.transformData(s).
                    // you will also need to pass "s" in as an argument in domAppend.js in the transformData() method.
                // 4. Append the data display card you just created to the refreshedDataFragment.
            })
            refreshedPlaceFragment.appendTo("#cards-display")    // append the fragment to the DOM
        })
    }

//======================================  REFRESH EDITED DATA    =====================================================
// Tap


// editedData() {

    // Invoke the fetch calls required for editForm (PUT, PATCH, and DELETE). Call this function in formEdit.

    // }
}

export default createElements