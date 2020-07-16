import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { getPokemonTypes } from 'poke-store';
import { useRecoilValue } from 'recoil';
import { NavLink } from 'react-router-dom';
import { translate } from 'poke-i18n';
import './TypeNav.css';

const t = translate(['common']);

const TypeNav = () => {
  const things = useRecoilValue(getPokemonTypes);
  const [search, setSearch] = useState(null);

  const onSearchFilter = (e, data) => setSearch(data.value);
  const clearSearchFilter = () => setSearch(null);

  const items = search
    ? things.filter(
        (thing) => thing.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
      )
    : things;

  const inputIcon = search
    ? { name: 'close', link: true, onClick: clearSearchFilter }
    : { name: 'search' };

  return (
    <>
      <div className="search-types flex flex-center">
        <Input
          autoFocus
          icon={inputIcon}
          onChange={onSearchFilter}
          placeholder={t('search')}
          size="small"
          value={search || ''}
        />
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
