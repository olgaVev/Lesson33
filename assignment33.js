

function compareEmployees (employee1, employee2) {

    if (employee1.companies.length > employee2.companies.length)
    {
        console.log ('The name of the person who has more companies is ' + employee1.name + ' ' + employee1.last_name)
        printCompany(employee1)
    }
     if (employee1.companies.length == employee2.companies.length)
    {
            console.log ('The names of the person who has the same number of companies are ' + employee1.name +' '  + employee1.last_name + ' and '+ employee2.name + ' ' + employee2.last_name)
            printCompany(employee1)
            printCompany (employee2)
        }
    else
    console.log ('The name of the person who has more companies is ' + employee2.name + ' ' + employee2.last_name)
    printCompany(employee2)
}

function printCompany (employe){
    for (let x in employe.companies)
        console.log(employe.companies[x])
}

//First Employee Alex Gorin
const employee1 = {
    name: "Alex",
        last_name: "Gorin",
    age: "40",
    companies: ["Amdocs", "Teva","Almog"]

}
//Second Employee Ivan Ivanov
const employee2 = {
    name: "Ivan",
    last_name: "Ivanov",
    age: "35",
    companies: ["Veeva","Zara", "Amdocs","Teva"]
}

console.log(compareEmployees(employee1,employee2))