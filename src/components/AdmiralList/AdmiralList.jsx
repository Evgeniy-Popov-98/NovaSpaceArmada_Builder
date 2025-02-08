import css from './AdmiralList.module.css';

export const AdmiralList = ({ onUpData }) => {
  return (
    <div className={css.fleets}>
      <ul className={css.fleetsList}>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(1);
            }}
          >
            1 fleet
          </button>
        </li>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(2);
            }}
          >
            2 fleet
          </button>
        </li>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(3);
            }}
          >
            3 fleet
          </button>
        </li>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(4);
            }}
          >
            4 fleet
          </button>
        </li>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(5);
            }}
          >
            5 fleet
          </button>
        </li>
        <li className={css.fleetsItem}>
          <button
            onClick={() => {
              onUpData(6);
            }}
          >
            {' '}
            fleet
          </button>
        </li>
      </ul>
    </div>
  );
};
