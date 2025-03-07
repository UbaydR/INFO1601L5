
function getAverageGrade(student, course) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      return entry.grades.reduce((sum, grade) => sum + grade, 0) / entry.grades.length;
    }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let entry of student.transcript) {
    if (entry.course === course && num >= 0 && num < entry.grades.length) {
      return entry.grades[num];
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0, count = 0;
  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      sum += mark;
      count++;
    }
  }
  return count > 0 ? sum / count : -1;
}

//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];
