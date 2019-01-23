import domAppender from "./domAppend";
import createElements from "./dataTransform";
import form from "./form";

// Fetch call

const fetchData = {
    // Use a method to perform a "plug-in" function that will execute fetches with various arguments (a "fetch factory")
    getPlaces() {
        return fetch("http://localhost:8088/places")
        .then(place => place.json())
    },

    getInterests() {
    // return fetch("http://localhost:8088/interests/?_expand=place")   // What does this mean?
    return fetch("http://localhost:8088/interests")
    .then(interests => interests.json())
    },

    postInterest(i) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        })
    },

    deleteInterest(delId) {
    return fetch(`http://localhost:8088/interests/${delId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => r.json())
    .then(entry => {

        $('#form-display').empty()
        $('#cards-display').empty()
        form.createInputForm()
        createElements.refreshData()
    })
  },
//=========================================     FETCH EDITED CONTENT    =================================================
    //PATCH interests
        patchInterests(id, review) {  // propEdit = edited property of an existing object in the database, i.e., cost or review
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)

        })
    },

    //     getEditedInterests(editId) {
    //         return fetch(`http://localhost:8088/interests/${editId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(editId)
    //     }).then(r => r.json())
    //         console.log(editedInt);
    // }
}

export default fetchData