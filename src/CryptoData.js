import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CryptoTableRow from './CryptoTableRow';

function CryptoData() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Market Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Logo</th>
            <th>Market Cap</th>
            <th>Market Cap Rank</th>
            <th>fully diluted valuation</th>
            <th>total volume</th>
            <th>high 24h</th>
            <th>low 24h</th>
            <th>price change 24h</th>
            <th>price change percentage 24h</th>
            <th>market cap change 24h</th>
            <th>market cap change percentage 24h</th>
            <th>circulating supply</th>
            <th>total supply</th>
            <th>max supply</th>
            <th>ath</th>
            <th>ath change percentage</th>
            <th>ath date</th>
            <th>atl</th>
            <th>atl change percentage</th>
            <th>atl date</th>
            <th>roi</th>
            <th>last updated</th>
      
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <CryptoTableRow key={index} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoData;
