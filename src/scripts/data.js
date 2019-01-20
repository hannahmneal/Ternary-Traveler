// Fetch call

const fetchData = {
    // Use a method to perform a "plug-in" function that will execute fetches with various arguments
    getPlaces() {
        // places
        return fetch("http://localhost:8088/places")
        .then(d => d.json())
    },

    getInterests() {
    // interests
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

    // PATCH interests
    patchInterests() {  // propEdit = edited property of an existing object in the database, i.e., cost or review
        return fetch("http://localhost:8088/interests", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    },

    // DELETE interests


}


export default fetchData