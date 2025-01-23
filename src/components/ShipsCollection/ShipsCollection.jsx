import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CatalogShipItem } from '../CatalogShipItem/CatalogShipItem';
import { fetchShips } from '../../redux/ship/operations';
import { selectAllShips } from '../../redux/ship/selector';

import css from './ShipsCollection.module.css';

export const ShipsCollection = () => {
  const dispatch = useDispatch();
  const allShips = useSelector(selectAllShips);

  useEffect(() => {
    dispatch(fetchShips());
  }, [dispatch]);

  return (
    <>
      <h3 className={css.filterTitle}>Spaceships</h3>
      <div className={css.boxShips}>
        <div className={css.boxFilter}>
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
        <div className={css.boxCollectionShips}>
          <ul className={css.shipsList}>
            {Array.isArray(allShips) &&
              allShips.map(ship => (
                <li key={ship._id} className={css.shipItem}>
                  <CatalogShipItem item={ship} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
