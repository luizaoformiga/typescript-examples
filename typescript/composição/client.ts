export default class client {
    public name?: string; 
    public icome?: number;

    constructor(name: string, income: number) {
        this.name = name;
        this.icome = income;
    }

    // Name
    public getName() {
        return this.name;
    }

    public setName(name: string) {
        return this.name = name;
    }

    // Icome
    public getIcome() {
        return this.icome;
    }

    public setIcome(icome: number) {
        return this.icome = icome;
    }
}