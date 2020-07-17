import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, Button } from 'semantic-ui-react';
import { translate } from 'poke-i18n';
import { useRemoveFavorite } from 'poke-store';
import './RemoveFavorite.css';

const t = translate(['favorite', 'common']);

const RemoveFavorite = ({ favorite }) => {
  const remove = useRemoveFavorite();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Popup
      wide
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      hoverable
      basic
      on={['focus']}
      content={
        <div>
          <h5>{t('removeConfirm', favorite)}</h5>
          <div className="flex justify-end">
            <Button onClick={handleClose}>
              {t('no')}
            </Button>
            <Button negative onClick={() => remove(favorite)}>
              {t('yes')}
            </Button>
          </div>
        </div>
      }
      trigger={
        <span tabIndex={0} role="button">
          <Icon className="remove-fav-icon cur-pointer" name="delete" />
        </span>
      }
    />
  );
};

RemoveFavorite.propTypes = {
  favorite: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default RemoveFavorite;
