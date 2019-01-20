// Methods:
// form.js -> createInputForm()
// data.js -> fetchData { getPlaces(), getInterests(), postPlaces()}
// dataTransform.js -> createElements { refreshData()}
    // calls fetchData{ getInterests()}

// domAppend.js -> domAppender { transformData()}
import form from "./form"
import createElements from "./dataTransform"
// import api from "./data"

form.createInputForm()
createElements.refreshData()
//The data.js createElements.refreshData() method is doing this: api.getPlaces().then(res => console.log(res))

// You don't have to use the object names when you import them. As long as there is a valid export statement, you can call the imports whatever you want.
// For instance: import createElements from ".dataTransform" could be written, import api from "./data"
// Later, it can be used and called upon to do anything we want. So, createElements.refreshData() could be written: api.refreshData()


