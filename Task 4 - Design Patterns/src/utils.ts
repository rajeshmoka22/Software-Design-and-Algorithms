
let id = 0;
export function getShipmentID(): number {
  return ++id;
}

export function isValidZip(zip: string): boolean {
  return Number(zip)>9999 && Number(zip)<=99999;
}
