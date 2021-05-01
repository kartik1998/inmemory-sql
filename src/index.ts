import Table from './sql/table';

const table = new Table('user', { name: 'string', age: 'int' });
table.insert({ name: 'Kartik ', age: 12 });
table.insert({ name: 'rama', age: 1024 });
console.log(table);
