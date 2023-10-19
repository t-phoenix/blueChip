import React, { useState, useEffect } from "react";
import "../styles/faucet.css";
import toast, { Toaster } from "react-hot-toast";
import Icon from "react-crypto-icons";
import { contractAddress, getLinkedAddress, toETHdenomination } from "../constants/addresses";
import { ERCTokenABI } from "../constants/contractABIs";
import {useAccount} from "wagmi";
import {prepareWriteContract,writeContract} from "@wagmi/core";
import { readContract } from '@wagmi/core'

const success = (msg) => toast.success(`${msg} minted succesfully`);
const error = (err) => toast.error("Error while adding transaction: ", {err})

export default function Faucet() {

  const account = useAccount()
  console.log("Account:", account);

  const [wETHSupply, setwETHSupply] = useState(0);
  const [wBTCSupply, setwBTCSupply] = useState(0);
    
    useEffect(()=>{
        fetchtokenSupply()
    },[])
    
    async function fetchtokenSupply(){
        const supply = await readContract({
            address: contractAddress.wETH,
            abi: ERCTokenABI,
            functionName: 'totalSupply',
          })
          console.log("wETH Supply: ", Number(supply), " wETH");
          setwETHSupply(Number(supply))

        const supplyBTC = await readContract({
          address:contractAddress.wBTC,
          abi: ERCTokenABI,
          functionName: 'totalSupply',
        })

        console.log("wBTC Supply: ", Number(supplyBTC), " wBTC" )
        setwBTCSupply(Number(supplyBTC));
    }

  async function mintETH(){
    
    const config = await prepareWriteContract({
      address: contractAddress.wETH,
      abi: ERCTokenABI,
      functionName: "mint",
      args: [account.address, 20000000000000000000n],
    });

    try {
      const { hash } = await writeContract(config);
      console.log("Mint ETH Hash:", hash);
      success("20 wETH ")
    } catch (error) {
      console.log(error);
      error(error);
    }
  }

  async function mintBTC(){
    const config = await prepareWriteContract({
      address: contractAddress.wBTC,
      abi: ERCTokenABI,
      functionName: "mint",
      args: [account.address, 5000000000000000000n],
    });

    try {
      const { hash } = await writeContract(config);
      console.log("Mint BTC Hash:", hash);
      success("5 BTC ")
    } catch (error) {
      console.log(error);
      error(error);
    }
  }

  

  return (
    <div className="main-content">
      <div className="card-container">
        <Toaster />
        <h1>Faucet 🚰</h1>
        <p style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>{`Mint FREE Demo ERC20 tokens\u00A0`} <Icon name="eth" size={20} /><Icon name="btc" size={20} /> {`\u00A0on testnet`}</p>

        <h3>wETH: <a href={getLinkedAddress(contractAddress.wETH)} target="blank" style={{ fontSize: '14px' }}>{contractAddress.wETH}</a></h3>
        <h2>Total Supply: {toETHdenomination(wETHSupply)} wETH</h2>
        <button onClick={mintETH}>{`Mint 20 wETH\u00A0`}<Icon name="eth" size={20}/></button>

        <h3>wBTC: <a href={getLinkedAddress(contractAddress.wBTC)} target="blank" style={{ fontSize: '14px' }}>{contractAddress.wBTC}</a></h3>
        <h2>Total Supply: {toETHdenomination(wBTCSupply)} wBTC</h2>
        <button onClick={mintBTC}>{`Mint 5 wBTC\u00A0`}<Icon name="btc" size={20} /></button>
      </div>
    </div>
  );
}
