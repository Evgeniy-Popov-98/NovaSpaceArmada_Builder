import { HeaderNavigation } from '../../components/HeaderNavigation/HeaderNavigation';

export const BilderPage = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="container">
        <div className="filter">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="bilder"></div>
      </div>
    </>
  );
};
