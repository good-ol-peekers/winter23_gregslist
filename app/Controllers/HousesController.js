import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"


function _drawHouses(){
  let template = ''
  appState.houses.forEach(home => template += home.HouseCardTemplate)
  setHTML('listings', template);
}
function _drawHouse() {

  setText('listingModalLabel', `${appState.house.name} ${appState.house.year}`)
  setHTML('listing-modal-body', appState.house.HouseDetailsTemplate)

  // listingModalLabel
  // 'listing-modal-body'

}


export class HousesController {


  constructor() {
    this.show()
    appState.on('cars', _drawHouses)
    appState.on('car', _drawHouse)
    // console.log('Hello this is the houses Controller')
  }

  show(){
    setText('add-listingButton', 'a new House?')
    setText('listingFormLabel', 'new houses for you!')
    setHTML('the-actual-form', house.houseForm())

    _drawHouses()
    console.log('TODO houses')
  }

  setActiveHouse(houseId){
    try {
      housesService.setActiveHouse(houseId)
      
    } catch (error) {
      Pop.error(error)
    }
  }


  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(formData)

    } catch (error) {
      Pop.error(error)
    }
  }
}
