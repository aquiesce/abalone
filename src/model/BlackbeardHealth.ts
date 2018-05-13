export class BlackbeardHealth {

  status: string;
  url: string;
  diskSpace: DiskSpace;
  db: Db;
}

export class DiskSpace {
  status: string;
  total: number;
}

export class Db {
  status: string;
  database: string;
  hello: string;
}
