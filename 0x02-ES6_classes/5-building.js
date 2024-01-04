export default class Building {
    constructor(sqft) {
      this._setSqft(sqft);
    }
  
    // Getter for sqft attribute
    _getSqft() {
      return this._sqft;
    }
  
    _setSqft(sqft) {
      if (typeof sqft === 'number') {
        this._sqft = sqft;
      } else {
        throw new TypeError('Sqft must be a number');
      }
    }
  
    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  