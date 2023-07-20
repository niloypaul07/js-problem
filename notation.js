const student = {
    name: 'nirob',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        physics: 86,
        chemistry: 77,
    },
}

const marks = student.marks;
//console.log(marks);
const math = student.marks.math;
//console.log(math);
const chemistry = student['marks']['chemistry'];
//.log(chemistry);
const Subject = 'math';
const subjectMarks = student.marks[Subject];
console.log(subjectMarks);