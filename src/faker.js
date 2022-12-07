const {faker } = require('@faker-js/faker');
const fs = require('fs')


const countryArr = [
    "USA", "India", "Russia", "China", "Nepal", "UK", "Thailand", "Spain", "Norway", "Germany", "Finland", "Japan", "Korea", 
    "Ukrain", "Brazil", "Iceland", "Iraq", "Dubai", "South Africa", "Syria", "Egypy", "Belgium", "France", "Australia", "Canada", 
    "Morocco", "Singapor", "malaysia", "Itlay", "Poland", "Switzerland", "Austria", "Denmark", "Taiwan", "Israel", "Qatar", "Jordan", 
    "Kenya"
]


function createData(max){
    const dummyList = [];
    for(let i = 0; i<=max; i++){
        var data = {
            id : faker.datatype.uuid(), 
            photo : faker.internet.avatar(),
            username : faker.name.fullName(),
            email : faker.internet.email(),
            phone : faker.datatype.number({min :6000000000, max : 9999999999}),
            occupation : faker.name.jobTitle(),
            age: faker.datatype.number({ min: 18, max: 65}),
            country : countryArr[Math.floor(Math.random() * countryArr.length-1)],
            vehicle : {
                Model : faker.vehicle.vehicle(),
                color : faker.vehicle.color(),
                carAge : faker.datatype.number({ min: 0, max: 20}),
            }
        }
        dummyList.push(data)
    }
    return dummyList
}

const result = createData(100)

fs.writeFileSync('fakeData.js', JSON.stringify(result, null, '\t'))



