"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("./sql/sql"));
sql_1.default.createTable('user', { name: 'string', age: 'int' });
const table = sql_1.default.getTable('user');
table.insert({ name: 'Rohan', age: 54 });
table.insert({ name: 'Kartik', age: 22 });
table.printRecords();
console.log(table.getRecords({ name: 'Rohan' }));
