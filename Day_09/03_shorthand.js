/*const arr=["📃", "📑", "📄", "📝"]

console.log(arr.slice(0,2));

console.log(arr);*/

/*const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

const letters = avengers.map((name) => name.length);
console.log(letters);*/

// Output - map
// [4, 8, .... , 4]

// var t= "";
// for (let i=9;i>=0;i--){
//   if(i===6){
//     continue;
//   }
//   console.log(t=i)
// }

const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// Write a function that returns the name of a user's first friend
const getFirstFriendName = (users, userId) => {
  // Your code here - use nested destructuring
  //let name1 = [];
  let name1=users.find((friends) => friends);
  let{friends : {name}}= name1;
  return name;
};

console.log(getFirstFriendName(users, 1));
console.log(getFirstFriendName(users, 2));
console.log(getFirstFriendName(users, 3));
console.log(getFirstFriendName(users, 4));
