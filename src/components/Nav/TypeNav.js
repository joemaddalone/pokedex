import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { pokemonTypes } from 'poke-store';
import { useRecoilValue } from 'recoil';
import { NavLink } from 'react-router-dom';
import './TypeNav.css';

const TypeNav = () => {
  const things = useRecoilValue(pokemonTypes);
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
    <div className="type-nav">
      <div className="search-types">
        <Input
          value={search || ''}
          onChange={onSearchFilter}
          size="small"
          icon={inputIcon}
          placeholder="...search"
        />
      </div>
      <div className="left-nav-items">
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
    </div>
  );
};

export default TypeNav;
