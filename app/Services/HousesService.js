import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"


class HousesService {


    setActiveHouse(houseId){
        const house = appState.houses.find(h => h.id == houseId)
        if (!house) {
        throw new Error ('there is no car with that id')
        }
        appState.house = house
    }
   
    createHouse(formData){
        let house = new House(formData)

        appState.houses.push(house)
        appState.emit('houses')
        saveState('cars', appState.houses)
    }
}

// singleton pattern more on this later
export const housesService = new HousesService()