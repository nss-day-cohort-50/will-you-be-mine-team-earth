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

//use orderbuilder id from setColony to find colony id and set colony.name to chosenColony var
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

//use foreign key of colonyMineral with orderbuilder to find colonymineral type
const findChosenColonyMineralNames = () => {
    const coloniesMinerals = getColoniesMinerals()
    //[chosenColoniesMineralsType, chosenColoniesMineralsStock]
    let chosenColonyMineralName = ""
    for (const colonyMineral of coloniesMinerals) {
        if (colonyMineral.colonyId === orderBuilder.colonyId) {
           chosenColonyMineralName += colonyMineral.mineralType
        }
    }

    return chosenColonyMineralName
}

//use forei
const findChosenColonyMineralAmount = () => {
    const coloniesMinerals = getColoniesMinerals()
    //[chosenColoniesMineralsType, chosenColoniesMineralsStock]
    let chosenColonyMineralAmount = ""
    for (const colonyMineral of coloniesMinerals) {
        if (colonyMineral.colonyId === orderBuilder.colonyId) {
           chosenColonyMineralAmount += colonyMineral.mineralStock
        }
    }

    return chosenColonyMineralAmount
}



//building out html for colonyMinerals for each colony with is rendered when governor is selected, using the find functions above 
export const PurchasedMinerals = () => {
    const chosenColonyMineralAmount = findChosenColonyMineralAmount()
    const chosenColonyName = findChosenColonyName()
    const chosenColonyMineral = findChosenColonyMineralNames()
    let html = "<h2> Colony Minerals</h2>"
    if (orderBuilder.governorId > 0){
         html = `<h2> ${chosenColonyName} Minerals </h2>`
        if (chosenColonyMineral) {
        html += `
        <ul> 
            <li> ${chosenColonyMineralAmount} tons of ${chosenColonyMineral} </li>
        </ul>`
        }
    }
    return html
}

