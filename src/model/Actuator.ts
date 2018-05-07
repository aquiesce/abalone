export interface DiskSpace {
  status: string;
  total: number;
}

export interface Mongo {
  status: string;
  version: string;
}

export interface Db {
  status: string;
  database: string;
  hello: string;
}

export interface RootObject {
  status: string;
  diskSpace: DiskSpace;
  mongo: Mongo;
  db: Db;
}
