function makeArray (firstArray, secondArray, maxLength) {
    
let thirdArray = [];

for (let i = 0; i < firstArray.length; i+=1) {
    thirdArray.push(firstArray[i]);
}

for (let i = 0; i < secondArray.length; i+=1) {
    thirdArray.push(secondArray[i]);
}

if (thirdArray.length > maxLength) {
    thirdArray = thirdArray.slice(0, maxLength);
}
    return thirdArray;
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
