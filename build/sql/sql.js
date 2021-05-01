"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = __importDefault(require("./table"));
class SQL {
    static verifyTable(table) {
        this.tables.forEach((t) => {
            if (t.getName() === table.getName()) {
                throw new Error('Table with this name already exists');
            }
        });
        return true;
    }
    static createTable(name, params) {
        const table = new table_1.default(name, params);
        this.verifyTable(table);
        this.tables.push(table);
    }
    static deleteTable(name) {
        const tables = [];
        this.tables.forEach((table) => {
            if (table.getName() !== name) {
                tables.push(table);
            }
        });
        this.tables = tables;
    }
    static getTable(name) {
        let tb = {};
        this.tables.forEach((table) => {
            if (table.getName() === name) {
                tb = table;
            }
        });
        return tb;
    }
}
exports.default = SQL;
SQL.tables = [];
