function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (demeritPoints >= 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
  
  const speed = parseInt(prompt("Enter car speed (in km/h):"));
  const result = calculateDemeritPoints(speed);
  console.log(result);
  