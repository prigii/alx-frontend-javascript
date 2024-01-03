#!/usr/bin/env node
export default function createIteratorObject(report) {
    let departments = Object.values(report.allEmployees);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        next() {
        if (currentDepartmentIndex < departments.length) {
            const currentDepartment = departments[currentDepartmentIndex];
            if (currentEmployeeIndex < currentDepartment.length) {
            const result = {
                value: currentDepartment[currentEmployeeIndex],
                done: false,
            };
            currentEmployeeIndex++;
            return result;
            } else {
            currentDepartmentIndex++;
            currentEmployeeIndex = 0;
            return this.next();
            }
        } else {
            return { done: true };
        }
        },
    };
    }

 //   export default function createIteratorObject(report) {
   //     let departments = Object.values(report.allEmployees).flat();
        let currentIndex = 0;
      
        return {
          [Symbol.iterator]() {
            return this;
          },
          next() {
            if (currentIndex < departments.length) {
              const result = {
                value: departments[currentIndex],
                done: false,
              };
              currentIndex++;
              return result;
            } else {
               return { done: true };
            }
            },
        };
        }
