import { getMinerals } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

const minerals = getMinerals()
export const Minerals = () => {
    let html = "<ul>"

    const listItemsArray = minerals.map(
        (mineral) => {
            return `li>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type} 
            </li>`
        }
    )
    html += listItemsArray
    html += "</ul>"
    return html
}