import Client from './client';
import Employee from './employee';
import Car from './car';

export default class PurchaseCar {
  client: Client;
  employee: Employee;
  car: Car;
  finalValue: number;
  discountValue: number;

  constructor(client: Client, employee: Employee, car: Car) {
    this.client = client;
    this.employee = employee;
    this.car = car;
    this.car.setValue(this.darDesconto(this.car.getValue()));
    this.finalValue = this.car.getValue();
    this.employee.setCommission(this.addCommission(this.finalValue));
    this.discountValue = 0; 
    }

  private darDesconto(price: number): number {
    if(this.car.getAge() < 2000) {
      this.discountValue = this.car.getValue() * 90;
      this.car.setValue(this.discountValue);
    } else {
      this.car.setValue(price);
    }

    if(this.client.getIcome() < 5000) {
      this.discountValue = this.car.getValue() * 90;

    return this.car.setValue(this.discountValue);
    } else {
      return this.car.setValue(this.car.getValue());
    }
  }

  public addCommission(value: number): number {
    return this.employee.setCommission(value * 0.02);          
  }

  public detailPurchase() {
    console.log(`Name: ${this.client.getName}\n ${this.car.getModel()}`)
  }

}

//https://www.youtube.com/watch?v=pjWOmQ-HrSQ