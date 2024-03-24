
function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 12298) {
        tax = 0.1 * grossSalary;
    } else if (grossSalary <= 23885) {
        tax = 1229.80 + 0.15 * (grossSalary - 12298);
    } else if (grossSalary <= 35472) {
        tax = 3230.70 + 0.2 * (grossSalary - 23885);
    } else if (grossSalary <= 47059) {
        tax = 5822.40 + 0.25 * (grossSalary - 35472);
    } else {
        tax = 10361.50 + 0.3 * (grossSalary - 47059);
    }

    return tax;
}


function calculateNHIF(grossSalary) {
    let nhif = 0;

    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else {
        nhif = 1100;
    }

    return nhif;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    const nssfRate = 0.06;
    return Math.min(0.06 * grossSalary, 2000); 
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}


const basicSalary = 50000; 
const benefits = 10000; 
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);

