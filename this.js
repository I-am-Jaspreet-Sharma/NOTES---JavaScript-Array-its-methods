console.log(this); // Environment Dependent

function ranveerOnGlobalStage()
{
    return typeof this;
}
console.log(ranveerOnGlobalStage()); // "object"

// When using this inside a regular function, reference of this depends upon the type of invocation of regular function.
// If default invocation -> this refers to Global Object -> Default Binding
// If method invocation -> this refers to that object (Object before dot) -> Implicit Binding
// If explicit invocation -> this refers to the explicitly passed object -> Explicit Binding
// If constructor invocation -> this refers to the new object created -> New Binding

function ranveerWithNoScript()
{
    return this;
}
console.log(ranveerWithNoScript()); // Global Object

const bollywoodFilm = {
    name: "Bajirao Mastani",
    lead: "Ranveer",
    introduce(){
        return `${this.lead} performs in ${this.name}`;
    }
};
console.log(bollywoodFilm.introduce()); // "Ranveer performs in Bajirao Mastani"

const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer", "Deepika", "Priyanka"],
    announceCast(){
        this.cast.forEach(actor => console.log(`${this.name} introduces ${actor}`));
    }
}
filmDirector.announceCast();
// "Sanjay Leela Bhansali introduces Ranveer"
// "Sanjay Leela Bhansali introduces Deepika"
// "Sanjay Leela Bhansali introduces Priyanka"

const filmSet = {
    crew: "Spot boys",
    prepareBoys(){
        console.log(`outer this.crew: ${this.crew}`);
        function arrangeChairs()
        {
            console.log(`Inner this.crew: ${this.crew}`);
        }
        arrangeChairs(); // default invocation
    }
};
filmSet.prepareBoys();
// "outer this.crew: Spot boys"
// "Inner this.crew: undefined"

filmSet.prepareProps = function(){
    const arrangeLights = () => console.log(`Arrow this.crew: ${this.crew}`);
    arrangeLights();
}
filmSet.prepareProps(); // Arrow this.crew: Spot boys

// Arrow function does not have their own this.
// When this is written inside an arrow function, it lexically inherits this from its surrounding scope.

const obj = {
    name: "Jaspreet",
    this: console.log(this), // Environment dependent
    arrow: () => console.log(this), // surrounding scope this value = Environment dependent
    regular: function(){console.log(this);},
};
obj.arrow(); // Environment dependent
obj.regular(); // {"name": "Jaspreet", "this": undefined, "arrow": [Function: arrow], "regular": [Function: regular]}

const obj2 = {
outer: function outer() {

  function test() {

    console.log(this)
  }

  test(); // default invocation
}
};

obj2.outer(); // Global Object

const actor = {
    name: "Ranveer",
    bow(){
        return `${this.name} takes a bow`;
    }
};
const detachedBow = actor.bow; // [Function: bow]
console.log(detachedBow()); // default invocation
// undefined takes a bow

const obj3 = {
    name: "Jaspreet",
    hello: function(){return () => console.log(`${this.name} says hello`)},
};
const greet = obj3.hello(); // method invocation
// [Function: hello]
greet(); // "Jaspreet says hello"