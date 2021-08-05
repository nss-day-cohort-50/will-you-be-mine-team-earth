import { getFacilities } from "./database.js"



const facilities = getFacilities()
export const Facility = () => {
    let html = "<div>"

    const listItemsArray = facilities.map(
        (facility) => {
            return `    
            <button name="facility" value="${facility.id}">${facility.name}</button>`
        }
    )
    html += listItemsArray.join(" ")

    html += `</div>`
    return html
}