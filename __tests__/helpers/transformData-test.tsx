import { transformData } from '../../src/helpers/helpers';

describe('transformData', () => {
  it('Deve converter a entrada para a saída esperada', () => {
    const input = [
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

    expect(transformData(input)).toEqual(expectedOutput);
  });

  it('Deve converter a entrada simples para a saída esperada', () => {
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


  it('Deve retornar um array vazio quando a entrada for um array vazio', () => {
    expect(transformData([])).toEqual([]);
  });
});