import { useState } from 'react';
import { infoAdmiral, infoAdmiralForm } from '../../helpers/getFleet';

import { AdmiralList } from '../AdmiralList/AdmiralList';

import css from './AdmiralFormations.module.css';

export const AdmiralFormations = () => {
  const [imgAdmiralForm, setImgAdmiralForm] = useState(infoAdmiralForm());
  const [imgAdmiral, setImgAdmiral] = useState(infoAdmiral());

  const handleClick = number => {
    console.log(number);
    const imgAdmiralForm = infoAdmiralForm(number);
    setImgAdmiralForm(imgAdmiralForm);
    const imgAdmiral = infoAdmiral(number);
    setImgAdmiral(imgAdmiral);
  };

  return (
    <>
      <div className={css.containerFormations}>
        <h2></h2>

        <AdmiralList onUpData={handleClick} />

        <div className={css.boxTest}>
          <picture>
            <img
              className={css.imgimgAdmiralForm}
              src={imgAdmiralForm}
              alt="Customer 1"
            />
          </picture>
          <picture>
            <img
              className={css.imgimgAdmiral}
              src={imgAdmiral}
              alt="Customer 1"
            />
          </picture>
        </div>
      </div>
    </>
  );
};
