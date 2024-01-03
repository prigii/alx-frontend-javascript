#!/usr/bin/env node
export default function iterateThroughObject(reportWithIterator) {
    const employeesArray = [...reportWithIterator];
    const resultString = employeesArray.join(' | ');
    return resultString;
    }
