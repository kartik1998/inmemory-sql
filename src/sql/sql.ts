import Table from './table';
export default class SQL {
  private static tables: Array<any> = [];

  private static verifyTable(table) {
    this.tables.forEach((t) => {
      if (t.getName() === table.getName()) {
        throw new Error('Table with this name already exists');
      }
    });
    return true;
  }

  public static createTable(name, params): void {
    const table = new Table(name, params);
    this.verifyTable(table);
    this.tables.push(table);
  }

  public static deleteTable(name): void {
      const tables: any = [];
      this.tables.forEach(table => {
          if(table.getName() !== name) {
              tables.push(table);
          }
      })
      this.tables = tables;
  }
}
