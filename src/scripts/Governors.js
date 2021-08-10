import { getGovernors, getOrderBuilder, setGovernor, setColony } from "./database.js" 


//listens for user to select governor and adds governor.id to trans state
document.addEventListener(
    "change",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "governors") {
        const [governorId ,governorColonyId] = itemClicked.value.split("--")
        setGovernor(parseInt(governorId))
        setColony(parseInt(governorColonyId))
        console.log(governorColonyId)
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
            <option name="governor" value="${governor.id}--${governor.colonyId}" selected>${governor.name}</option>`
            } else {
                return `    
                <option name="governor" value="${governor.id}--${governor.colonyId}">${governor.name}</option>`
            }
        }
            
    )
    html += listItemsArray.join(" ")

    html += `</select>`
    return html
}


//required autofocus onchange="window.alert(this.options[this.selectedIndex].text)"