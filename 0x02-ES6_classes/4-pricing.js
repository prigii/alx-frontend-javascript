// 3-currency.js
// Assume this is the implementation of the Currency class as described in the previous response
// ...

// Pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._setAmount(amount);
    this._setCurrency(currency);
  }

  // Getter and Setter for amount attribute
  _getAmount() {
    return this._amount;
  }

  _setAmount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and Setter for currency attribute
  _getCurrency() {
    return this._currency;
  }

  _setCurrency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // Method to display full price information
  displayFullPrice() {
    const { _amount, _currency } = this;
    return `${_amount} ${_currency._getName()} (${_currency._getCode()})`;
  }

  // Static method to convert price based on a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
  }
}
