import React from 'react';
import PropTypes from 'prop-types';
import { getPokemonTypes } from 'poke-store';
import { useRecoilValue } from 'recoil';
import useRouter from '../../hooks/useRouter';

const HeaderTypeNav = ({ currentType }) => {
  const pokemonTypes = useRecoilValue(getPokemonTypes);
  const { history } = useRouter();

  const navToType = (e) => history.push(`/type/${e.target.value}`);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <span>
      <select value={currentType} onChange={navToType}>
        {pokemonTypes.map((pt) => (
          <option key={pt.name} value={pt.name}>
            {capitalize(pt.name)}
          </option>
        ))}
      </select>
    </span>
  );
};

HeaderTypeNav.propTypes = {
  currentType: PropTypes.string,
};

export default HeaderTypeNav;
