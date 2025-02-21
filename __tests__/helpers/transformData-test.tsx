import { transformData } from '../../src/helpers/helpers';

describe('transformData', () => {
  it('converts old data format into the expected structure', () => {
    const oldData = [
      { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' },
      { id: '2', passenger_name: 'Ana', origin: 'Brazil', destination: 'Canada' },
      { id: '3', passenger_name: 'John', origin: 'USA', destination: 'Mexico' },
      { id: '4', passenger_name: 'Maria', origin: 'Canada', destination: 'USA' }
    ];

    const expectedOutput = [
      {
        title: 'Brazil',
        data: [
          { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' },
          { id: '2', passenger_name: 'Ana', origin: 'Brazil', destination: 'Canada' }
        ]
      },
      {
        title: 'Canada',
        data: [
          { id: '2', passenger_name: 'Ana', origin: 'Brazil', destination: 'Canada' },
          { id: '4', passenger_name: 'Maria', origin: 'Canada', destination: 'USA' }
        ]
      },
      {
        title: 'Mexico',
        data: [
          { id: '3', passenger_name: 'John', origin: 'USA', destination: 'Mexico' }
        ]
      },
      {
        title: 'USA',
        data: [
          { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' },
          { id: '3', passenger_name: 'John', origin: 'USA', destination: 'Mexico' },
          { id: '4', passenger_name: 'Maria', origin: 'Canada', destination: 'USA' }
        ]
      }
    ];

    expect(transformData(oldData)).toEqual(expectedOutput);
  });

  it('returns an empty array when given an empty input', () => {
    expect(transformData([])).toEqual([]);
  });

  it('handles a single entry correctly', () => {
    const singleEntry = [
      { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' }
    ];

    const expectedOutput = [
      {
        title: 'Brazil',
        data: [
          { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' }
        ]
      },
      {
        title: 'USA',
        data: [
          { id: '1', passenger_name: 'Carlos', origin: 'Brazil', destination: 'USA' }
        ]
      }
    ];

    expect(transformData(singleEntry)).toEqual(expectedOutput);
  });
});