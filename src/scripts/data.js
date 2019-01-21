// Fetch call

const fetchData = {
    // Use a method to perform a "plug-in" function that will execute fetches with various arguments (a "fetch factory")
    getPlaces() {
        // places
        return fetch("http://localhost:8088/places")
        .then(place => place.json())
    },

    getInterests() {
    // interests
    // return fetch("http://localhost:8088/interests/?_expand=place")   // What does this mean?
    return fetch("http://localhost:8088/interests")
    .then(interests => interests.json())
    },

    postPlaces(i) {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        })
    },
//=========================================     FETCH EDITED CONTENT    =================================================

    // getEditedInterests(id) {
    //     return fetch("http://localhost:8088/interests/${id}?_expand=place")
    //     .then(editedInt => editedInt.json())
    //     console.log(editedInt);
    // },
    // PATCH interests
    // patchInterests(id, review) {  // propEdit = edited property of an existing object in the database, i.e., cost or review
    //     return fetch(`http://localhost:8088/interests${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(review)
    //     })
    // },

    // DELETE interests
}

export default fetchData