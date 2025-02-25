import { HeaderNavigation } from '../../components/HeaderNavigation/HeaderNavigation';
import { ShipsCollection } from '../../components/ShipsCollection/ShipsCollection';

import css from './BilderPage.module.css';

export const BilderPage = () => {
  return (
    <>
      <HeaderNavigation />
      <div className={css.container}>
        <div className={css.filter}>
          <ShipsCollection />
        </div>
        <div className={css.bilder}></div>
      </div>
    </>
  );
};
