//Task 1.1
/*const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

for(let avenger of avengers){
  console.log(`${avenger} contains ${avenger.length} Letters`);
}*/

//Task 2.1
/*const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

var values = [];
function getTitles(books) {
  for(let book of books){
    //console.log(book.title);
    values.push(book.title)
}
return values;
}

console.log(getTitles(books));*/


//Task 2.2
/*const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

var values = [];
function getTitles(books) {
  for(let book of books){
    if(book.genre=="Fiction")
    values.push(book.title)
}
return values;
}

console.log(getTitles(books));*/

//Task - Function

/*function sayHello(){
    return function(){
        console.log("Hello! 🙂");
    }
}

sayHello()();*/

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function getTitles(books,getRate) {
  var values=[];
  for(let book of books){
    if(book.rating=<getRate){
      values.push(book.title)
    }
}
}
console.log(getTitles(books,4.7));
console.log(getTitles(books,6));
console.log(getTitles(books,4.9));
