import test from '../../assets/images/formations/AnnForm.jpg';

import css from './AdmiralFormations.module.css';

export const AdmiralFormations = () => {
  return (
    <>
      <div className={css.containerFormations}>
        <h2></h2>
        <div className={css.fleets}>
          <ul className={css.fleetsList}>
            <li className={css.fleetsItem}>1 fleet</li>
            <li className={css.fleetsItem}>2 fleet</li>
            <li className={css.fleetsItem}>3 fleet</li>
            <li className={css.fleetsItem}>4 fleet</li>
            <li className={css.fleetsItem}>5 fleet</li>
            <li className={css.fleetsItem}>6 fleet</li>
          </ul>
        </div>
        <picture>
          <img src={test} alt="Customer 1" />
        </picture>
      </div>
    </>
  );
};
