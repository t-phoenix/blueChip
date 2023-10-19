import {ethers} from "ethers";

export const contractAddress = {
    wETH: "0xA0bB384341fce161C475891898167403C0EB81fE",
    wBTC: "0x031CEeE5794955076874b1f6b3c821f153cf101D",
    controller: "0x98a9C7fE78DEeACAdDF658B40DDcd593fb0994b3",
    bim: "0x0eFE0208e2559399C41cb522FeEA32774Fc917DA",
    blue: "0x61E04FB24ae9794F5B24545d020B335fb8E82180"

}


export function getLinkedAddress(address) {
    return `https://mumbai.polygonscan.com/address/${address}`
}

export function toETHdenomination(number){
    return number/10**18
}

export function toWeidenomination(number){
    return ethers.utils.parseUnits(number, 'ether')
}