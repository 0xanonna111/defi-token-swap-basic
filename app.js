import { connectWallet } from "./web3.js";
import { swapTokens } from "./swap.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Status: Wallet connected";
};

document.getElementById("swapBtn").onclick = async () => {
  const from = document.getElementById("fromToken").value;
  const to = document.getElementById("toToken").value;
  const amount = document.getElementById("amount").value;

  const hash = await swapTokens(from, to, amount);
  document.getElementById("status").innerText = "Tx Hash: " + hash;
};
