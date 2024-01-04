export default class Airport {
    constructor(name, code) {
      this._setName(name);
      this._setCode(code);
    }
  
    // Getter and Setter for name attribute
    _getName() {
      return this._name;
    }
  
    _setName(name) {
      if (typeof name === 'string') {
        this._name = name;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and Setter for code attribute
    _getCode() {
      return this._code;
    }
  
    _setCode(code) {
      if (typeof code === 'string') {
        this._code = code;
      } else {
        throw new TypeError('Code must be a string');
      }
    }
  
    // Default string description of the class
    toString() {
      return this._code;
    }
  }
