export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: grade,
      };
    });
}
