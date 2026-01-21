const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS_HERE";

async function main() {
  const contract = await ethers.getContractAt(
    "ReputationStreak",
    CONTRACT_ADDRESS
  );

  const tx = await contract.checkIn();
  await tx.wait();

  console.log("Check-in successful");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
