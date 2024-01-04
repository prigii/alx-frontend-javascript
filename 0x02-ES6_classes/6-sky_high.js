import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class
    this._setFloors(floors);
  }

  // Getter for floors attribute
  _getFloors() {
    return this._floors;
  }

  _setFloors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    const numberOfFloors = this._getFloors();
    return `Evacuate slowly the ${numberOfFloors} floors.`;
  }
}
