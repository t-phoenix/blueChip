import React from "react";
import blueLogo from "../../assets/blueLogo.svg";
import "../../styles/mint.css";
import TokenRedeem from "./TokenRedeem";
import { contractAddress, toETHdenomination, toWeidenomination } from "../../constants/addresses";
import { useAccount } from "wagmi";
import toast, {Toaster} from "react-hot-toast";
import {readContract, prepareWriteContract,writeContract} from "@wagmi/core";
import Loader from "../Loader";
import { BasicIssueABI, SetTokenABI } from "../../constants/contractABIs";


const success = (msg) => toast.success(`${msg} BLUE redeemed succesfully`);
const error = (err) => toast.error("Error while adding transaction: ", {err})


export default function RedeemInterface() {
  const account = useAccount();
  const [blueValue, setBlueValue] = React.useState(0);
  const usdValue = 0;
  const [balance, setBalance] = React.useState(0);

  const [tokenBalances, setTokenBalances] = React.useState([
    {
      key: 0,
      contractAddress: contractAddress.wETH,
      tokenName: "wETH",
      iconSymbol: "eth",
      requiredAsset: "3",
      value: "1918.9",

    },
    {
      key: 1,
      contractAddress: contractAddress.wBTC,
      tokenName: "wBTC",
      iconSymbol: "btc",
      requiredAsset: "1",
      value: "14000",

    },
  ]);

  React.useEffect(()=>{
    fetchBlueBalance()
  },[])

  async function fetchBlueBalance(){
    const blueBalance = await readContract({
      address: contractAddress.blue,
      abi: SetTokenABI,
      functionName: 'balanceOf',
      args: [account.address]
    })
    console.log("BLUE Supply: ", Number(blueBalance), " wETH");
    setBalance(toETHdenomination(Number(blueBalance)))
  }

  function adjustRequiredAssets(e){
    setBlueValue(e.target.value);
    setTokenBalances([{...tokenBalances[0], requiredAsset: 3 * Number(e.target.value)}, {...tokenBalances[1], requiredAsset: Number(e.target.value)}])
  }

  async function redeemBLUE(){
    const config = await prepareWriteContract({
      address: contractAddress.bim,
      abi: BasicIssueABI,
      functionName: "redeem",
      args: [contractAddress.blue, toWeidenomination(blueValue), account.address],
    });

    try {
      const { hash } = await writeContract(config);
      console.log("Redeem BLUE Hash:", hash);
      success(`${blueValue}`)
    } catch (error) {
      console.log(error);
      error(error);
    }
  }

  return (
    <>
      <div className="input-box">
        <Toaster/>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            value={blueValue}
            onChange={adjustRequiredAssets}
            type="number"
            placeholder={blueValue}
            style={{ margin: "5px", backgroundColor: "transparent", color: '#C0DA74', width: "50%" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "30%"
            }}
          >
            <img src={blueLogo} style={{ height: "30px" }} /> <p>BLUE</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "1vw",
          }}
        >
          <p>${usdValue}</p>
          <p>Balance: {balance}</p>
        </div>
      </div>

      <p className="aligned-para">Estimated Tokens Unlocked when Redeemed </p>
      <div style={{ width: "100%", marginInline: "20%", marginBlock: '5%' }}>
        {tokenBalances.map((tokenBalance) => (
          // <p key={tokenBalance.key}>Hello: {tokenBalance.tokenName}</p>
          <TokenRedeem props={tokenBalance} />
        ))}
      </div>

      <button onClick={redeemBLUE}>
          Redeem BLUE <img src={blueLogo} style={{ height: "30px" }} />
        </button>
    </>
  );
}
