import { getFacilityMinerals } from "./database.js"

document.addEventListener(
    "click",
    (event) => {

        if (event.target.id === "btn-facility-1") {
           window.alert(event.target.id)
        }
    }
)


export const facilityMinerals = () => {
    const facilityMinerals = getFacilityMinerals()
    let html = "<ul id='facilityMinerals' >"

    const listItemsArray = facilityMinerals.map(
        (facilityMineral) => {
            return `<li>
            <input type="radio" name="mineral" value="${facilityMineral.id}" /> ${facilityMineral.stock} tons of ${facilityMineral.type} 
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}