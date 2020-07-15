import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import altImage from './Pokemon-Pokeball.png';
import { translate } from 'poke-i18n';
import './PokemonList.css';
const t = translate(['favorite']);

const Pokemon = ({ isFavorited, id, name, triggerAdd }) => {
  return (
    <div className="pokemon flex" key={name}>
      <div className="add-fav">
        <Popup
          position="top center"
          content={isFavorited ? t('existing', { name }) : t('add', { name })}
          trigger={
            <Icon
              className="add-fav-icon cur-pointer"
              color={isFavorited ? 'blue' : 'black'}
              name="favorite"
              onClick={() => !isFavorited && triggerAdd()}
            />
          }
        />
      </div>
      <div className="name ttc">{name}</div>
      <img
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

Pokemon.propTypes = {
  isFavorited: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  triggerAdd: PropTypes.func,
};

export default Pokemon;
