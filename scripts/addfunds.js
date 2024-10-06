// scripts/fundAccount.js

const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const balance = await deployer.getBalance();
    console.log("Funding account:", deployer.address, "Amount recieved:", balance);
    

    // Send ETH to the target address
    const targetAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // Replace with the target address
    const amount = ethers.utils.parseEther("100.0"); // Amount of ETH to send

    const tx = await deployer.sendTransaction({
        to: targetAddress,
        value: amount
    });

    console.log(`Transaction hash: ${tx.hash}`);
    await tx.wait();
    console.log(`Sent ${amount.toString()} ETH to ${targetAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
