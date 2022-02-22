import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';

export default function TextHeadlines() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
        axios
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);


    const coll = (e) => {
        setSearch(e.target.value);
     
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    

  return (
    <div className=''>
        <div className='text-center py-5'>
            <h1>
                Search Cryptocurrency Here.....
            </h1>
            <form className='p-4'>
                <input type="text" name="currency" id="currency" onChange={coll} />
            </form>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Volume</th>
                    <th scope="col">Change</th>
                    <th scope="col">Mkt Cap</th>
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map(coin => {
                    return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                    );
                })}

            </tbody>
        </table>
    </div>
  )
}