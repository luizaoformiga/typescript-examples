import Car from './car';
import Client from './client';
import Employee from './employee';
import PurchaseCar from './purchase-car';

const car = new Car("Logan", 1999, 50000);
const client = new Client("Luiz", 5000);
const employee = new Employee("Agatha", 0.04);
const purchase = new PurchaseCar(client, employee, car);

console.log(purchase);

