export default class HolbertonClass {
    constructor(size, location) {
      this._setSize(size);
      this._setLocation(location);
    }
  
    // Getter and Setter for size attribute
    _getSize() {
      return this._size;
    }
  
    _setSize(size) {
      if (typeof size === 'number') {
        this._size = size;
      } else {
        throw new TypeError('Size must be a number');
      }
    }
  
    // Getter and Setter for location attribute
    _getLocation() {
      return this._location;
    }
  
    _setLocation(location) {
      if (typeof location === 'string') {
        this._location = location;
      } else {
        throw new TypeError('Location must be a string');
      }
    }
  
    // Behavior when cast into a Number
    valueOf() {
      return this._getSize();
    }
  
    // Behavior when cast into a String
    toString() {
      return this._getLocation();
    }
  }
