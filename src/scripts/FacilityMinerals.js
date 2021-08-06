import { getMinerals } from "./database.js"

document.addEventListener(
    "click",
    (event) => {

        if (event.target.id === "btn-facility-1") {
           window.alert(event.target.id)
        }
    }
)


export const Minerals = () => {
    const minerals = getMinerals()
    let html = "<ul>"

    const listItemsArray = minerals.map(
        (mineral) => {
            return `<li>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type} 
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}