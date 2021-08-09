import { getFacilityMinerals, setFacilityMineral } from "./database.js"
import { ChosenOptions } from "./ChosenOptions.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "mineral") {
           window.alert(event.target.value)
          setFacilityMineral(parseInt(event.target.value))
          ChosenOptions()
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