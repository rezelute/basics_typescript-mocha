import {Human} from "./human";

export default class Mage extends Human
{
  magicka: number;

  constructor(id: number, name: string, race: string, height: number, magicka: number)
  {
    super(id, name, race, height);
    this.magicka = magicka;
  }

  castSpell()
  {
    if (this.magicka <= 0) {
      console.log("You have no more magicka left to cast spells");
    }
    else {
      this.magicka -= 20;
      console.log("magic spell cast, spell is now: ", this.magicka);
    }
  }
}
