//hint from slack: think 'ColonyMinerals' export const ColonyAvailableResources = () => {
        const newOrder = {...database.orderBuilder}
        const lastIndex = database.availableResources.length - 1
        newOrder.id = database.availableResources[lastIndex].id + 1
        ListItemsArray.mineral.stock -= 1 //subtracting from facility
        //make sure amount from the tranasient data and name is diplayed in event
        database.availableResources.push(newOrder)
        database.orderBuilder = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
 
}
 
 
//<article class="governorsColonyAvailableResources">   <div class="ColonyAvailableResources">< /div>    </article>
 
 
chosenGovernor: integer
 selectedFacility: integer
  selectedMinerals: [{type: X, amount: 1}]