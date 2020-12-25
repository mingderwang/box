// scripts/index.js
async function main() {
  // Our code will go here
// Retrieve accounts from the local node
const accounts = await ethers.provider.listAccounts();
//console.log(accounts);

// Set up an ethers contract, representing our deployed Box instance
const address = "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6"
const Box = await ethers.getContractFactory("Box");
const box = await Box.attach(address);

// Send a transaction to store() a new value in the Box
await box.store(123);

// Call the retrieve() function of the deployed Box contract
value = await box.retrieve();
console.log("Box value is", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
