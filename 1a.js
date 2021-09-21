function destructureArray(arr){
    let name = []
    let skills = []
    let scores = []
    for(let i = 0; i < arr.length; i++){
        if(!(Array.isArray(arr[i]))){
            name.push(arr[i])
        }
        else{
            if((Array.isArray(arr[i])) && typeof arr[i][0] === 'string'){
                skills = [...arr[i]]           
            }
            else{
                scores = [...arr[i]]
            }
        }
    }
    console.log(name)
    console.log(skills)
    console.log(scores)
}

const student = ['David', [98, 85, 90, 95], ['HTM', 'CSS', 'JS', 'React']]
destructureArray(student)

function convertArrayToObject(students){
    // let keys = ['name','skills','scores']
    let myobj = []
    
     students.forEach(function(student){
         student.forEach(function(stu){
            let obj ={}
            if(!(Array.isArray(stu))){
                obj['name'] = stu
                myobj = [...myobj,obj]
            }
            else{
                if(Array.isArray(stu)  && typeof stu[0] === 'string'){
                    obj['skills'] = stu
                    myobj = [...myobj,obj]
                }
                else{
                    obj['scores'] = stu
                    myobj = [...myobj,obj]
                }
            }
        })
    })
    console.log(myobj)
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
convertArrayToObject(students)

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

//  1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets


function addSkills(copiedStu,obj){
    if(obj.skills === "Bootstrap"){
        copiedStu.skills.frontEnd.push(obj)
    }
    else if (obj.skills === "Express"){
        copiedStu.skills.backEnd.push(obj)
        console.log(copiedStu.skills.backEnd)
    }
    else if (obj.skills === "SQL"){
        copiedStu.skills.dataBase.push(obj)
        console.log(copiedStu.skills.dataBase)
    }
    else{

    }
}
// const copiedStu = {...student}

// addSkills(copiedStu,{skills:'express',level:8})
