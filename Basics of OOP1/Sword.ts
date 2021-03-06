import Weapon from "./Weapon";

// your code goes here
class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const tempDamageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    const quarterOfDamage = this.baseDamage*0.25;
    // damageModifier shouldn't  be greater than 25% of basedamage
    if(tempDamageModifier <= quarterOfDamage) {
      this.damageModifier = tempDamageModifier;
    } else this.damageModifier = quarterOfDamage;
  }
}

export default Sword;
