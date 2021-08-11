// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]
    
//     // Hier komt jouw functie
//     const findSpiderMan = (array) => {
//         return array.find(item => item.name ==="Spiderman" )
//     }


    
//     console.log(findSpiderMan(superheroes)) 
//     // Find Spiderman
//     // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// const doubleArrayValues = (array) => array.map(item => item + item)

// console.log(doubleArrayValues([1, 2, 3]))
// // result should be [2, 4, 6]

// const containsNumberBiggerThan10 = (array) => {
//     return array.some(item => item > 10)
// }

// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) )
// // result should be true
// console.log(containsNumberBiggerThan10([1,2,1,2,1,2]))
// // result should be false


// const isItalyInTheGreat7 = (array) => {
//     console.log(array.includes("Italy"))
// }

// isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
//   // result should be true
// let sum = 0
// let newArray = []

// const tenfold =  array => {
//     array.forEach(element => {
//         sum = element * 10
        
//         newArray.push(sum)
//     });
//     return newArray
// }

// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
//   // result should be [10, 40, 30, 60, 90, 70, 110]

// const isBelow100 = (array) => array.every(item => item < 100)

// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
//   // result should be: false



const bigSum = array => {
    return array.reduce((nummer, huidigeWaarde) => {
        return nummer + huidigeWaarde}) 
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118