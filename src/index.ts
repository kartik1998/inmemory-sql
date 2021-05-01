import SQL from './sql/sql';

SQL.createTable('user', { name: 'string', age: 'int' });
SQL.deleteTable('user');

console.log(SQL);
