import { generateId } from "../Utils/generateId.js"

import (generateId)

export class House {

    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.price = data.price
        this.imgUrl = data.imgUrl
    }
get HouseCardTemplate() {
     return /*html*/`
    <div class="col-md-4 my-3">
    <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.year}')" data-bs-toggle="modal" data-bs-target="#listingModal">
      <img
        src="${this.imgUrl}"
        alt="${this.name}" class="rounded">
      <p><b>${this.bedrooms} ${this.bathrooms} - $${this.price}</b></p>
    </div>
  </div>`
}

get HouseDetailsTemplate(){
    `
    <div><h1>house details template insert here</h1></div>
    `
}

static HouseForm(){
    return '<div><h1>houses form insert here</h1></div>'
}


}
