// Database design
var classes = [
    {
        id: 0,
        name: '1A',
        teacher: 1,
        students: [
           0,
           1,
           2,
           3
        ]
    },
    {
        id: 1,
        name: '2A',
        teacher: 2
    },
    {
        id: 3,
        name: '3A',
        teacher: 3
    },
    {
        id: 4,
        name: '4A',
        teacher: 4
    },
    {
        id: 5,
        name: '5A',
        teacher: 5
    },
];

var teachers = [
    {
        id: 0,
        name: 'Huong',
        age: 30
    },
    {
        id: 1,
        name: 'Hoang',
        age: 35
    },
    {
        id: 2,
        name: 'Nguyet',
        age: 34
    },
    {
        id: 3,
        name: 'Tam',
        age: 33
    },
    {
        id: 4,
        name: 'Quan',
        age: 39
    }


];

var students = [
    { name: 'Khanh', height: 175, class:0 },
    { name: 'Khan', height: 165, class:0 },
    { name: 'Kha', height: 155,class:0 },
    { name: 'Kh', height: 145,class:0 },
]

function getStudentsInClass(className){
    var classObject = classes.find(function(x){
        return x.name === className;
    });

    var studentsInClass = students.filter(function(student){
        return student.class === classObject.id;
    });
    
    return studentsInClass;
}

var studentsInCLass = getStudentsInClass('1A');
console.log(studentsInCLass);

// Design database for a  e-magazine website
// Design database for 3-commerce 
// Library table
