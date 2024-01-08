export default function daysSpent(){

    // Get the current date
const currentDate = new Date();
// Get the current year
const currentYear:number = currentDate.getFullYear();

// Create a new Date object for January 1st of the current year
const startOfYear = new Date(currentYear, 0, 1);

// Calculate the difference in milliseconds
const timeDifference: number = currentDate.getTime() - startOfYear.getTime();

// Convert the difference from milliseconds to days
const daysPassed:number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


// Calculate the fraction
const fraction:string = `${daysPassed} / 365 days, ${currentYear}`;

return `${fraction}`;

}