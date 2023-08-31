// Задание 1: ""Управление библиотекой книг""
 class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
 }
 const book1 = new Book("Forrest Gump", "Winston Groom", 320);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student1 = new Student('John Smith', 16, "10th grade");
student1.displayInfo();

// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.
class Phonebook {
    constructor() {
        this.contacts = [];
    }

    addContact(name, phoneNumber) {
        const contact = {
            name: name,
            phoneNumber: phoneNumber
        };
        this.contacts.push(contact);
    }

    deleteContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
    }

    findContactByName(name) {
        return this.contacts.find(contact => contact.name === name);
    }

    findContactByPhone(phoneNumber) {
        return this.contacts.find(contact => contact.phoneNumber === phoneNumber);
    }
}

let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов"));
console.log(phonebook.findContactByPhone("987-65-43"));
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов.
// Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета,
// снятия денег со счета и проверки баланса.

class Bank {
    numberCounter = 0;

    constructor(name) {
        this.name = name;
        this.clients = [];
        this.accounts = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    openAccount(client, initialBalance) {
        const account = {
            client: client,
            balance: initialBalance
        };
        this.accounts.push(account);
    }

    deposit(accountNumber, amount) {
        const account = this.accounts.find(account => account.client.accountNumber === accountNumber);
        if (account) {
            account.balance += amount;
        }
    }

    withdraw(accountNumber, amount) {
        const account = this.accounts.find(account => account.client.accountNumber === accountNumber);
        if (account && account.balance >= amount) {
            account.balance -= amount;
        }
    }

    checkBalance(accountNumber) {
        const account = this.accounts.find(account => account.client.accountNumber === accountNumber);
        if (account) {
            console.log(`Account balance for ${account.client.name}: ${account.balance}`);
        }
    }
}

class Client {
    constructor(name, age, accountNumber) {
        this.name = name;
        this.age = age;
        this.accountNumber = accountNumber;
    }
}


const bank = new Bank('My Bank');

const client1 = new Client('John Doe', 25, 123456789);
const client2 = new Client('Jane Smith', 30, 987654321);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);