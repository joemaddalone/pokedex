import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import EscapKey from '../common/EscapeKey';
import { getPokemonTypes } from 'poke-store';
import { useRecoilValue } from 'recoil';
import { translate } from 'poke-i18n';
import './TypeNav.css';

const t = translate(['common']);

const TypeNav = () => {
  const pokemonTypes = useRecoilValue(getPokemonTypes);
  const [search, setSearch] = useState(null);

  const onSearchFilter = (e, data) => setSearch(data.value);
  const clearSearchFilter = () => setSearch(null);

  const items = search
    ? pokemonTypes.filter(
        (thing) => thing.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
      )
    : pokemonTypes;

  const inputIcon = search
    ? { name: 'close', link: true, onClick: clearSearchFilter }
    : { name: 'search' };

  return (
    <>
      <div className="search-types flex flex-center">
        <EscapKey onEscape={clearSearchFilter}>
          <Input
            autoFocus
            icon={inputIcon}
            onChange={onSearchFilter}
            placeholder={t('search')}
            size="small"
            value={search || ''}
          />
        </EscapKey>
      </div>

      <div className="nav-items">
        {items &&
          items.map((item) => (
            <NavLink
              className="type-link ttc"
              key={item.name}
              to={`/type/${item.name}`}>
              {item.name}
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default TypeNav;
