import React, { useEffect } from 'react';

function CryptoTableRow({ crypto }) {
 
  return (
    <tr>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>{crypto.current_price}</td>
      <td><img src={crypto.image} alt="img" height={30} width={30}/> </td>
      <td>{crypto.market_cap}</td>
      <td>{crypto.market_cap_rank}</td>
      <td>{crypto.fully_diluted_valuation}</td>
      <td>{crypto.total_volume}</td>
      <td>{crypto.high_24h}</td>
      <td>{crypto.low_24h}</td>
      <td>{crypto.price_change_24h}</td>
      <td>{crypto.price_change_percentage_24h}</td>
      <td>{crypto.market_cap_change_24h}</td>
      <td>{crypto.market_cap_change_percentage_24h}</td>
      <td>{crypto.circulating_supply}</td>
      <td>{crypto.total_supply}</td>
      <td>{crypto.max_supply}</td>
      <td>{crypto.ath}</td>
      <td>{crypto.ath_change_percentage}</td>
      <td>{crypto.ath_date}</td>
      <td>{crypto.atl}</td>
      <td>{crypto.atl_change_percentage}</td>
      <td>{crypto.atl_date}</td>
      <td>{crypto?.roi?.percentage } {crypto?.roi?.times} {crypto?.roi?.currency}</td> 
      <td>{crypto.last_updated}</td>
      
      
   
    </tr>
  );
}

 

export default CryptoTableRow;
