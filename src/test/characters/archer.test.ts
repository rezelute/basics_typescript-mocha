import "mocha";
import * as Chai from "chai";
import {archer as Archer} from "../../ts/characters";

const assert = Chai.assert;

describe('Archer arrows', () =>
{
  it("Arrow count not negative", function ()
  {
    const initArrowCount:number = Archer.getArrowsCount(); //100

    for (let i = 0; i < initArrowCount +1 ; i++) { //trying to fire more than 100 arrows
      Archer.fireArrow();
    }
    const finalArrowCount:number = Archer.getArrowsCount();
    assert.isBelow(-1, finalArrowCount);
  });
});