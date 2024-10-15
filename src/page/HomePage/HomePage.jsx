import { HeaderNavigation } from '../../components/HeaderNavigation/HeaderNavigation';

import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <HeaderNavigation />
      <section className={css.homeContainer}>
        <div className={css.briefDetails}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dicta numquam ea voluptatem, qui quos? Voluptatum
            ducimus maiores quod repellendus commodi repellat neque reiciendis
            sed unde reprehenderit. Cum, eligendi praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odio deserunt minima, consequuntur exercitationem incidunt eveniet
            numquam, nulla quisquam repellendus alias quibusdam laboriosam
            dolore vel voluptatum et delectus id maiores!
          </p>
        </div>
        <div className={css.briefVideo}>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
};
