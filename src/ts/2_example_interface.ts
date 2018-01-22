interface PersonInterface {
    name:string,
    age:number
}

function showPerson(person:PersonInterface) :void {
    /**
     * console.log('Name: ' + person.name + ' age: ' + person.age)
     *
     **/
    console.log(`Name: ${person.name} age: ${person.age}`)
}

showPerson({name: 'Palomino', age: 33 });


//function showPersons(persons:Array<PersonInterface>) :void {
function showPersons(persons:PersonInterface[]) :void {
    /**
     * persons.map(function (person) {
     *     showPerson(person)
     * })
     *
     * persons.map((person) => {
     *     showPerson(person)
     * });
     *
     **/
    persons.map(person => showPerson(person));
}

showPersons([
    {name: 'Agapito', age: 44},
    {name: 'Manolito', age: 22}
]);