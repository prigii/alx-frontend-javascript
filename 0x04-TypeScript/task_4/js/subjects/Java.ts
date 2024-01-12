// task_4/js/subjects/Java.ts

namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingJava) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
