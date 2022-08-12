# Star NFT Marketplace

The Project is about creating an NFT MARKETPLACE using Tezos the following below website link will provide Insightful Analysis 
 link: https://starnftmarketplace.netlify.app


## Tezos Folder 
the place where Contracts are available

## Smart Contract Overview
As smart contracts on Tezos are programmed with a Ligo language, we can imagine and implement all kinds of rules, with the only limit being our imagination. We can create digital objects with a number of interesting properties, create very unique collectibles, or even run interesting social experiments.
However, as we will see, adding new features comes with some risks, potential flaws and unintended consequences.
For example, just for fun, let’s say that we want to create an item that automatically becomes more expensive every time it is transferred. Instead of letting the owner set the price of their choice as we previously did, we will increase this price by 10% after every sale. If we start our NFT with a price of 1 tez, it will be worth 1.10 tez after one sale, 2.59 tez after 10 sales and 13780 tez after 100 sales.
To benefit from this as the author, in case our very unique NFT gets popular, let’s make sure we get a share of these sales by adding a royalties feature: every time the NFT is sold, let’s award ourselves 5% of the sale price. We will add our own address to the storage, as the author of the NFT.

## Smart Contract Running Instructions
Running Instructions Tezos Node install

Go to https://tezos.gitlab.io/introduction/howtoget.html and follow instructions in section "Build from sources".

Launching Sandbox

Go to https://tezos.gitlab.io/user/sandbox.html and follow instructions

Taquito install

Go to https://tezostaquito.io/docs/quick_start

Ligo install

Go to https://ligolang.org/docs/intro/installation

Typescript Install

npm install -g typescript
Launching Tezos Node with cors

./src/bin_node/tezos-sandboxed-node.sh 1 --connections 1 --cors-header='content-type' --cors-origin='*'
Smart contract management

By command line (tezos-client)

deploy contract

tezos-client originate contract counter transferring 1 from bootstrap5 running './counter.tz' --init "0" --burn-cap 0.351
invoke contract

tezos-client transfer 0 from bootstrap4 to counter --arg "(Right 5)" --dry-run
retrieve storage of contract

tezos-client get contract storage for counter
Generate identity

tezos-client gen keys bob
Show identity

tezos-client show address bootstrap1 -S
With Truffle

Compile contract

In project folder, run:

$ truffle compile
Deploy contract

In project folder, run:

$ truffle migrate --network <development, carthagenet, mainnet, zeronet>
Run tests

In project folder, run in this order:

$ ligo compile-contract src/entrypoints_for_helpers.mligo main > test/helpers.tz 
$ ligo compile-contract src/land.mligo main > test/land.tz 
$ python -m unittest


# Techologies used for the Smart Contract
- python
- Ligo language
- javascript

# Technologies used for the Front-end
- React js
- Boostrap
- Taquito js
