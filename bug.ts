function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
}

greet("world", new Date()); // Works correctly
greet("typescript", "2024-01-15"); // Error: Argument of type 'string' is not assignable to parameter of type 'Date'.