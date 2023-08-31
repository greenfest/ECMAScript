// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9]
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и
// decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение
// счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.decrement();
console.log(counter.getCount());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
        return root;
    }

    const children = root.children;
    for (let i = 0; i < children.length; i++) {
        const found = findElementByClass(children[i], className);
        if (found !== null) {
            return found;
        }
    }

    return null;
}

// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));