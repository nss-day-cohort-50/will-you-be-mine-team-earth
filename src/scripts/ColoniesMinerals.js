import { getColoniesMinerals, getOrderBuilder } from "./database.js"



// created event listener for purchase button, calls addPurchase function, 

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "purchaseButton") {
            window.alert("purchase button clicked")
            
        }
    }
)

const orderBuilder = getOrderBuilder()

//a fucntion that matches the name of the mineral to the id of the permanent state
// const findPurchasedMineral = () => {
//     const colonyAvailableResources = getColonyAvailableResources()
//     let purchasedMineral = ""
//     for (const mineral of colonyAvailableResources) {
//         if (mineral.id === orderBuilder.colonyAvailableResourcesId) {
//             purchasedMineral = mineral.type
//         }
//     }

//     return purchasedMineral
// }

export const PurchasedMinerals = () => {
    const coloniesMinerals = getColoniesMinerals()
    let html = ``
        const colonyMineralsNameArray = coloniesMinerals.map(
            (colonyMineralsName) => {
                return `
                <h2>${colonyMineralsName.colonyName} Minerals</h2>
                <ul>`
            } 
         ) 
         const colonyMineralsTypeArray = coloniesMinerals.map(
            (colonyMineralsType) => {
                return `<li>
                ${colonyMineralsType.mineralStock} tons of ${colonyMineralsType.mineralType}
                </li>`
            } 
         ) 
    html += colonyMineralsNameArray 
    html += colonyMineralsTypeArray.join("")
    html += `</ul>`
    return html
}

