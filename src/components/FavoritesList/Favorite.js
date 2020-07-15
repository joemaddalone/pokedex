import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, Button } from 'semantic-ui-react';
import './Favorite.css';

const Favorite = ({ favorite, remove }) => {
  return (
    <div className="favorite-item">
      <h2 className="favorite-name">{favorite.name}</h2>
      <p className="favorite-id">#{favorite.id}</p>
      <p className="favorite-mome">{favorite.memo}</p>
      <Popup
        hoverable
        position="left center"
        trigger={
          <Icon
            className="favorite-remove cur-pointer pa3"
            color="red"
            name="delete"
          />
        }>
        <Popup.Content>
          <h5>Are you sure you want to remove {favorite.name} from your favorites?</h5>
          <Button size="tiny" negative onClick={() => remove(favorite)}>
            Remove Favorite
          </Button>
        </Popup.Content>
      </Popup>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object,
  remove: PropTypes.func,
};

export default Favorite;
