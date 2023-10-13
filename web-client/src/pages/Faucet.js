import React from "react";
import "../styles/faucet.css";
import toast, { Toaster } from "react-hot-toast";
import Icon from "react-crypto-icons";

const success = () => toast.success("Waiting... adding transaction to block");
const error = (err) => toast.error("Error while adding transaction: ", {err})

export default function Faucet() {
  const wETHAddress = "0x12637813871ea1b2cde8u23aed8223e23";
  const wETH_supply = "200";
  const wBTCAddress = "0x211ab098390cd90389213ef12ba3ab12b";
  const wBTC_supply = "50";

  async function mintETH(){
    success()
  }

  async function mintBTC(){
    error("Err404: No Response")
  }

  return (
    <div className="main-content">
      <div className="card-container">
        <Toaster />
        <h1>Faucet 🚰</h1>
        <p style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>{`Mint FREE Demo ERC20 tokens\u00A0`} <Icon name="eth" size={20} /><Icon name="btc" size={20} /> {`\u00A0on testnet`}</p>

        <h3>wETH: {wETHAddress}</h3>
        <h2>Total Supply: {wETH_supply}</h2>
        <button onClick={mintETH}>{`Mint 20 wETH\u00A0`}<Icon name="eth" size={20}/></button>

        <h3>wBTC: {wBTCAddress}</h3>
        <h2>Total Supply: {wBTC_supply}</h2>
        <button onClick={mintBTC}>{`Mint 5 wBTC\u00A0`}<Icon name="btc" size={20} /></button>
      </div>
    </div>
  );
}
