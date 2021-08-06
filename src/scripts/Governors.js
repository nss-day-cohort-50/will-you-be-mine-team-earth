import { getGovernors, getOrderBuilder, setGovernor } from "./database.js" 


//listens for user to select governor and adds governor.id to trans state
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governors") {
            setGovernor(parseInt(event.target.value))
        }
    }
)


//renders govenor option list with the isActive=false governors ommitted
const chosenGovernor = getOrderBuilder()
const governors = getGovernors()
export const Governors = () => {
    let html = `
    <select id="governors" >
    <option name="governor" value="0">Choose Your Governor...</option>`
    const listItemsArray = governors.map(
        (governor) => {
            if (governor.id === chosenGovernor.governorId) {
                return `    
            <option name="governor" value="${governor.id}" selected>${governor.name}</option>`
            } else {
                return `    
                <option name="governor" value="${governor.id}">${governor.name}</option>`
            }
        }
            
    )
    html += listItemsArray.join(" ")

    html += `</select>`
    return html
}


//required autofocus onchange="window.alert(this.options[this.selectedIndex].text)"