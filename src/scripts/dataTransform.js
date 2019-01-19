// import form from "./form";
import fetchData from "./data"
import domAppender from "./domAppend"

// "Refreshes" API and transforms data to HTML elements
// import data

//Promise to pull data from API:

const createElements = {
    refreshData() {

        fetchData.getInterests()
        .then(r => {
            // console.log(refreshed);
            // let refreshedDataFragment = document.createDocumentFragment();
            let refreshedDataFragment = $("div")
            r.forEach(s => {
                console.log(s)
                let sHTML = domAppender.transformData(s)
                refreshedDataFragment.append(sHTML)
            })
            refreshedDataFragment.appendTo("#cards-display")
        })
    }
}

export default createElements