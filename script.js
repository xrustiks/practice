/*
function myFunc(callback) {
  let element = document.querySelector('.elem1');
  let arr = [1, 2, 3];
  callback(element, arr);
}

function out (el, a) {
  el.textContent = a.join(' ');
}

myFunc(out);
*/

/*
const goods = [
  {
    title: 'Кукуруза',
    quantity: 3,
    price: 99,
  },
  {
    title: 'Корм для кота',
    quantity: 2,
    price: 113,
  },
];


let totalPrice = goods.reduce((total, product, currentIndex, products) => 
total + (product.price * product.quantity), 0);

console.log(totalPrice);
*/

/*
const films = [
  {
    id: 0,
    title: 'Die hard',
  },
  {
    id: 1,
    title: 'Terminator',
  },
];

const titles = films.map((film) => {
  return film.title;
})

titles.forEach((title) => {
  console.log(title);
})
*/

/*

const cat = {
  nickname: 'Кекс',
  greeting: 'Мяу',
  say
};

const dog = {
  nickname: 'Полиграф Шариков',
  greeting: 'Абырвалг',
  say
};

const fox = {
  nickname: 'Алиса',
  greeting: 'What does the fox say?',
  say
};

let say = () => {
  console.log(this.nickname + " говорит " + this.greeting);
}

dog.say();
*/

/*
const cat = {
  nickname: 'Кекс',
  greeting: 'Мяу',
  goodies: ['wiskas', "pedigrie"],
  say
};

function say () {
  console.log(this.nickname + " говорит " + this.greeting);
  this.goodies.forEach(function (goodie) {
    console.log(this.nickname + " любит " + goodie);
  });
}

cat.say ();
*/

/*
const obj = {
  name: 'Example',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

const anotherFunction = obj.sayHello;
anotherFunction();
*/

/*
let cat = {
  name: 'Кекс',
  color: 'рыжий',
  age: 5,
  say
};

function say () {
  console.log('Мяу, привет! Меня зовут ' + this.name);
};

cat.say();
*/

/*
// Разбираемся, что такое rest и spread:
// В данном случае многоточие - это остаточные параметры (rest). Применяются, когда количество аргументов функции заранее неизвестно:
const restValues = (...values) => {
  let max = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  
  return max;
}

const arr = [2, 5, 3, 100503, 0, 10];

// А здесь многоточие - это spread-синтаксис. Он убирает скобки массива:
console.log(restValues(3, 1, 0, 100501, 5, -5654358642, ...arr, 100502));
*/

/*
const members = [['Саша', 'Игорь'], ['Лидия', 'Сергей']];

members.forEach((members) => {
  members.forEach((member) => {
    console.log(member);
  });
});
*/

/*
const func = function() {
  console.log("Self-invoking function");
} ();
*/

/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

/*
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    previousValues.includes(currentValue); // 2. Проверить на уникальность. Повторить шаг 1, пока не получим уникальное число
    previousValues.push(currentValue);
    return currentValue;
  };
}

console.log(createRandomIdFromRangeGenerator()());
*/

/*
let calcCount = function() {
  let count = 0;
  return function() {
    count++;
    
  }
}

let counter1 = calcCount();
console.log(counter1());
*/

/*
function showItems(firstItem, secondItem, ...restItems) { console.log(firstItem, secondItem, restItems); }
showItems(1, 2, 3, 4, 5);
*/

/*
const getRandNum = (min, max) => Math.round(Math.random() * (max - min)) + min;
let arr = [];
let aux;

for (let i = 0; i < 50; i++) {
  arr[i] = getRandNum(1, 6);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(`${i + 1} - ${arr[i]}`);
}
*/

/*
function selectRandomly(arr) {
  const randNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;

  console.log(randNum);

  return arr[randNum];
}

function speak(compliments) {
  console.log(selectRandomly(compliments));
  return `I tell you ${compliments[selectRandomly(compliments)]}`;
}

function main() {
  let compliments = [
    "not so bad",
    "better than yesterday",
    "already much better",
    "good",
    "very good",
    "excellent",
    "awesome",
    "outstanding",
    "brilliant",
    "superb",
  ];

  console.log(speak(compliments));
}

main();
*/

/*
In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. Complete the parameter list of `addToShopping()`. As a first parameter it 
   should accept a shopping cart array and as a second parameter it should 
   accept a grocery item to be added.
2. The function should return a new shopping cart array, following the same rule 
   as in the previous exercise: it should contain a maximum of three items.
3. The shopping cart passed as an argument should not be mutated.
4. When constructing the new shopping cart array you should make use of the ES6 
   spread syntax.
5. Confirm that you function passes the provided unit tests.
*/
/*
function addToShoppingCart(oldCart, grocery) {
  let newCart = [...oldCart];

  if (newCart.length > 3) {
    oldCart.splice(0, 1);
  }

  newCart.push(grocery);

  return newCart;
}

// Example Usage:
const currentCart = ["bananas", "milk"];

console.log(addToShoppingCart(currentCart, "sdfds"));
*/

/*
function addToShoppingCart(oldCart, groceryItem) {
  let newCart = [...oldCart];

  newCart.push(groceryItem);

  if (newCart.length > 3) {
    newCart.splice(0, 1);
  }

  return newCart;
}

const currentCart = ["bananas", "milk"];

console.log(addToShoppingCart(currentCart, "bred"));
console.log(addToShoppingCart(currentCart, "salt"));
console.log(addToShoppingCart(currentCart, "pineapple"));
*/

/*
const myObject = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

for (const key in myObject) {
  const value = myObject[key];
  console.log(`${key}: ${value}`);
}
*/

/*
const cartForParty = {
  cheese: 2.49,
  yogurt: 3.5,
  kiwi: 3.59,
  fish: 1.49,
  bread: 1.5,
};

const keys = Object.keys(cartForParty);
console.log(cartForParty.keys);

function calculateTotalPrice(goods) {
  let sum = 0;

  const keys = Object.keys(goods);

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    sum += goods[item];
  }

  return `Total: €${sum}`;
}

console.log(calculateTotalPrice(cartForParty));
*/

/*
const employeeRecords = [
  {
    name: "John",
    occupation: "developer",
    gender: "M",
    email: "john.doe@somewhere.net",
    salary: 70000,
  },
  {
    name: "Jane",
    occupation: "manager",
    gender: "F",
    email: "jane.eyre@somewhere.net",
    salary: 60000,
  },
];

function filterPrivateData(fullRecords) {
  const privateRecords = [];

  for (let { name, occupation, email } of fullRecords) {
    privateRecords.push({ name, occupation, email });
  }

  return privateRecords;
}

console.log(filterPrivateData(employeeRecords));
*/

/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Выведет: 15 (1 + 2 + 3 + 4 + 5)
*/

// const films = [
//   { id: 0,     title: 'Terminator' },
//   { id: 1,     title: 'Godfather' }
// ];

// const titles = films.map((film) => {
//   return film.title;
// });

// console.log(films);
// console.log(titles);

/*
let str = 'hello wonderful world';

console.log(str.split(''));

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    str[i] = 'XXX';
  }
}

for (let i = 0; i < str.length; i++) {
  str += str[i];
}

console.log(str);
*/

/*
const say = function() {
  console.log(this.nickname + ' говорит: ' + this.greeting);
}

const cat = {
  nickname: 'Кекс',
  greeting: 'Мяу',
  say
};

const dog = {
  nickname: 'Полиграф Шариков',
  greeting: 'Абырвалг',
  say
};

const fox = {
  nickname: 'Алиса',
  greeting: 'What does the fox say?',
  say
};



cat.say();
*/

/*
function say () {
  console.log(this.nickname + ' говорит: ' + this.greeting + '.');

  this.goodies.forEach(function (goodie) {
    console.log(this.nickname + ' любит: ' + goodie);
  });
}

const cat = {
  nickname: 'Кекс',
  greeting: 'Мяу',
  goodies: [
    'Свежую рыбку',
    'Шнурки хозяйских кроссовок',
  ],
  say,
};

cat.say();
*/

/*
const members = [['Саша', 'Игорь'], ['Лидия', 'Сергей']];

members.forEach(() => {
  members.forEach((member) => {
    console.log(member);
  })
});
*/

/*
function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();
*/

/*
const justObj = {
  title: "Our obj",
  showObj() {
    console.log(this.title);
  },
};
*/

/*
const obj = {
  color: "red",
  smell: "good",
  tellAboutObj1: (() => {
    console.log(`looks ${this.color}, smells ${this.smell}`);
  })(),
  tellAboutObj2() {
    console.log(`looks ${this.color}, smells ${this.smell}`);
  },
};

//obj.tellAboutObj1();
obj.tellAboutObj2();
*/

/*
const movies = {
  id: 1,
  titles: ["Terminator", "Aliens", "Titanic"],
  showTitles() {
    this.titles.forEach((title) => {
      console.log(this.id, title);
      this.id++;
    });
  },
};

movies.showTitles();

const films = {
  id: 1,
  titles: ["Terminator", "Aliens", "Titanic"],
  showTitles: () => {
    console.log(this.titles);
  },
};

films.showTitles();
*/

/*
function User(name, age) {
  const obj = {
    this.name: name,
    this.age: age
  }

  return obj;
  
}

const valeriu = new User('Valeriu', 30);
console.log(valeriu);
*/

/*
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

let dog = {
  name: "Doggo",
  __proto__: animal
};

for (let prop in dog) {
  if (rabbit.hasOwnProperty(prop)) {
    console.log(`Ours: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
*/

/*
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)
delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)
delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)
*/

/*
var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
  this.__proto__: animal;
}

console.log();
*/

/*
function showPerson(firstName, lastName) {
  let fName = firstName;
  let lName = lastName;
  let logThis = function() {
      console.log(fName + lName);
  };
}

const result = showPerson('John', 'Doe');
result.logThis();
*/

/*
const obj = {
  arr: [1, 2, 3, 4, 5, 6],

  showThis () {
    this.arr.forEach((element) => {
      console.log(element, this);
    })
  }
}

obj.showThis();
*/
/*
function createCircle (radius) {
  return {
    radius,
    draw: function() {
      console.log('draw this circle ');
    }
  }
}

console.log(createCircle(1));
*/

/*
const creatures = [
  {
    id: '001',
    description: 'Cat',
    voices: ['Miew', 'Hshhh']
  },
  {
    id: '002',
    description: 'Dog',
    voices: ['Woof', 'Gav']
  },
  {
    id: '003',
    description: 'Snake',
    voices: ['Hssss', 'Ssssss', 'Psssss']
  },
  {
    id: '004',
    description: 'Seal',
    voices: ['Awawaw', 'Woof']
  },
];

let findText = function(animals = [], search = '') {
  const filteredAnimals = animals.filter((animal) => {
    const hasMatchingVoice = animal.voices.some((voice) => {
      const includedSearch = voice.includes(search);

      return includedSearch;
    });

    return hasMatchingVoice;
  });

  return filteredAnimals;
}

console.log(findText(creatures, 'oo'));

const includedSearch = creatures[1].voices[0].includes('oo');
console.log(includedSearch);
*/

/*
for (let key in Function.prototype) {
  alert.log(key);
}
*/

/*
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => console.log(result),

  error => console.log(error)
);
*/

/*
function fetchData(callback) {
  // Эмуляция запроса к серверу
  setTimeout(() => {
    const data = "Всякая инфа";
    callback(null, data); // Вызываем колбэк с данными в случае успешного завершения
  }, 2000); // Эмулируем задержку запроса на 2 секунды
}

// Использование функции fetchData с колбэком
fetchData(function(error, mydata) {
  if (error) {
    console.error('Произошла ошибка при получении данных:', error);
    // Обработка ошибки здесь
  } else {
    console.log('Данные получены:', mydata);
    // Дальнейшая обработка данных здесь
  }
});
*/

/*
const timerFunc = function() {
  setTimeout(function() {
    console.log('File content');
  }, 2000)
  console.log('Wait a second, loading...');
}

timerFunc();
*/

/*
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve('hello world');
  }, 2000);
});

promise.then(function(data) {
  console.log(data);
});
*/

/*
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('return of the job 1');
  }, 1000)
})

promise
.then(function(data) {
  console.log('data1', data);

  function job2() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('return of the job 2');
      }, 1000)
    })
  }

  return job2();
})

.then(function(data) {
  console.log('data2', data);

  return 'Hello, world';
})

.then(function(data) {
  console.log('data3', data);
});
*/

/*
function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}

let promise = job(true);

promise

.then(function(data) {
  console.log('1 ' + data);

  return job(true);
})

.then(function(data) {
  if (data !== 'victory') {
      throw 'Defeat';
  }

  return job(true);
})

.then(function(data) {
  console.log('2 ' + data);
})

.catch(function(error) {
  console.log('3 ' + error);

  return job(false);
})

.then(function(data) {
  console.log('4 ' + data);

  return job(true);
})

.catch(function(error) {
  console.log('5 ' + error);

  return 'Error caught';
})

.then(function(data) {
  console.log('6 ' + data);

  return new Error('test');
})

.then(function(data) {
  console.log('Success:', data.message);
})

.catch(function(data) {
  console.log('Error:', data.message);
});
*/

/*
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:

const orderSunglasses = function() {
  return new Promise(function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  });
};

const orderPromise = orderSunglasses();
console.log(orderPromise);
*/

/*
function fetchData() {
  return new Promise((resolve, reject) => {
    // Имитация отправки запроса
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      // Успешное завершение промиса с данными
      resolve(data);
    }, 2000);
  });
}

// Использование промиса
fetchData()
  .then(data => {
    console.log('Received data:', data); // Обновление интерфейса с полученными данными
  })
  .catch(error => {
    console.error('Error occurred:', error); // Обработка ошибки, если запрос не удался
  });
*/

/*
const sendRequest = function(data) {
  const condition = true;

  setTimeout(function() {
    if (condition) {
      data('Request sent');
    } else {
      data('Error Error Error');
    }
  }, 2000)

  console.log('Loading, please wait...');
};

sendRequest(console.log);
*/

/*
const postRequest = function() {
  return new Promise(function(resolve, reject) {
    const condition = false;

    setTimeout(function() {
      if (condition) {
        resolve('Request sent');
      } else {
        reject('Error Error Error');
      }
    }, 2000)

    console.log('Loading, please wait...');
  })
}

postRequest()
  .then(
    function(data) {
      console.log(data);
    }, 
    function(data) {
      console.log(data);
    }
  )

*/

/*
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));
*/

/*
const generateInsult = async (lang = "ru", type = "default") => {
  const url = `https://evilinsult.com/api/generate_insult.php?lang=${lang}&type=${type}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.insult;
};

// Пример использования:
const body = document.querySelector('body');

const insult = document.createElement('p');
insult.textContent(generateInsult());
insult.classList.add('insult');

body.appendChild(insult);
*/

/*
function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}

let promise = job(true);

promise

.then(function(data) {
  console.log('1 ' + data);

  return job(true);
})
.catch(function(data) {
  console.log('1 ' + data);
})
*/

/*
[1, 2, 3, 4].forEach(function(it) {
  console.log(it)
});
*/

/*
function job(delay) {
  return new Promise(function(resolve) {
      setTimeout(function() {
          console.log('Resolving', delay);
          resolve('done ' + delay);
      }, delay);
  });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise
  .then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
  });
*/

/*
const extract = async(address) {
  try {
    const response = await fetch(address);
    return await response.text();
  } catch(error) {
    throw error;
  }
}

extract('https://learn.javascript.ru/promise-chaining');
*/

const generateInsult = async (lang = "ru", type = "default") => {
  const url = `https://evilinsult.com/api/generate_insult.php?lang=${lang}&type=${type}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.insult;
};
