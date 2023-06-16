# Genz-SDK
Genz SDK is SDK to build an perspective rendering application. It is a part of geneEngine. It computes matching score for set of wallets using on-chain & custom off-chain data. 

Currently, it is in development phase.

## Installation
```bash
npm i gez-sdk
```

## Usage
```js
const { Genz } = require('genz-sdk');
const client = new Genz({
  apiKey: 'your-api-key',
  // or any other data source but current schema is designed for covalent. Stay tuned for more compatible
  baseUrl: 'https://api.covalenthq.com/',
});
const walllets = [
  '0x000000'
  ....

];
const params = [
    NFTParams = [
        {
            nft: 'address',
            quantity: 'value',
        },
    ]
    TokenParams = [
        {
            token: 'address',
            quantity: 'value',
        },
    ]
    ...
]
const matchScore = 90
const 
client.computes
  .getComputedByWallets({
    wallets,
    matchScore,
    params
  })
  .then((matchedWallets) => {
    console.log(`Resulting matched Wallets are: ${matchedWallets}`);
  });
```
