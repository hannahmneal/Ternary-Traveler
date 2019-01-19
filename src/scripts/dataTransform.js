// import form from "./form";
import fetchData from "./data"

// "Refreshes" API and transforms data to HTML elements
// import data

//Promise to pull data from API:

const createElements = {
    refreshData() {

        fetchData.getPlaces()
        .then(r => {
            // console.log(refreshed);
            let refreshedDataFragment = document.createDocumentFragment();
            r.forEach(s => {
                let sHTML = domAppender.transformData(r)
                $(refreshedDataFragment).appendTo(sHTML)
            })
            let displayElements = document.querySelector
        })
    }
}

export default createElements