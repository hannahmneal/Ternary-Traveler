// Fetch call

const fetchData = {
    // Use a method to perform a "plug-in" function that will execute fetches with various arguments
    getPlaces() {
        // places
        return fetch("http://localhost:8088/places")
        .then(places => places.json())
    },
    // getInterests() {
    // // interests
    // return fetch("http://localhost:8088/interests")
    // .then(interests => interests.json())
    
    // },
    
    postPlaces(i) {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        })
    }
}


export default fetchData