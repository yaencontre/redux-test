class Persona {
    constructor(public age:number) {}

    growOld = () => {
        this.age++;
    }
}

let persona = new Persona(1);
setTimeout(persona.growOld,1000);
setTimeout(function() { console.log(persona.age); },2000); // 2



// A curried function
let add = (x: number) => (y: number) => console.log(x + y);
// Simple usage
add(3)(2);

// partially applied
let add123 = add(5);
// fully apply the function
add123(2);