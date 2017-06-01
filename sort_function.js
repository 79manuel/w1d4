
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(a, b){
  if (a.name < b.name)
      return -1
  if (a.name > b.name)
      return 1
  return a.age - b.age;

  //return a.name < b.name ? -1 : 1; The quote mark
  //is the same as If Else. Use this one in the future!
});

console.log(students);