// src/resources/posts/index.ts

import { Base } from '../base';
import { Param } from './types';

export class Computes extends Base {

  getComputedByWallets(wallets: string[], matchScore: number, params: Param): Promise<string[]> {
    return this.compute(wallets, matchScore, params)
  }
}
