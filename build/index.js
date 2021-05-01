"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("./sql/sql"));
sql_1.default.createTable('user', { name: 'string', age: 'int' });
sql_1.default.deleteTable('user');
console.log(sql_1.default);
