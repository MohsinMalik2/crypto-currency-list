import React from 'react';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
      <tr>
        <td scope="row"> <img src={image} alt='crypto' style={{width: "30px"}}/></td>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>${price}</td>
        <td>${volume.toLocaleString()}</td>
        <td> 
          {priceChange < 0 ? (
              <span className='text-danger'>{priceChange.toFixed(2)}%</span>
          ) : (
            <span className='text-success'>{priceChange.toFixed(2)}%</span>
          )}
        </td>
        <td>${marketcap.toLocaleString()}</td>
      </tr>
   
  );
};

export default Coin;