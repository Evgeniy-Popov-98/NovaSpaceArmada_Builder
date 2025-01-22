import axios from 'axios';

import { useEffect, useState } from 'react';
import { CatalogShipItem } from '../CatalogShipItem/CatalogShipItem';

export const ShipsCollection = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function fetchShips() {
      const { data } = await axios.get('http://localhost:3000/ships');

      setShips(data.data);
    }
    fetchShips();
  }, []);

  return (
    <>
      <h3>Spaceships</h3>
      <div>
        <div>
          <ul>
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">FF</a>
            </li>
            <li>
              <a href="">DD</a>
            </li>
            <li>
              <a href="">CL</a>
            </li>
            <li>
              <a href="">BB</a>
            </li>
            <li>
              <a href="">DN</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            {Array.isArray(ships) &&
              ships.map(ship => (
                <li key={ship._id}>
                  <CatalogShipItem item={ship} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
