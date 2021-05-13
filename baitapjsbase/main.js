const depEmployeeArray = [
    {
        id: 1,
        name: "Nguyễn A",
        age: 25
    },
    {
        id: 2,
        name: "Nguyễn B",
        age: 25
    },
    {
        id: 3,
        name: "Nguyễn C",
        age: 25
    },
    {
        id: 4,
        name: "Nguyễn D",
        age: 25
    },
    {
        id: 5,
        name: "Nguyễn E",
        age: 25
    },
];
const employeeArray = [
    {
        id: 1,
        name: "Nguyễn A",
        age: 25
    },
    {
        id: 2,
        name: "Nguyễn B",
        age: 25
    },
    {
        id: 3,
        name: "Nguyễn C",
        age: 25
    },
    {
        id: 4,
        name: "Nguyễn D",
        age: 25
    },
    {
        id: 5,
        name: "Nguyễn E",
        age: 25
    },
    {
        id: 6,
        name: "Trần A",
        age: 25
    },
    {
        id: 7,
        name: "Trần B",
        age: 25
    },
    {
        id: 8,
        name: "Trần C",
        age: 25
    },
    {
        id: 9,
        name: "Trần D",
        age: 25
    },
    {
        id: 10,
        name: "Trần E",
        age: 25
    },
];
let depEmployeeById = [];
let employeeById = [];
function isValid() {
    if(depEmployeeArray.length === 0 || employeeArray.length === 0 || !Array.isArray(depEmployeeArray) || !Array.isArray(employeeArray)) {
        console.log("đầu vào không hợp lệ");
        return;
    };
    depEmployeeById = depEmployeeArray.map( o => {
        return o.id;
    });
    employeeById = employeeArray.map ( o => {
        return o.id;
    });
    splitEmployeeViaDep(depEmployeeById,employeeById);
};
isValid();
function splitEmployeeViaDep(_depEmployeeById,_employeeById) 
{
    let arr1 = _depEmployeeById.filter(o=> {
        return _employeeById.includes(o);
    });
    let arr2 = employeeArray.filter(o => {
        return arr1.includes(o.id);
    });
    let arr3 = employeeArray.filter(o => {
        return !arr1.includes(o.id);
    });
    console.log("nhân viên thuộc phòng ban: " , arr2);
    console.log("nhân viên không thuộc phòng ban: " , arr3);
};

