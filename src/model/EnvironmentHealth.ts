import { CodsHealth } from './CodsHealth';
import { BlackbeardHealth } from './BlackbeardHealth';

export class EnvironmentHealth {

  environmentName: string;
  codsHealth: CodsHealth;
  blackbeardHealth: BlackbeardHealth;

  constructor(env: string) {
    this.environmentName = env;
  }

}
