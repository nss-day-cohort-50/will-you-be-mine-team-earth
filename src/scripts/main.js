import { BeMine } from "./BeMine.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = BeMine()
}

renderAllHTML()