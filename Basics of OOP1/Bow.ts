// your code goes here

import Weapon from "./Weapon";

class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const tempDurabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    const tempEffectiveDurability = this.baseDurability + tempDurabilityModifier;
    // effective durability shouldn't be greater than 1.
    if(tempEffectiveDurability <= 1) {
      this.durabilityModifier = tempDurabilityModifier;
    } else {
      this.durabilityModifier = 1 - this.baseDurability;
    }
  }

}

export default Bow;
