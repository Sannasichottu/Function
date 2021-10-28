//odd number
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log("Odd number #" + i);
    }
}

//string
let color = ["Red", "Pink", "Green", "Yellow"]
let selectColour = (color.toUppercase);
console.log(color);


//sum 
//addition
var sum = 10 + 20;
console.log(sum);
//subtraction
sum = sum - 5;
console.log(sum);
//multiplication
sum = sum * 2;
console.log(sum);
//Division
sum = sum / 5;
console.log(sum);
//Modulas
sum = sum % 3;
console.log(sum);

//Prime number
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

console.log(numArray);

//palindromes 
let arr = ["apple", "racecar", "pineapple", "porcupine", "mango", 'pappaya', 'orange'];
let palindromes = arr.filter(w => {
    let len = w.length;
    for (let i = 0; i < len / 2; i++) {
        if (w[i] == w[len - i - 1]) {
            return true;
        } else {
            return false;
        }
    }
});
console.log(palindromes)

//median of two sorted array
let products = [
    { id: 1, title: "Mobile Phone", cost: 7500 },
    { id: 2, title: "Desktop", cost: 80000 },
    { id: 3, title: "headphone", cost: 2000 },
];
let sortbyLowprice = products.sort((a, b) => a.cost - b.cost);
console.log(sortbyLowprice);

//duplicate arry
const user = {
    name: 'sanu',
    getFullname() {
        console.log("My name is ," + this.name);
    }
}
let other = Object.assign({ age: 22 }, user);
console.log(other);

// roated array by K times
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
    for (let i = points.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points[i]
        points[i] = points[j]
        points[j] = k
    }
    document.getElementById("demo").innerHTML = points;
}



//Arrow function

//odd number
function odd_even() {
    var a;
    a = number(document.getElementById("input_num").value);
    if (a % 2 !== 0) {
        document.write("even number");
    } else {
        document.write("odd number");
    }
}

//string
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
titleCase("I'm a little tea pot");

//sum
function sumArray(array) {
    for (
        var
            index = 0, // The iterator
            length = array.length, // Cache the array length
            sum = 0; // The total amount
        index < length; // The "for"-loop condition
        sum += array[index++] // Add number on each iteration
    );
    return sum;
}

//prime number
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function(number) numArray.filter => {
for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
return true;
});

console.log(numArray);

//palindromes 
let arr = ["apple", "racecar", "pineapple", "porcupine", "mango", 'pappaya', 'orange'];

function(palindromes) arr.filter(w => {
    let len = w.length;
    for (let i = 0; i < len / 2; i++) {
        if (w[i] == w[len - i - 1]) {
            return true;
        } else {
            return false;
        }
    }
});
console.log(palindromes)