// your code goes here

import Weapon from "./Weapon";

class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const tempDurabilityModifier = this.getDurabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    const tempEffectiveDurability = this.getBaseDurability + tempDurabilityModifier;
    // effective durability shouldn't be greater than 1.
    if(tempEffectiveDurability <= 1) {
      this.setDurabilityModifer = tempDurabilityModifier;
    } else {
      this.setDurabilityModifer = 1 - this.getBaseDurability;
    }
  }

}

export default Bow;