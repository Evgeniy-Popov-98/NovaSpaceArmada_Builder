import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CatalogShipItem } from '../CatalogShipItem/CatalogShipItem';
import { fetchShips } from '../../redux/ship/operations';
import { selectAllShips } from '../../redux/ship/selector';

export const ShipsCollection = () => {
  const dispatch = useDispatch();
  const allShips = useSelector(selectAllShips);

  useEffect(() => {
    dispatch(fetchShips());
  }, [dispatch]);

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
            {Array.isArray(allShips) &&
              allShips.map(ship => (
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
