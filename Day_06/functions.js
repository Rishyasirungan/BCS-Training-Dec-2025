//Task 1
/*function moodReport (emoji="🙂", timeOftheDay="morning 🌅."){
     return `Feeling ${emoji} this ${timeOftheDay}`
}
console.log(moodReport());

console.log(moodReport("😎","afternoon 🌞."));

console.log(moodReport("🙂"));*/

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

const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };

function introduceWizard(line){
    const {title , name, wand:{core}}=wizard;
    return `${title} ${name} wields a wand with ${core} core`;
}
console.log(introduceWizard(wizard));

// 🪄 Archmage Merlin wields a wand with Phoenix Feather core.

