type accountType = {
    money: number,
    deposit: (value: number) => void
};
type person = {
    name: string,
    bankAccount: accountType,
    hobbies: string[]
};
let bankAccount: accountType = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    },
};

let myself: person = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);