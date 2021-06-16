import { saysHello } from '../currentValues';

//describe - permite describir una serie de pruebas (test suite)
describe('testing says hello features', () => {
  //testing function - correct returned type
  test('should return a string', () => {
    expect(typeof saysHello()).toBe('string');
  });

  test('should not be bye', () => {
    expect(saysHello()).not.toMatch(/bye/);
  });
});
