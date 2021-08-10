import { getColoniesMinerals, getOrderBuilder, addPurchase, getColonies, getGovernors } from "./database.js"



// created event listener for purchase button, calls addPurchase function, 

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "purchaseButton") {
            window.alert("purchase button clicked")
            addPurchase()
            
        }
    }
)

const orderBuilder = getOrderBuilder()

const findChosenColonyName = () => {
    const colonies = getColonies()
    let chosenColony = ""
    for (const colony of colonies) {
        if (colony.id === orderBuilder.colonyId) {
            chosenColony = colony.name
        }
    }

    return chosenColony
}

export const PurchasedMinerals = () => {
    const chosenColonyName = findChosenColonyName()
    const coloniesMinerals = getColoniesMinerals()
    let html = "<h2> Colony Minerals</h2>"
    if (orderBuilder.governorId > 0){
         html = `<h2> ${chosenColonyName} Minerals </h2>
        </ul>`
         const colonyMineralsTypeArray = coloniesMinerals.map(
            (colonyMineralsType) => {
                return `<li>
                ${colonyMineralsType.mineralStock} tons of ${colonyMineralsType.mineralType}
                </li>`
            } 
         ) 
        html += colonyMineralsTypeArray.join("")
        html += `</ul>`
    }
    return html
}

