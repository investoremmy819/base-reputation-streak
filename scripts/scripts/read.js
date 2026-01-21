const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS_HERE";

async function main() {
  const [signer] = await ethers.getSigners();

  const contract = await ethers.getContractAt(
    "ReputationStreak",
    CONTRACT_ADDRESS
  );

  const user = await contract.getUser(signer.address);

  console.log("Address:", signer.address);
  console.log("Streak:", user[0].toString());
  console.log("Reputation:", user[1].toString());
  console.log("Last Check-in:", user[2].toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
