const requestURL = 'json/restaurante.json';

async function fetchHousesJson(){
    const response = await fetch(requestURL);
    const houses = await response.json();
    return houses;
}


fetchHousesJson().then(house => {
    for (let index=0; index < house.houses.length ; index++) {

        let id  = house.houses[index].id;
        let image  = house.houses[index].image;
        let nombre  = house.houses[index].nombre;
        let pais  = house.houses[index].pais;
        let description  = house.houses[index].description;
        
        houseSection.innerHTML += `
            
            <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${id}. ${pais} ${nombre}</h5>
                <p class="card-text">${description}</p>
            </div>
           
            </div> 

            `

    }
})