import { sum } from './calc';

describe('sum module', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// executa antes de qualquer teste
// beforeEach(() => {
//   initializeCityDatabase();
// });

// executa depois de qualquer teste
// afterEach(() => {
//   clearCityDatabase();
// });

// executa antes de todos os testes uma vez só
// beforeAll(() => {
//   return initializeCityDatabase();
// });

// executa depois de todos os testes uma vez só
// afterAll(() => {
//   return clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });
