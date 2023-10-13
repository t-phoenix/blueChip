import {FaChartLine, FaCoins, FaExchangeAlt, FaLeanpub, FaFaucet } from "react-icons/fa";
import '../styles/sidebar.css';

export const navlinks = [
  {
    name: 'Blue Chip',
    imgUrl: <FaCoins className="icon-simple"/>,
    selectedImg: <FaCoins className="icon-selected"/>,
    link: '/bluechip',
  },
  {
    name: 'Faucet',
    imgUrl: <FaFaucet className="icon-simple"/>,
    selectedImg: <FaFaucet className="icon-selected"/>,
    link: '/faucet',
  },
  {
    name: 'Analytics',
    imgUrl: <FaChartLine className="icon-simple"/>,
    selectedImg: <FaChartLine className="icon-selected" />,
    link: '/analytics'
  },
  {
    name: 'Learn',
    imgUrl: <FaLeanpub className="icon-simple"/>,
    selectedImg: <FaLeanpub className="icon-selected" />,
    link: '/learn'
  },
  
];




