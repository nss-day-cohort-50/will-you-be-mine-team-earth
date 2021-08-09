import { addPurchase, getOrderBuilder } from "./database.js"
import { ColonyAvailableResources } from "./ChosenOptions.js"

const orderBuilder = getOrderBuilder()
const colonyAvailableResources = ColonyAvailableResources()
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

//a fucntion that matches the name of the mineral to the id of the permanent state
const findPurchasedMineral = () => {
    const colonyAvailableResources = getColonyAvailableResources()
    let purchasedMineral = ""
    for (const mineral of colonyAvailableResources) {
        if (mineral.id === orderBuilder.colonyAvailableResourcesId) {
            purchasedMineral = mineral.type
        }
    }

    return purchasedMineral
}

export const PurchasedMinerals = () => {
    const purchasedMineral =  findPurchasedMineral()
    let html = `<div>1 tons of ${purchasedMineral}</div>`
    coloniesMinerals.innerHTML = html
    
    return coloniesMinerals.innerHTML
    }