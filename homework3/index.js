// Задание 1: ""Управление персоналом компании""
class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// "Управление списком заказов"

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((sum, el) => {
            return sum + el.price;
        }, 0);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

// Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл".
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

class Student {
    name = "";
    age = 0;
    avgScore = 0;

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAvgScore(avgScore) {
        this.avgScore = avgScore;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Average score: ${this.avgScore}`)
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAvgScore(85);
student.displayInfo();