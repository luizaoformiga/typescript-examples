export default class Employee {
    public name?: string; 
    public commission?: number;

    constructor(name: string, commission: number) {
        this.name = name;
        this.commission = commission;
    }

    // Name
    public getName() {
        return this.name;
    }

    public setName(name: string) {
        return this.name = name;
    }

    // Commission
    public getCommission() {
        return this.commission;
    }

    public setCommission(commission: number) {
        return this.commission = commission;
    }
}