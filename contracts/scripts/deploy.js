async function main() {
  const ReputationStreak = await ethers.getContractFactory("ReputationStreak");
  const contract = await ReputationStreak.deploy();

  await contract.waitForDeployment();

  console.log("ReputationStreak deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
