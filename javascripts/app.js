// Rover Object Goes Here
// ======================

let rover = {
  direction: "N",
    x: 0,
    y: 0,
    travelLog: [""]

};

// ======================
// Grid Maker





function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";

      break;

    case "W":
        rover.direction = "S";

      break;

    case "S":
        rover.direction = "E";

      break;

    case "E":
        rover.direction = "N";

      break;

  }
   travelLog.push("Rover turned left"); 
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";

      break;

    case "E":
        rover.direction = "S";

      break;

    case "S":
        rover.direction = "W";

      break;

    case "W":
        rover.direction = "N";

      break;
      
  }
  travelLog.push("Rover turned right");
}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;

    case "E":
      rover.x++;
      break;

    case "S":
      rover.y++
      break;

    case "W":
      rover.x--;
      break;
  }
  travelLog.push("Rover moved forward");

  console.log("The current Coordinates are: " + rover.x + " " + rover.y);
}

function commands(command) {
	for (let i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'f':
				moveForward(rover);
				break;

			case 'r':
				turnLeft(rover);
				break;

			case 'l':
				turnRight(rover);
				break;
		}
	}
}




