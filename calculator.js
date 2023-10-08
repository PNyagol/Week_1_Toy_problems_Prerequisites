function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    // Constants for KRA, NHIF, NSSF rates
    const kraRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.06;
  
    const grossSalary = basicSalary + benefits;
    const kraDeduction = grossSalary * kraRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
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
  