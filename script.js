const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".

  person2.firstName = "Simon"
  
  console.log(person1);
  console.log(person2);

  // perchè entrambi puntano allo stesso oggetto quindi le modifiche di person 2 modificano anche person1
  