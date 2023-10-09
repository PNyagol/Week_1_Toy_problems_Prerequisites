function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    // Constants for KRA, NHIF, NSSF rates
    const kraRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.06;


    // while I know that to get the total deductions I can add these rates first and multiply with the basicSalary, 
    // I have decided to take the rout of working with them individually to make my code comprehensive and easy to follow
    // As such, I will multiply every rate of deduction with the basicSalary and then add the total deductions later
    //  because the instructions want them separately
  
    const grossSalary = basicSalary + benefits;
    const kraDeduction = grossSalary * kraRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    // payee is all these deductions bundled together

    const payee = kraDeduction + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - payee;
  
    return {
      grossSalary,
      kraDeduction,
      nhifDeduction,
      nssfDeduction,
      payee,
      netSalary,
    };
  }
  
  const salaryDetails = calculateNetSalary();
  console.log("Salary Details:");
  console.log(salaryDetails);
  