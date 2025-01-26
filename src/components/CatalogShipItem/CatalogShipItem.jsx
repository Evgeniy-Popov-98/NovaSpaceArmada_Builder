import css from './CatalogShipItem.module.css';

export const CatalogShipItem = ({ item }) => {
  return (
    <div className={css.containerShip}>
      <img src={item.img} alt="" />
      <div className={css.shipInfo}>
        <p className={css.shipName}>{item.name}</p>
        <p className={css.ShipRating}>{item.rating}</p>
      </div>
    </div>
  );
};
