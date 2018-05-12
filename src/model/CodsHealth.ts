export class CodsHealth {

  status: string;
  url: string;
  diskSpace: DiskSpace;
  mongo: Mongo;
  db: Db;
}

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
}
