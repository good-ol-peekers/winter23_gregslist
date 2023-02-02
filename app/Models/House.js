

export class House {
    constructor(year, name, bedrooms, bathrooms) {
        this.year = year
        this.name = name
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.price = price
        this.imgUrl = imgUrl
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
}

