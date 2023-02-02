import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { housesService } from "../Services/HousesService.js"


function _drawHouses(){
  let template = ''
  appState.houses.forEach(home => template += home.HouseCardTemplate)
  setHTML('listings', template);
}



export class HousesController {


  constructor() {
    this.show()
    console.log('Hello this is the houses Controller')
  }

  show(){
    _drawHouses()
    console.log('TODO houses')
  }

}
