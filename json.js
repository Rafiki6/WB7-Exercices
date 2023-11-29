// JSON (JavaScript Object Notation): Is a standard format for representing text-based structured data.
// Object are stored within curly braces.
// Data is in property/value pairs.

// EXAMPLE
const employer = {
    "employedId" : 3,
    "name": "Ian", 
    "jobTitle": "Stock Broke"
};

// TO TRANSMIT JSON DATA OVER A NETWORK, YOU MUST CONVERT IT TO A STRING.
//JAVASCRIPT HAS 2 METHODS WILL HELP YOU WITH THESE TASKS
// - JSON.stringfy()
// - JSON.parse()

// USING JSON.STRINGFY() convert JavaScript objects to JSON string
let job = {
    title : "Web Designer",
    startDate : "October 2022",
    company : "AT&T",
    minSalary : 52000,
    maxSalary : 86000 
    };
let filter = ["title","company"];
let str = JSON.stringify(job,filter);//only the title and company properties will be in the string.
let str1 = JSON.stringify(job);//this wil return the whole array
console.log(str);

// PARSING JSON
// Use JSON.parse() to convert a JSON string back into a javaScript object.
let str2 = `{"title" : "Web Designer",
 "startDate" : "October 2022",
 "company" : "AT&T",
 "minSalary" : 52000,
 "maxSalary" : 86000 
 }`;
 let job1 = JSON.parse(str2);
 console.log(job1.title);
 console.log(job.company);
 console.log(str2)//Retuns back array in string methods

