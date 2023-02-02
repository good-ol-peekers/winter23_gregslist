import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { housesService } from "../Services/HousesService.js"


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
    appState.on('car', _drawhouse)
    // console.log('Hello this is the houses Controller')
  }

  show(){
    setText('add-listing-button', 'a new House?')
    setText('listingFormLabel', 'new houses for you!')

    setHTML('the-actual-form', house.houseForm())

    _drawHouses()
    console.log('TODO houses')
  }

}
