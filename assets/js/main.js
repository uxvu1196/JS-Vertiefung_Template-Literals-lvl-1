/* Aufgabenstellung

Bitte erstelle Variablen mit deinen persönlichen Daten (Name, Nachname, Alter, Geburtsort, Größe, Gewicht, Hobbys, Computerspiele, Lieblingsessen, Lieblingssport, Lieblingsmodemarke, Lieblingsjahreszeit, Lieblingsurlaubsort). Bilde einen Satz mit Hilfe von: 

String concatenation: "string text " + let + " string text"
Template literals: `string text ${expression} string text`


Gib mit Hilfe von String concatenation oder Template literals einen Satz in der Konsole und in der HTML aus, der diese Variablen nutzt.
 */

let name = "Uyen";
let lastName = "Vu";
let age = 24;
let birthPlace = "München";
let height = "1.60 m"
let hobbys = "exploring new restaurants, bars and places, travelling, netflix and more"
let games = "sometimes I like to play on my ps4 and often on my phone I like to play Sudoku"
let sport = "jogging, pole, hiking, gym"
let favFood = "asian food, italian food, actually everything"
let favBrand = "everything what suits me"
let favTime = "Summer"
let favHolidayPlace ="Greece, Spain, Vietnam, Croatia, Amsterdam, and more"
// String concatenation
// \n ist ein neuer Abatz, aber wenn man einen neuen console.log macht, entsteht auto. ein neuer Absatz
console.log("My name is " + name + " " + lastName + " and I'm " + age + ".")
console. log("I was born and raised in " + birthPlace + " " + "and I'm " + height + " tall.")
document.write("My name is " + name + " " + lastName + " and I'm " + age + ". <br> <br>  ")
document.write("I was born and raised in " + birthPlace + " " + "and I'm " + height + " tall. <br> <br>")

//Template literals
console.log(`My Hobbys are ${hobbys} and ${games}. \nI like to do/go ${sport}. My favorite Food is ${favFood} and my favorite Brand is ${favBrand}. \n My favorite time in the year is ${favTime} and  I like to travel to ${favHolidayPlace} when it's holidays. \n`)
document.write(`My Hobbys are ${hobbys} and ${games}. <br>  <br>I like to do/go ${sport}. <br> <br>  My favorite Food is ${favFood} and my favorite Brand is ${favBrand}. <br> <br> My favorite time in the year is ${favTime} and  I like to travel to ${favHolidayPlace} when it's holidays.`)
