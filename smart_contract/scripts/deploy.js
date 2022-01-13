

const main =  async () =>{
  // to
  const Transactions = await hre.ethers.getContractFactory("Transactions"); //generate instances of the contract
  const transactions = await Transactions.deploy(); // a single instance

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async () => {
  try{
    await main();
    process.exit(0); // process successful
  } catch (error){
    console.error(error);
    process.exit(1); // error
  }

}

runMain();
