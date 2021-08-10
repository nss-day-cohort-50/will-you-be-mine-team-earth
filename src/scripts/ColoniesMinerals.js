import { getColoniesMinerals, getOrderBuilder, addPurchase, getColonies } from "./database.js"



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
const findChosenColonyMineralNames = () => {
    const coloniesMinerals = getColoniesMinerals()
    //[chosenColoniesMineralsType, chosenColoniesMineralsStock]
    let chosenColonyMineral = ""
    for (const colonyMineral of coloniesMinerals) {
        if (colonyMineral.colonyId === orderBuilder.colonyId) {
           chosenColonyMineral += colonyMineral.mineralType
        }
    }

    return chosenColonyMineral
}



export const PurchasedMinerals = () => {
    const chosenColonyName = findChosenColonyName()
    const chosenColonyMineral = findChosenColonyMineralNames()
    let html = "<h2> Colony Minerals</h2>"
    if (orderBuilder.governorId > 0){
         html = `<h2> ${chosenColonyName} Minerals </h2>`
        if (chosenColonyMineral) {
        html += `
        <ul> 
            <li> tons of ${chosenColonyMineral} </li>
        </ul>`
        }
    }
    return html
}

