export class Human implements IHuman
{
  id: number;
  name: string;
  race: string;
  height: number;

  constructor(id: number, name: string, race: string, height: number)
  {
    this.id = id;
    this.name = name;
    this.race = race;
    this.height = height;
  }

  /**
   * character walk
   * @param direction 
   */
  walk(direction: WalkDirections, speed: number)
  {
    switch (direction) {
      case WalkDirections.Forward:
        console.log("walking forward at speed: ", speed);
        break;
      case WalkDirections.Back:
        console.log("walking backward at speed: ", speed);
        break;
      case WalkDirections.Left:
        console.log("walking left at speed: ", speed);
        break;
      case WalkDirections.Right:
        console.log("walking right at speed: ", speed);
        break;
      default:
        break;
    }
  }
}


interface IHuman
{
  id: number;
  name: string;
  race: string;
  height: number;
  walk(direction: WalkDirections, speed:number):void;
}

enum WalkDirections
{
  Forward = "FORWARD",
  Back = "BACK",
  Left = "LEFT",
  Right = "RIGHT"
}
