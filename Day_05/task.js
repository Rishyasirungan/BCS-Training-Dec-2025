/*const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
};

const details = {
  year: 2002,
  price: 1200,
};

const fullDetails = {...book , ...details};
console.log(fullDetails);*/

const details1 = {
  authorAge: 55,
  year: 2002,
  price: 1200,
};

const book1 = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45,
};

const fullDetails={...book1, ...details1};
console.log(fullDetails);

