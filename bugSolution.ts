function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
}

greet("world", new Date()); // Works correctly
greet("typescript", new Date("2024-01-15")); // Correctly passes a Date object