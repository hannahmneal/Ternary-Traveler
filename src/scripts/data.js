// Fetch call

const fetchData = {
    getPlaces() {
        // places
        return fetch("http://localhost:8088/places")
        .then(places => places.json())
    },
    getInterests() {
    // interests
    return fetch("http://localhost:8088/interests")
    .then(interests => interests.json())
    
    }
}