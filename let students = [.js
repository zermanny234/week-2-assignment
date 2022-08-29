let students = [
    {
        name : "Siddharth Abhimanyu",
        age : 21
    },
    {
        name : "Malar",
        age : 25
    },
    {
        name :"Maan",
        age : 18
    },
    {
        name : "Bhallala Deva",
        age : 17
    },
    {
        name :"Baahubali",
        age : 16
    },
    {
        name : "AAK Chandran",
         age : 23
    },
    {
         name : "Gabbar Singh",
        age : 33
    },
    {
        name : "Mogambo",
        age : 53
    },
    {
        name : "Munnabhai",
        age : 40
    },
    {
         name : "Sher Khan",
        age : 20
    },
    {
        name : "Chulbul Pandey",
        age : 19
    },
    {
    name : "Anthony",
    age : 28
    },
    {
        name : "Devadas",
        age : 56
    }
    ]
    
    for(let k = 0; k< students.length; k++){
        console.log (students[k].age<20)
        let lowerage = students[k].age
        if (lowerage<=19){
            console.log(students[k])
        }
    }