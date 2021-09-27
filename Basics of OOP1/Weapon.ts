import {Item} from './Item';

abstract class Weapon extends Item {
  private baseDamage: number;
  private baseDurability: number;
  private durabilityModifier: number = 0.05;
  private damageModifier: number = 0.05;
  static MODIFIER_CHANGE_RATE = 0.05;
  abstract polish(): void;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number){
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  get _baseDamage(): number {
    return this.baseDamage;
  }

  get _baseDurability(): number {
    return this.baseDurability;
  }

  get _damage(): number {
    return this.baseDamage + this.damageModifier;
  }

  get _durability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  set _baseDamage(damage: number) {
    this.baseDamage = damage;
  }

  set _baseDurability(durability: number) {
    this.baseDurability = durability;
  }

  get _damageModifier(): number {
    return this.damageModifier;
  }

  get _durabilityModifier(): number {
    return this.durabilityModifier;
  }

  set _durabilityModifier(value: number) {
    this.durabilityModifier = value;
  }

  set _damageModifier(value: number){
    this.damageModifier = value;
  }

  use(): string {
    if(this._durability <= 0) {
      return `You can't use the ${this._name} , it is broken.`;
    } else {
      this._durabilityModifier = this._durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
      const modifiedEffectiveDurability = this._durability;
      const damageMsg = `You use the ${this._name} , dealing ${Weapon.roundOffByTwo(this._damage)} points of damage.`
      if(modifiedEffectiveDurability > 0) {
        return damageMsg;
      } else return `${damageMsg}. The ${this._name} breaks.`;
    }
  }

  toString(): string {
    const effectiveDamage = Weapon.roundOffByTwo(this._damage);
    const effectiveDurability = Weapon.roundOffByTwo(this._durability)*100;
    return `${this._name} − Value: ${this._value}, Weight : ${this.weight} , Damage : ${effectiveDamage} , Durability : ${effectiveDurability}%`
  }

  static roundOffByTwo(value: number) :number {
    return Number(value.toFixed(2));
  }
}

export default Weapon;
