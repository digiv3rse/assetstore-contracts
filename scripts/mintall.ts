
import { ethers, network } from "hardhat";
import { actionAssets, socialAssets } from "../assets/materials";
import { emojiAssets } from "../assets/openemoji";
import { silhouettesAssets } from "../assets/silhouettes";
import { cryptoAssets } from "../assets/crypto";
import { deploy } from "../utils/deploy";
import { gasEstimate } from "../utils/math";

const waitForUserInput = (text: string) => {
  return new Promise((resolve, reject) => {
    process.stdin.resume()
    process.stdout.write(text)
    process.stdin.once('data', data => resolve(data.toString().trim()))
  })
};

async function main() {
  const storeAddress = "0x289523B23c36fC78Bc2169821a007174a3941D37";
  const tokenAddress = "0x8135b2E5a989D6FE6661CFc6634ab4ff2402Ca14";

  const [owner] = await ethers.getSigners();
  const unitPrice = ethers.BigNumber.from(55);

  const mintAssets = async (assets:Array<any>) => {
    let results = [];
    let i;
    for (i=0; i<assets.length; i++) {
      const asset = assets[i];
      asset.soulbound = owner.address;
      await waitForUserInput(`Mint ${asset.group}/${asset.category}/${asset.name} ? `);
      const tx = await materialToken.mintWithAsset(asset, 0);
      const result = await tx.wait();
      const ret = gasEstimate(result);
      results.push(ret);
    }
    return results;
  };

  const action = await mintAssets(actionAssets);
  const social = await mintAssets(socialAssets);
  const emoji = await mintAssets(emojiAssets);
  const silhouettes = await mintAssets(silhouettesAssets);
  const crypto = await mintAssets(cryptoAssets);

  console.log("const gas =", { action, social, emoji, silhouettes, crypto }, ";");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});