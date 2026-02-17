const hero = {
    name: "Luna The Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true
};
console.table(hero); // hero = {name: "Luna The Brave", class: "Mage", level: 12, health: 85, mana: 120, isAlive: true}

hero.weapon = "fire"; // hero = {name: "Luna The Brave", class: "Mage", level: 12, health: 85, mana: 120, isAlive: true, weapon: "fire"}
console.table(hero); // hero = {name: "Luna The Brave", class: "Mage", level: 12, health: 85, mana: 120, isAlive: true, weapon: "fire"}

// New key-values pair can be added using . (dot) operator
// Syntax: objectName.newKey = newValue;

delete hero.level; // hero = {name: "Luna The Brave", class: "Mage", health: 85, mana: 120, isAlive: true, weapon: "fire"}
console.table(hero); // hero = {name: "Luna The Brave", class: "Mage", health: 85, mana: 120, isAlive: true, weapon: "fire"}

// delete is used to delete key-value pair
// Syntax: delete objectName.key;

console.log("name" in hero); // true
// console.log(name in hero); // ReferenceError: name is not defined

console.log("toString" in hero); // true -> due to prototypal chaining

// Every object inherits key-value pairs from Object.Prototype
// But this creates confusion because how do we know that when the result comes true using in to find a key inside an object, whether the key has been inherited from Object.Prototype or user-defined

console.log(hero.hasOwnProperty("toString")); // false -> ignores prototypal chaining
console.log(hero.hasOwnProperty("name")); // true

// .hasOwnProperty() solves the problem discussed in line 29. It takes key as an argument and returns true only if the key is user-defined and actually exist in object

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "Volcanic glass"
};
const keys = Object.keys(artifact); // array of strings -> ["name", "era", "value", "material"]
console.log(keys); // array of strings -> ["name", "era", "value", "material"]

// Object.keys() is used to create an array containing all the keys in the object

const values = Object.values(artifact); // array -> ["Obsidian Crown", "Ancient", 50000, "Volcanic glass"]
console.log(values); // array -> ["Obsidian Crown", "Ancient", 50000, "Volcanic glass"]

// Object.values() is used to create an array containing all the values in the object

const entries = Object.entries(artifact); // array of arrays containing key at 0th index and value at 1st index -> [["name", "Obsidian Crown"], ["era", "Ancient"], ["value", 50000], ["material", "Volcanic glass"]]
console.log(entries); // array of arrays containing key at 0th index and value at 1st index -> [["name", "Obsidian Crown"], ["era", "Ancient"], ["value", 50000], ["material", "Volcanic glass"]]

for(const [key, value] of Object.entries(artifact)) console.log(`${key} -> ${value}`); // "name -> Obsidian Crown" | "era -> Ancient" | "value -> 50000" | "material -> Volcanic glass"

// for of loop is used to iterate over each element of an Array

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Yellow Sapphire", 75000],
];
const priceObject = Object.fromEntries(priceList); // object -> {"Obsidian Crown": 50000, "Ruby Pendant": 30000, "Yellow Sapphire": 75000}
console.log(priceList); // object -> {"Obsidian Crown": 50000, "Ruby Pendant": 30000, "Yellow Sapphire": 75000}

// Object.fromEntries() generates an object containing key-value pair from an array of arrays containing key at 0th index and value at 1st index

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

const displayCase = {
    artifact: "Obsidian",
    location: "Hall A, Case 3",
    locked: true
};

Object.freeze(displayCase);

// displayCase.artifact = "Sapphire"; // TypeError: Attempted to assign to Readonly property
// displayCase.worth = 10000; // TypeError: Attempting to define property on object that is not extensible
// delete displayCase.location; // TypeError: Unable to delete property

// Object.freeze() makes an object immutable. It neither allows editing of existing properties nor allows any structural changes.

const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crowns",
    verified: true
};

Object.seal(catalogEntry);

catalogEntry.id = "ART-002";
console.log(catalogEntry); // object -> {id: "ART-002", description: "Ancient Crowns", verified: true};

// catalogEntry.timeline = "Ancient"; // TypeError: Attempting to define property on object that in not extensible

// delete catalogEntry.verified; // TypeError: Unable to delete property

// Object.seal() allows editing of existing properties of object but does not allow structural changes

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

const secureArtifacts = {name: "Ruby Pendant"};

Object.defineProperty(secureArtifacts, "catelogId", {
    value: "SEC-999",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(secureArtifacts); // Object -> {"name": "Ruby Pendant", "catelogId": "SEC-999"}
console.log(secureArtifacts.catelogId); // SEC-999

// secureArtifacts.catelogId = "HACKED"; // TypeError: Attempted to assign to Readonly property

// Object.defineProperty() is used to create custom properties (key-value pair) in the object

const desc = Object.getOwnPropertyDescriptor(secureArtifacts, "catelogId"); // object -> {value: "SEC-999", writable: false, enumerable: true, configurable: false}
console.log(desc); // object -> {value: "SEC-999", writable: false, enumerable: true, configurable: false}

// Object.getOwnPropertyDescriptor() prints all the properties related to particular key in an object

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

const employee = {name: "Jaspreet", salary: 30000};
for(const key in employee) console.log(key); // "name" | "salary"

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// *************************************************************** KEY POINTS ************************************************************************* //

/** 
 * 1. for loop is most optimized
 * 2. while loop is used when no. of iterations are unknown
 * 3. do-while loop guarantees first iteration
 * 4. for...in loop is used for objects only
 * 5. for...of, map, forEach, filter, reduce are all used for arrays
*/