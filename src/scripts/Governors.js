import { getGovernors } from "./database.js" 
import { setGovernor } from "./database.js" 

//listens for user to select governor and adds governor.id to trans state
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governors") {
            setGovernor(parseInt(event.target.value))
        }
    }
)


//renders govenor option list with the isActive=false governors ommitted
const governors = getGovernors()
export const Governors = () => {
    let html = `
    <label for="governors">Choose a Governor:</label>
    <select name="governors" id="governors" >`
    const listItemsArray = governors.map(
        (governor) => {
            if (governor.isActive === true)
            return `    
            <option name="governor" value="${governor.id}">${governor.name}</option>`
        }
    )
    html += listItemsArray.join(" ")

    html += `</select>`
    return html
}


//required autofocus onchange="window.alert(this.options[this.selectedIndex].text)"