import React from 'react';
import Favorite from './Favorite';
import renderWith from '../../test-util/renderWith';

describe('<Favorite />', () => {
  let props;
  beforeEach(() => {
    props = {
      favorite: {
        id: '100',
        name: 'thingamjig',
        memo: '0489048048904890489048904890489',
      },
    };
  });
  it('should render without crashing', () => {
    const { getByTestId } = renderWith(<Favorite {...props} />, {
      withStore: true,
    });
    expect(getByTestId('favorite-name')).toHaveTextContent(props.favorite.name);
    expect(getByTestId('favorite-memo')).toHaveTextContent(props.favorite.memo);
  });
});
