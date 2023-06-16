// src/index.ts

import { Computes } from './resources/computes';


export class Genz {
  computes: Computes;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.computes = new Computes(config);
  }
}
