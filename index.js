//1.Pop() and Push()
var fruits = ["apple","banana","orange","grape"]
alert(fruits)
console.log(fruits);

var purchasedFruit = fruits.pop();
console.log(`Customer purchased: ${purchasedFruit}`)
alert("Customer purchased Grape")
console.log("Updated list of available fruits:", fruits);
alert("Updated list of available fruits:");
alert(fruits)


var newFruit = prompt("Enter a New fruit name ");
fruits.push(newFruit);
alert("Updated list of available fruits after addition:")
alert(fruits)
console.log("Updated list of available fruits after addition:", fruits)

//2.Shift() and unshift()
var newArrivedFruit = prompt("Enter a New Arrived fruit name ");
fruits.shift(newArrivedFruit);
//var newlyArrivedFruit = fruits.shift(Pineapple);
alert("Newly arrived fruit");
alert(newArrivedFruit)
console.log(`Newly arrived fruit: ${newArrivedFruit}`);
console.log("Updated list of available fruits:", fruits);
alert("Updated list of available fruits:")
alert(fruits)

var userAddedFruit = prompt("Enter a fruit to add to the beginning:");
fruits.unshift(userAddedFruit);
console.log("Updated list of fruits after addition:", fruits);
alert("Updated list of fruits after addition:")
alert(fruits)

//3.splice()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var startIndex = prompt("Enter the starting index");
var endIndex = prompt("Enter the ending index");
numbers.splice(startIndex, endIndex - startIndex + 1);
alert("Updated array after removing the specified range")
alert(numbers)
console.log("Updated array after removing the specified range:", numbers);

//4.slice():

var sliceStart = prompt("Enter the starting index for the slice:")
var sliceEnd = prompt("Enter the ending index for the slice:")

var extractedSlice = numbers.slice(sliceStart, sliceEnd + 1);
alert("Extracted slice of numbers")
alert(extractedSlice)

//5.length;









