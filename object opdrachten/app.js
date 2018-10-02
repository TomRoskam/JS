//opdarcht 1
let lapRounds = {
    laprondes: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
}

console.table(lapRounds);

//opdarcht 2
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 123,
        salary: 646473

    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 13,
        salary: 6473
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 1232,
        salary: 6463
    }
]

for (let i = 0 ; i < teachers.length ; i++) {
    console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer`);
}

for(i=0 ; i<teachers.length ; i++){
    console.log(`${teachers[i].name} verdient ${teachers[i].salary} per ${teachers[i].hoursPerWeek} uur.`);
    
    }

