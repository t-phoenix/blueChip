import {FaChartLine, FaCoins, FaExchangeAlt, FaLeanpub } from "react-icons/fa";
import '../styles/sidebar.css';

export const navlinks = [
  {
    name: 'Blue Chip',
    imgUrl: <FaCoins className="icon-simple"/>,
    selectedImg: <FaCoins className="icon-selected"/>,
    link: '/bluechip',
  },
  {
    name: 'Exchange',
    imgUrl: <FaExchangeAlt className="icon-simple"/>,
    selectedImg: <FaExchangeAlt className="icon-selected"/>,
    link: '/exchange',
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




