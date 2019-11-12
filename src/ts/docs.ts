
import * as Characters from "./characters"


//warrior attach button pressed
export function onWarriorAttack()
{
  Characters.warrior.swingSword();
};

//mage attach button pressed
export function onMageAttack()
{
  Characters.mage.castSpell();
};

//archer attach button pressed
export function onArcherAttack()
{
  Characters.archer.fireArrow();
}


function assignButtons()
{
  document.addEventListener("DOMContentLoaded", function (event)
  {
    document.getElementById("warrior-attack").onclick = onWarriorAttack;
    document.getElementById("mage-attack").onclick = onMageAttack;
    document.getElementById("archer-attack").onclick = onArcherAttack;
  });
}

export function startApp()
{
  assignButtons();
}