const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));

function finalPosition(moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
      const move = moves[i];

      if (move === "north") {
        y = y + 1;
      } else if (move === "west") {
        x = x - 1;
      } else if (move === "east") {
        x = x + 1;
      } else if (move === "south") {
        y = y - 1;
      }
  }

  let coordinate = [];
  coordinate.push(x);
  coordinate.push(y);

  return coordinate;
}