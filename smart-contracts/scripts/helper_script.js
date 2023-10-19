const hre = require("hardhat");

async function main() {

    const accounts = await hre.ethers.getSigners();
    const owner = accounts[0];
    const BIM_module = await hre.ethers.getContractAt('BasicIssuanceModule', '0x0eFE0208e2559399C41cb522FeEA32774Fc917DA');
    const wETH = await hre.ethers.getContractAt('ERCToken', '0xA0bB384341fce161C475891898167403C0EB81fE')
    const wBTC = await hre.ethers.getContractAt('ERCToken', '0x031CEeE5794955076874b1f6b3c821f153cf101D')

    // await BIM_module.connect(owner).initialize("0x61E04FB24ae9794F5B24545d020B335fb8E82180", "0x0000000000000000000000000000000000000000");

    for (let index = 0; index < 2; index++) {
        await wETH
          .connect(accounts[index])
          .approve(basicIssueModule.target, 20000000000000000000n);
        await wBTC
          .connect(accounts[index])
          .approve(basicIssueModule.target, 5000000000000000000n);
      }
    


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});