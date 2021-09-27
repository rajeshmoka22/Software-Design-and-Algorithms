import {Item} from './Item';

abstract class Weapon extends Item {
  private _baseDamage: number;
  private _baseDurability: number;
  private _durabilityModifier: number = 0.05;
  private _damageModifier: number = 0.05;
  static MODIFIER_CHANGE_RATE = 0.05;
  abstract polish(): void;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number){
    super(name, value, weight);
    this._baseDamage = baseDamage;
    this._baseDurability = baseDurability;
  }

  get baseDamage(): number {
    return this._baseDamage;
  }

  get baseDurability(): number {
    return this._baseDurability;
  }

  get damage(): number {
    return this._baseDamage + this._damageModifier;
  }

  get durability(): number {
    return this._baseDurability + this._durabilityModifier;
  }

  set baseDamage(damage: number) {
    this._baseDamage = damage;
  }

  set baseDurability(durability: number) {
    this._baseDurability = durability;
  }

  get damageModifier(): number {
    return this._damageModifier;
  }

  get durabilityModifier(): number {
    return this._durabilityModifier;
  }

  set durabilityModifier(value: number) {
    this._durabilityModifier = value;
  }

  set damageModifier(value: number){
    this._damageModifier = value;
  }

  use(): string {
    if(this.durability <= 0) {
      return `You can't use the ${this.name} , it is broken.`;
    } else {
      this.durabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
      const modifiedEffectiveDurability = this.durability;
      const damageMsg = `You use the ${this.name} , dealing ${Weapon.roundOffByTwo(this.damage)} points of damage.`
      if(modifiedEffectiveDurability > 0) {
        return damageMsg;
      } else return `${damageMsg}. The ${this.name} breaks.`;
    }
  }

  toString(): string {
    const effectiveDamage = Weapon.roundOffByTwo(this.damage);
    const effectiveDurability = Weapon.roundOffByTwo(this.durability)*100;
    return `${this.name} − Value: ${this.value}, Weight : ${this.weight} , Damage : ${effectiveDamage} , Durability : ${effectiveDurability}%`
  }

  static roundOffByTwo(value: number) :number {
    return Number(value.toFixed(2));
  }
}

export default Weapon;
