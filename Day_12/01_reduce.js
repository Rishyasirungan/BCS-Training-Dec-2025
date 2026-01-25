/*const arr=[1,7,3,10,5];
const result = arr.reduce((acc,curt)=>curt<acc ? acc : curt );
console.log(result);*/

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];



// Show who go the top mark?

const result = scores.reduce((acc,curt) => acc.marks>curt.marks ? acc : curt);
console.log(result.name);

// Output
// Debra Beard