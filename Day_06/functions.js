//Task 1
/*function moodReport (emoji="🙂", timeOftheDay="morning 🌅."){
     return `Feeling ${emoji} this ${timeOftheDay}`
}
console.log(moodReport());

console.log(moodReport("😎","afternoon 🌞."));

console.log(moodReport("🙂"));*/

//const { useSyncExternalStore } = require("react");

//Task 1.2
/*function checkAgeCategory(age){
if(age>=18 && age<=60){
    return "👨Adult";
}
else if(age<18){
    return "🧑Minor";
}
else{
    return "👨‍🦳Senior";
}
}

console.log(checkAgeCategory(32));
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));*/

//Task 1.3

/*const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };

function introduceWizard(line){
    const {title , name, wand:{core}}=wizard;
    return `${title} ${name} wields a wand with ${core} core`;
}
console.log(introduceWizard(wizard));*/

// 🪄 Archmage Merlin wields a wand with Phoenix Feather core.

//Task 1.4
/*function mergeInventory(existing, incoming){
    return `[...shelf,...delivery],${add}`;
 }
const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];
const add = ["🧃"]

console.log(mergeInventory(shelf, delivery));*/

//["🍎", "🥪", "🍫", "🍇", "🧃"]

//Task 1.5
/*function packBag(owner = "Anon", ...items){
    if(items==''){
         return `${owner}'s bag is empty`  
    }
    else{
        return `${owner}'s bag contains: ${items}`
    }
}

console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag());*/

//Task 1.6
// function whereAreYou(personObj){
    
//     if(personObj != {}){
//         const {user, location: {city, planet}} = personObj;
//         return `${user} is currently in ${city}, ${planet} 🌍`;
//     }
//     return `Someone is currently in Unknown, Earth 🌍`;   
// }

// console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
// console.log(whereAreYou({}));

//Thor is currently in Asgard, Yggdrasil 🌍
//Someone is currently in Unknown, Earth 🌍

