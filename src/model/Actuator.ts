export class DiskSpace {
  status: string;
  total: number;
}

export class Mongo {
  status: string;
  version: string;
}

export class Db {
  status: string;
  database: string;
  hello: string;

  get overallStatus(): string {

    return 'db avfc1';

  }
}

export class RootObject {

  private _overallStatus = 'nothing';

  status: string;
  diskSpace: DiskSpace;
  mongo: Mongo;
  db: Db;

  constructor() {

    this._overallStatus = 'wibble';

  }

  get overallStatus(): string {

    return this._overallStatus;

  }

  public doSomething(message: string): string {

    return `hello ${message}`;
  }
}
