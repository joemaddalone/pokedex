import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import altImage from './Pokemon-Pokeball.png';
import { translate } from 'poke-i18n';
import './PokemonListItem.css';

const t = translate(['favorite']);

const PokemonListItem = ({ isFavorited, id, name, triggerAdd }) => {
  return (
    <div className="pokemon-list-item flex flex-column flex-center" key={name}>
      <div className="add-fav">
        <Popup
          position="top center"
          content={isFavorited ? t('existing', { name }) : t('add', { name })}
          trigger={
            <Icon
              className={`add-fav-icon cur-pointer ${isFavorited ? 'active' : ''}`}
              name="favorite"
              onClick={() => !isFavorited && triggerAdd()}
            />
          }
        />
      </div>
      <div className="name ttc">{name}</div>
      <img
        role="presentation"
        alt={name}
        height="100"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        onError={(e) => {
          e.target.src = altImage;
        }}
      />
      <div className="id">#{id}</div>
    </div>
  );
};

PokemonListItem.propTypes = {
  isFavorited: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  triggerAdd: PropTypes.func,
};

export default PokemonListItem;
