let student = {
    id: 20,
    name: "Petr",
    Age: 19,
    course: "Medcine",
    lessons:[
        {
            name: "anatomy",
            id: 3,
            nameOfTeacher: "Marya Petrovna"
        }
    ] 
}

console.log(student);

let str = prompt ('введите страну');

switch(str){
    case "Cuba":
        console.log('Havana');
        break;
    case "Russia":
        console.log('Moscow');
        break;
    case "France":
        console.log('Paris');
        break;
    case "Germany":
        console.log('berlin');
        break;
    default:
        console.log("неверно введена страна");
}



let array = [2, 12, 32, 3213, 34, 3443, 4342, 43242]


let newArray = [];
for(let i=0; i<array.length; i++){
    if(array[i]>10){
        newArray.push(array[i])
    }
}

console.log(newArray)