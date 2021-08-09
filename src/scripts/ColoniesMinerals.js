import { ColonyAvailableResources } from "./ChosenOptions.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            ColonyAvailableResources(parseInt(event.target.value))
        }
    }
)

