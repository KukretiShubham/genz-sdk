// src/index.ts

import { Computes } from './resources/computes';


export class Genz {
  posts: Computes;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.posts = new Computes(config);
  }
}
