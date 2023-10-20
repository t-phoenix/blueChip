const url = "https://api.pro.coinbase.com";

export async function fetchETHPrice() {
  return await fetch(url + "/products/ETH-USD/ticker")
    .then((res) => res.json())
    .then((data) => {
      console.log("ETH-USD Price fdetch:", data.price);
      return Number(data.price);
    });


}

export async function fetchBTCPrice() {
  return await fetch(url + "/products/BTC-USD/ticker")
    .then((res) => res.json())
    .then((data) => {
      console.log("BTC-USD Price fdetch:", data.price);
      return Number(data.price);
    });
}
