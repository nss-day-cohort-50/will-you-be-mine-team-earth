import { addPurchase } from "./database.js"

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

// export const ChosenOptions = () => {
//     const chosenOptions = document.getElementById("choices")
//     const chosenFacility =  findChosenFacility()
//     const chosenMineral =  findChosenMineral()
//     let html = `<div>1 ton of ${chosenMineral} from ${chosenFacility}</div>`
//     chosenOptions.innerHTML = html
    
//     return chosenOptions.innerHTML
//     }