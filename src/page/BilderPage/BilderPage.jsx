import { HeaderNavigation } from '../../components/HeaderNavigation/HeaderNavigation';
import { ShipsCollection } from '../../components/ShipsCollection/ShipsCollection';
export const BilderPage = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="container">
        <div className="filter">
          <ShipsCollection />
        </div>
        <div className="bilder"></div>
      </div>
    </>
  );
};
