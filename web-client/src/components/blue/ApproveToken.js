import React from "react";
import Icon from "react-crypto-icons";
import "../../styles/mint.css";
import { useAccount } from "wagmi";
import { ERCTokenABI } from "../../constants/contractABIs";
import { readContract, prepareWriteContract,writeContract } from "@wagmi/core";
import Loader from "../Loader";
import { contractAddress, toETHdenomination, toWeidenomination } from "../../constants/addresses";
import toast,{Toaster} from "react-hot-toast";


const success = (msg) => toast.success(`${msg} approved succesfully`);
const error = (err) => toast.error("Error while adding transaction: ", {err})


export default function ApproveToken({ props }) {
  const account = useAccount();
  console.log("Print Input to token Balance:", props);
  const [amount, setAmount] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(() => {
    fetchUserBalance();
  }, []);

  async function fetchUserBalance() {
    setIsLoading(true);
    const balance = await readContract({
      address: props.contractAddress,
      abi: ERCTokenABI,
      functionName: "balanceOf",
      args: [account.address],
    });
    // console.log("Balance: ", Number(balance), props.tokenName);
    props.balance = Number(toETHdenomination(Number(balance))).toFixed(2);

    
    const approval = await readContract({
      address: props.contractAddress,
      abi: ERCTokenABI,
      functionName: 'allowance',
      args: [account.address, contractAddress.bim]
    })
    // console.log("Approval Balance: ", Number(approval));
    props.approve = Number(toETHdenomination(Number(approval))).toFixed(2);

    setIsLoading(false);
  }


  async function approveTokens(){
    console.log("Amount to be approved:", toWeidenomination(amount))


    const config = await prepareWriteContract({
      address: props.contractAddress,
      abi: ERCTokenABI,
      functionName: "approve",
      args: [contractAddress.bim, toWeidenomination(amount)],
    });

    try {
      const { hash } = await writeContract(config);
      console.log("Approve Assets :", hash);
      success(`${amount} ${props.tokenName}`)
    } catch (error) {
      console.log(error);
      error(error);
    }
  }
    
  return (
    <div key={props.key} style={{width: '90%'}}>
      <Toaster />
      <div className="balance-box" key={props.iconSymbol}>
        <div className="aligned-para">
          <h2 className="aligned-para">
            {props.tokenName}{" "} <Icon name={props.iconSymbol} size={20} />
          </h2>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder={amount}
            style={{ marginInline: "5%", backgroundColor: "transparent" , color: '#C0DA74', width: '30%'}}
          />
          <button onClick={approveTokens}>Approve</button>
          
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="aligned-para" style={{fontSize: '14px'}}>
            Balance:{" "}
            {isLoading ? <Loader/> : <p style={{ color: "#C0DA74", margin: "0" }}>{props.balance}</p>}
          </p>
          <p className="aligned-para" style={{fontSize: '10px'}}>Approved: {isLoading ? <Loader/> : <>{props.approve}</>}</p>
        </div>
      </div>
    </div>
  );
}