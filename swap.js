import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const routerAddress = "0xYourRouterContract";
const abi = [];

export async function swapTokens(fromToken, toToken, amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(routerAddress, abi, signer);

  const tx = await contract.swap(fromToken, toToken, amount);
  const receipt = await tx.wait();

  return receipt.transactionHash;
}
