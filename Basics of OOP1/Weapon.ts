import {Item} from './Item';

abstract class Weapon extends Item {
  baseDamage: number;
  baseDurability: number;
  durabilityModifier: number = 0.05;
  damageModifier: number = 0.05;
  static MODIFIER_CHANGE_RATE = 0.05;
  abstract polish(): void;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number){
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  get getBaseDamage(): number {
    return this.baseDamage;
  }

  get getBaseDurability(): number {
    return this.baseDurability;
  }

  get getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  get getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  set setBaseDamage(damage: number) {
    this.baseDamage = damage;
  }

  set setBaseDurability(durability: number) {
    this.baseDurability = durability;
  }

  get getDamageModifier(): number {
    return this.damageModifier;
  }

  get getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  set setDurabilityModifer(value: number) {
    this.durabilityModifier = value;
  }

  set setDamageModifier(value: number){
    this.damageModifier = value;
  }

  use(): string {
    if(this.getDurability <= 0) {
      return `You can't use the ${this.getName} , it is broken.`;
    } else {
      this.setDurabilityModifer = this.getDurabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
      const modifiedEffectiveDurability = this.getDurability;
      const damageMsg = `You use the ${this.getName} , dealing ${Weapon.roundOffByTwo(this.getDamage)} points of damage.`
      if(modifiedEffectiveDurability > 0) {
        return damageMsg;
      } else return `${damageMsg}. The ${this.getName} breaks.`;
    }
  }

  toString(): string {
    const effectiveDamage = Weapon.roundOffByTwo(this.getDamage);
    const effectiveDurability = Weapon.roundOffByTwo(this.getDurability)*100;
    return `${this.getName} − Value: ${this.getValue}, Weight : ${this.weight} , Damage : ${effectiveDamage} , Durability : ${effectiveDurability}%`
  }

  static roundOffByTwo(value: number) :number {
    return Number(value.toFixed(2));
  }
}

export default Weapon;