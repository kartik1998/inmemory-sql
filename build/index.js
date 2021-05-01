'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const table_1 = __importDefault(require('./sql/table'));
const table = new table_1.default('user', { name: 'string', age: 'int' });
table.insert({ name: 'Kartik ', age: 12 });
table.insert({ name: 'rama', age: 1024 });
console.log(table);
