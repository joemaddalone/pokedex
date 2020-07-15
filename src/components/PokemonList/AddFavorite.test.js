import React from 'react';
import AddFavorite from './AddFavorite';
import renderWith from '../../test-util/renderWith';

// jest.mock('datacoral-api', () => ({
//   logs: {
//     get: async () => ({
//       status: 200,
//       message: 'FOUND LOGS',
//       payload: [
//         {
//           logStreamName: '2020/03/25/[$LATEST]2712abf05fc64dd9b3d1a1e77fc92e8f',
//           timestamp: 1585148507196,
//           message:
//             'START RequestId: 5af237a6-d9fa-4ed8-8269-1dafad00c269 Version: $LATEST\n',
//           ingestionTime: 1585148518799,
//           eventId: '35349992960809181927413322615102738486386612281299501076',
//         },
//         {
//           logStreamName: '2020/03/25/[$LATEST]2712abf05fc64dd9b3d1a1e77fc92e8f',
//           timestamp: 1585148507200,
//           message:
//             '2020-03-25T15:01:47.200Z\t5af237a6-d9fa-4ed8-8269-1dafad00c269\tINFO\tSEARCHSEARCH\n',
//           ingestionTime: 1585148518799,
//           eventId: '35349992960898384908207445107668881359477205727323422741',
//         },
//         {
//           logStreamName: '2020/03/25/[$LATEST]2712abf05fc64dd9b3d1a1e77fc92e8f',
//           timestamp: 1585148507201,
//           message:
//             '2020-03-25T15:01:47.201Z\t5af237a6-d9fa-4ed8-8269-1dafad00c269\tINFO\tnewsample/index: Received event:  ...\n',
//           ingestionTime: 1585148518799,
//           eventId: '35349992960920685653405975730810417077749854088829403158',
//         },
//       ],
//     }),
//   },
// }));

describe('<AddFavorite />', () => {
  let props;
  beforeEach(() => {
    props = {
      pokemon: { id: 100, name: 'thingamjig' },
      cancel: jest.fn(),
    };
  });
  it('should render without crashing', async () => {
    const { getByTestId } = renderWith(<AddFavorite {...props} />, {
		withStore: true,
    });
    expect(getByTestId('cancel-favorite')).toBeInTheDocument();
    expect(getByTestId('save-favorite')).toBeInTheDocument();
  });

  //   it('should have correct count of logs', async () => {
  //     const { getAllByTestId, wait } = renderWith(<Log {...props} />);
  //     await wait(() => {
  //       expect(getAllByTestId('datacoral-log-item')).toHaveLength(3);
  //     });
  //   });

  //   it('should filter logs on search', async () => {
  //     const { fireEvent, getByTestId, getAllByTestId, wait } = renderWith(
  //       <Log {...props} />,
  //     );
  //     await wait(() => {
  //       expect(getAllByTestId('datacoral-log-item')).toHaveLength(3);
  //     });
  //     fireEvent.change(
  //       getByTestId('searchInput-wrapper').querySelector('input'),
  //       {
  //         target: { value: 'SEARCHSEARCH' },
  //       },
  //     );
  //     await wait(() => {
  //       expect(getAllByTestId('datacoral-log-item')).toHaveLength(1);
  //     });
  //   });
});
