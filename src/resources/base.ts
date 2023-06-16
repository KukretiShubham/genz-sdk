// src/resources/base.ts
import fetch from 'isomorphic-unfetch';

type Config = {
  apiKey: string;
  baseUrl?: string;
};

type NFTParams = {
  address: string;
  quantity: number;
}
type TokenParams = {
  address: string;
  quantity: number;
}
type Param = {
  NFTPrams: NFTParams[];
  TokenParams: TokenParams[];
}

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  matchedWallets: Promise<string[]>;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://api.covalenthq.com/v1/';
  }

  protected compute(wallets: string[], matchScore: number, params: Param): Promise<string[]>{
    const matchedWallets: string[] = [];
    for (let i = 0; i < wallets.length; i++) {
      wallets[i] = wallets[i].toLowerCase();
      const NFTParams = params.NFTPrams;
      const TokenParams = params.TokenParams;
      for (let j = 0; j < NFTParams.length; j++) {
      }
      for (let j = 0; j < TokenParams.length; j++) {
        this.request(`/v1/eth-mainnet/address/${wallets[i]}/balances_v2/`)
          
      }
    }
    if(matchedWallets.length > 0){
      return this.matchedWallets;
    }
  }
  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
