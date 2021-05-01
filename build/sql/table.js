'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Table {
  constructor(name, params) {
    this.schema = {};
    this.table = [];
    this.name = name;
    this.verifyParams(params);
    this.schema = params;
  }
  verifyParams(params) {
    if (Object.keys(params).length < 1)
      throw new Error('Table should have atlease one column');
    Object.values(params).forEach((val) => {
      if (!(val == 'string' || val === 'int')) {
        throw new Error('Invalid column type passed');
      }
    });
    return true;
  }
  verifyInputSchema(input) {
    if (Object.keys(input).length !== Object.keys(this.schema).length) {
      throw new Error('Invalid input schema');
    }
    Object.keys(input).forEach((key) => {
      if (!Object.keys(this.schema).includes(key)) {
        throw new Error(`${key} isn't a valid key for table ${this.name}`);
      }
    });
    return true;
  }
  verifyInput(input) {
    this.verifyInputSchema(input);
    Object.keys(input).forEach((key) => {
      if (this.schema[key] === 'string') {
        if (input[key].length > 20)
          throw new Error('String input must be at most 20 characters');
      } else {
        if (typeof input[key] !== 'number')
          throw new Error('Integer input must be of type number');
        if (input[key] < -1024 || input[key] > 1024)
          throw new Error('Integer input must be between 1024 and -1024');
      }
    });
    return true;
  }
  insert(input) {
    this.verifyInput(input);
    this.table.push(input);
  }
}
exports.default = Table;
