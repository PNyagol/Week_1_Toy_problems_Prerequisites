function calculateGrade() {
    let marks = parseInt(prompt("Enter student marks (0-100):"));
  
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  const grade = calculateGrade();
  console.log(`Grade: ${grade}`);
  