import specialFind from '../app';

describe('find specials skills of character and test that', () => {
  let character;
  let result;

  beforeEach(() => {
    character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    result = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];
  });

  test('result is array', () => {
    const res = specialFind(character);
    expect(Array.isArray(res)).toBe(true);
  });
  test('add description to undefined prop', () => {
    expect(specialFind(character)).toEqual(result);
  });

  test('add new special attack', () => {
    const addSpecial = { id: 10, name: 'Удар по печени', icon: 'http://...' };
    character.special.push(addSpecial);
    result.push(addSpecial);
    result[result.length - 1].description = 'Описание недоступно';
    expect(specialFind(character)).toEqual(result);
  });
});
