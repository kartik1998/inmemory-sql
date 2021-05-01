import SQL from './sql/sql';

SQL.createTable('user', { name: 'string', age: 'int' });
const table = SQL.getTable('user');

table.insert({ name: 'Rohan', age: 54 });
table.insert({ name: 'Kartik', age: 22 });

table.printRecords();

console.log(table.getRecords({ name: 'Rohan' }));
