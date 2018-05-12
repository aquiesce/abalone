import { CodsHealth } from './CodsHealth';

export class EnvironmentHealth {

  environmentName: string;
  codsHealth: CodsHealth;

  constructor(env: string) {
    this.environmentName = env;
  }

}
