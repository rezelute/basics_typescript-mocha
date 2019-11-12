import {Human} from "./human";

enum WeaponConditionTypes
{
  Increase = "increase",
  Decrease = "decrease"
}


export default class Warrior extends Human
{
  stamina: number=100;
  swordCondition: number=100;

  constructor(id: number, name: string, race: string, height: number, stamina: number)
  {
    super(id, name, race, height);
    this.stamina = stamina;
  }

  weaponConditionChange(cType: WeaponConditionTypes, amount:number)
  {
    if (cType === WeaponConditionTypes.Decrease) {
      this.swordCondition = this.swordCondition - amount;
      console.log("sword condition decreased by 20, condition is now: ", this.swordCondition);
    }
    else{
      this.swordCondition = this.swordCondition + amount;
      console.log("sword condition increased by 20, condition is now: ", this.swordCondition);
    }
  }

  swingSword()
  {
    if(this.stamina <=0){
      console.log("You have no more stamina left to swing the sword");
    }
    else{
      this.weaponConditionChange(WeaponConditionTypes.Decrease, 20);
      this.stamina -= 20;
      console.log("sword swung, stamina is now: ", this.stamina);
    }
  }
}