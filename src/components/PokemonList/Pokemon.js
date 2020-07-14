import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import './PokemonList.css';
import altImage from './Pokemon-Pokeball.png';

const Pokemon = ({ isFavorited, id, name, triggerAdd }) => {
  return (
    <div className="pokemon flex" key={name}>
      <div className="add-fav">
        <Popup
          position="top center"
          content={
            isFavorited
              ? `${name} is in your favorites!`
              : `Add ${name} to your favorites!`
          }
          trigger={
            <Icon
              className="add-fav-icon pointer"
              color={isFavorited ? 'blue' : 'black'}
              name="favorite"
              onClick={() => !isFavorited && triggerAdd()}
            />
          }
        />
      </div>
      <div className="name">{name}</div>
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
