var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down"; // 3
})(Direction || (Direction = {}));
;
console.log(Direction.Left); // 0
console.log(Direction.Right); // 1
console.log(Direction.Up); // 2
console.log(Direction.Down); // 3
