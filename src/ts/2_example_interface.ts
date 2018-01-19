interface PersonInterface {
    name:string,
    age:number
}

function showPerson(person:PersonInterface) {
    /**
     * console.log('Name: ' + person.name + ' age: ' + person.age)
     *
     **/
    console.log(`Name: ${person.name} age: ${person.age}`)
}

showPerson({name: 'Palomino', age: 33 });



function showPersons(persons:PersonInterface[]) {
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