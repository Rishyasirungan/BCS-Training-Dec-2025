/*introduceWizard = ({ title = "Master", name, wand: { core } }) => {
  return `🪄 ${title} ${name} wields a wand with ${core}.`;
}

const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: { core: "Phoenix Feather" },
};

console.log(introduceWizard(wizard));*/

//Task 1.1- Loop

/*let i=1;
while(i<=5){
    console.log(`❤`.repeat(i));
    i++;
}*/

//Task 1.2

/*function printPattern(emoji, noOfRows){
  var row=1;
  while(row<=noOfRows){
    console.log(`${emoji}.repeat(row)`);
  }
};


printPattern("🐳", 3);*/

//Task 1.1 - loops Array

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

for(i=0;i<avengers.length;i++){
  console.log(`${avengers[i]} contains ${avengers[i].length} Letters`);
}


