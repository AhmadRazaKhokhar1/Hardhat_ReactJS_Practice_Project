// Setup: npm install alchemy-sdk
const { Alchemy, Network } = require("alchemy-sdk");
async()=>{

const config = {
  apiKey: "rT-GdJ_OnIk5U3ypi2ZCnxHb0eh9QQKL",
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

// Address we want get NFT mints from
const toAddress = "0x1E6E8695FAb3Eb382534915eA8d7Cc1D1994B152";

const res = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  toAddress: toAddress,
  excludeZeroValue: true,
  category: ["erc721", "erc1155", "erc20"],
});

console.log(res);
}
