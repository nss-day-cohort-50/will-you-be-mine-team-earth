import { getFacilities } from "./database.js"



const facilities = getFacilities()
export const Facility = (id, name) => {
    let html = "<div>"

    const listItemsArray = facilities.map(
        (facility) => {
            return `    
            <button name="facility" value="${id}">${name}</button>`
        }
    )
    html += listItemsArray.join(" ")

    html += `</div>`
    return html
}