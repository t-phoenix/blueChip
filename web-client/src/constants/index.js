import {FaCoins, FaExchangeAlt, FaLeanpub } from "react-icons/fa";
import '../styles/sidebar.css';

export const navlinks = [
  {
    name: 'BlueChip',
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
    name: 'Learn',
    imgUrl: <FaLeanpub className="icon-simple"/>,
    selectedImg: <FaLeanpub className="icon-selected" />,
    link: '/learn'
  }
];




