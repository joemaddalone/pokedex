import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import altImage from './Pokemon-Pokeball.png';
import KeyClick from '../common/KeyClick';
import RemoveFavorite from '../RemoveFavorite/RemoveFavorite';
import { translate } from 'poke-i18n';
import './PokemonListItem.css';

const t = translate(['favorite']);

const PokemonListItem = ({ isFavorited, pokemon, add }) => {
  const a11yProps = !isFavorited ? { tabIndex: 0, role: 'button' } : {};
  const { name, id } = pokemon;
  return (
    <div
      data-testid="pokemon-list-item-component"
      className={`pokemon-list-item flex flex-column flex-center ${
        isFavorited ? 'active' : ''
      }`}
      key={pokemon.name}>
      {isFavorited && (
        <div className="remove-fav">
          <RemoveFavorite favorite={pokemon} />
        </div>
      )}
      <div className="add-fav">
        <Popup
          basic
          on={['hover', 'focus']}
          content={isFavorited ? t('existing', { name }) : t('add', { name })}
          trigger={
            <div>
              <KeyClick handler={() => !isFavorited && add()}>
                <span data-testid="add-favorite-button" {...a11yProps}>
                  <Icon
                    className={`add-fav-icon cur-pointer ${
                      isFavorited ? 'active' : ''
                    }`}
                    name="favorite"
                  />
                </span>
              </KeyClick>
            </div>
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
  pokemon: PropTypes.object,
  add: PropTypes.func,
  remove: PropTypes.func,
};

export default PokemonListItem;
