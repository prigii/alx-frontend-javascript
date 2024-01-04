export default class HolbertonCourse {
    constructor(name, length, students) {
      this._setName(name);
      this._setLength(length);
      this._setStudents(students);
    }
  
    // Getter and Setter for name attribute
    _getName() {
      return this._name;
    }
  
    _setName(name) {
      if (typeof name === 'string') {
        this._name = name;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and Setter for length attribute
    _getLength() {
      return this._length;
    }
  
    _setLength(length) {
      if (typeof length === 'number') {
        this._length = length;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    // Getter and Setter for students attribute
    _getStudents() {
      return this._students;
    }
  
    _setStudents(students) {
      if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }
