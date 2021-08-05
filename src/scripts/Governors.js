import { getGovernors } from "./database.js" 

const governors = getGovernors()
export const Governors = () => {
    let html = `
    <label for="governors">Choose a Governor:</label>
    <select name="governers" id="governors" required autofocus>>`
    // Use .map() for converting objects to <li> elements
    const listItemsArray = governors.map(
        (governor) => {
            return `    
            <option value="${governor.id}">${governor.name}</option>`
        }
    )
    html += listItemsArray.join(" ")

    html += `</form>`
    return html
}

