/* const Products = [
    {id: 1, product: 'Esmaltado permanente', price: 23100},
    {id: 2, product: 'Acrilico colores basicos',  price: 35000},
    {id: 3, product: 'Acrilico francesa o baby boomer',  price: 38000},
    {id: 4, product: 'Manicure rusa',  price: 31500},
    {id: 5, product: 'Diseños', price: 500},
    {id: 6, product:  'Tratamiento endurecedor', price: 10500},
    {id: 7, product:  'Degradé',  price: 1500},
    {id: 8, product:  'Cristales swarovski',  price: 5200},
    {id: 9, product:  'Retiro de permanente otro salon',  price: 5000},
    {id: 10, product:  'Retiro de acrilico otro salon',  price: 8000},
 
] */
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
