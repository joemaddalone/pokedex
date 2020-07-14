import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import './PokemonList.css';

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
              onClick={() => !isFavorited && triggerAdd()}
              name="favorite"
              color={isFavorited ? 'blue' : 'black'}
              className="add-fav-icon pointer"
            />
          }
        />
      </div>
      <div className="name">{name}</div>
      <img
        height="100"
        alt=""
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
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
