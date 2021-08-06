

    export const ColonyAvailableResources = () => {
        const newOrder = {...database.orderBuilder}
        const lastIndex = database.availableResources.length - 1
        newOrder.id = database.availableResources[lastIndex].id + 1
        database.availableResources.push(newOrder)
        database.orderBuilder = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }

}


//<article class="governorsColonyAvailableResources">   <div class="ColonyAvailableResources">< /div>    </article>
