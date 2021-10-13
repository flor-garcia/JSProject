
// Array de productos
const Products = [
    {id: 1, product: 'Esmaltado permanente', price: 23100},
    {id: 2, product: 'Acrilico',  price: 35000},
    {id: 3, product: 'Manicure rusa',  price: 31500},
    {id: 4, product: 'Tratamiento endurecedor', price: 10500},
    {id: 5, product: 'Gel X',  price: 1500},]



// Recorrer el array para crear el listado de servicios en la seccion de reservas. 


for (const product of Products) {
    let productsContainer = document.createElement('label');
    productsContainer.innerHTML =
        `<label class="list-group-item">
         <input class="form-check-input me-1 type="checkbox" value=""> ${product.product}
         </label>`;
    document.getElementsByClassName('products-container')[0].appendChild(productsContainer);   
    

}



/* 
let prueba =  document.getElementsByClassName("product-item");
console.log(prueba);
for (const service of prueba) {
service.onclick = () =>  {
    if (service.checked) 
    {console.log(`${Products.product}`)}

} */
}

// Array de zonas
const Zones = [
    {id: 1, zone: "Chicureo", price: 10000 ,group: 1 },
    {id: 2, zone: "Quilicura",price: 5000,group: 1 },
    {id: 3, zone: "Pudahuel", price: 8000 ,group: 1 },
    {id: 4, zone: "Renca", price: 5000 ,group: 2 },
    {id: 5, zone: "Pudahuel", price: 8000 ,group: 2 },
    {id: 6, zone: "Las Condes", price: 8000 ,group: 2 },]

// Constructor para almancenar respuesta del cliente
class Reservation {
    constructor (product, zone, date, hour) {
        this.product = product;
        this.zone = zone;
        this.date = date;
        this.hour = hour;
    }
}








// Recorrer el array para crear el listado de zonas disponibles en la seccion de reservas. 
for (const zones of Zones) {
    let zoneList = document.createElement('button');
    zoneList.innerHTML= 
    `<button type="button" class="list-group-item list-group-item-action" aria-current="true">
    ${zones.zone} </button>`;
    document.getElementsByClassName('zone-list-container')[0].appendChild(zoneList);  
} 



/* let prueba =  document.getElementsByClassName("product-item")[0];
prueba.onclick = () =>  {
    let productSelected = document.getElementsByClassName("product-item")[0].checked;
    console.log(productSelected)} */



/* 
unaFuncion (){
    const serviceSelected = JSON.parse(localStorage.getItem)
}
 */





/* let productsAnswer = document.getElementsByClassName('products-item');
for (const item of productsAnswer ){

}


productsAnswer.onclick = () =>{
    console.log(productsAnswer)
}



console.log( document.getElementsByClassName('zone-list-container')[0])
 */
/* let serviceCheckbox = document.$('#item');

serviceCheckbox.addEventListener ('click', function()){
    if(serviceCheckbox.checked) {
        console.log('Elemento con click')
    } else {
        console.log('Elemento sin click')
    }
}

let serviceSelected = $( '#item:checkbox:checked' );

console.log(serviceSelected[0]);
 */
/* for (const product of Products){
    let service = document.createElement("input");
    service.innerHTML = product.product
    document.body.appendChild(service);
} */
 

/* 


let cart = 0;

const hourOfDay = ['8 am','10 am','12 pm','14pm','16pm','18pm','20pm'];
const weekDay = [
    {Day: 'Monday' , Zone: 'Las Condes'},
    {Day: 'Thuesday', Zone: 'Lo Barnechea'},
    {Day: 'Wednesday', Zone: 'Nuñoa'},
    {Day: 'Thursday', Zone: 'La Florida'},
    {Day: 'Friday', Zone: 'Providencia'},
] */



/* Esta funcion despliega la lista de produtos dentro del array */
/* const serviceList = () => {
    let menu = 'Chose a service:\n';
    Products.forEach((product) => {
        // a lo que hay en menu "Chose a Service" le sumo lo siguiente:
        menu += product.product + "\n";});
        return prompt(`${menu} \n If you want to leave type EXIT`);
}
 */

/* Esta funcion permite encontrar el dia disponible en funcion a la zona ingresada por el cliente */
/* const dayList = (zone) =>{
        for (const element of weekDay){ 
            if(element.Zone === zone){
                return alert(`The day availiable for your zone is ${element.Day}.`)}
}} */


/* Esta funcion despliega la lista de horas dentro del array hourOfDay */
/* const hourList = () => {
    let hourMenu = `Select an hour: \n`;
    hourOfDay.forEach((hour) => {
        hourMenu += hour +  '\n';});
        return prompt(`${hourMenu} \n If you want to leave type EXIT`);
}

const addToCart = (serviceSelected) => {
    const found = Products.find(product => product.product === serviceSelected);
    console.log(found);
    cart += (found.price * 1.19);
    alert(`You have selected: \n ${found.product}.`);
}
 */


/* Ciclo */
/* do {
    let serviceSelected = serviceList();
    if (serviceSelected == "EXIT") break;
    let zoneSelected = prompt('Which is your zone?');
    let daySelected = dayList(zoneSelected);
    if (daySelected == "EXIT") break;
    let hourSelected = hourList();
    if (hourSelected == "EXIT") break;

    addToCart(serviceSelected);

    answer = prompt (`Do you want to add more services to the cart? yes or no.`)


 } while (answer == "yes")

 if (cart > 0){
     alert(`Your appointment has a total a value of $${cart}`)}

     alert(`Thank you, see you soon!`);
  */
