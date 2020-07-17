import React from 'react';
import PropTypes from 'prop-types';
import RemoveFavorite from '../RemoveFavorite/RemoveFavorite';
import { translate } from 'poke-i18n';
import './Favorite.css';

const t = translate(['favorite']);

const Favorite = ({ favorite }) => {
  return (
    <div
      className="favorite-item flex justify-between items-start ph2 pv3"
      tabIndex={0}
      role="button">
      <div className="flex-column">
        <p className="ttc mr2 f4">{favorite.name}</p>

        {favorite.memo && (
          <>
            <small>{t('memo')}</small>
            <div className="memo-text" className="overflow-wrap">
              {favorite.memo}
            </div>
          </>
        )}
      </div>
      <div className="remover">
        <RemoveFavorite favorite={favorite} />
      </div>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object,
};

export default Favorite;
