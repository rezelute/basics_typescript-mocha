import {Human} from "./human";

export default class Archer extends Human
{
  arrowsTotal: number;

  constructor(id: number, name: string, race: string, height: number, bowStamina: number, arrowsTotal: number)
  {
    super(id, name, race, height);
    this.arrowsTotal = arrowsTotal;
  }

  getArrowsCount():number
  {
    return this.arrowsTotal as number;
  }

  fireArrow() : number
  {
    if (this.arrowsTotal<=0) {
      console.log("You have no more bows left to fire arrows");
    }
    else {
      this.arrowsTotal--;
      console.log("arrow fired, arrow count is now: ", this.arrowsTotal);
    }
    return this.arrowsTotal as number;
  }
  
}