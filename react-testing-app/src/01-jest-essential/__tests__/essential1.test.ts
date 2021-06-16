import {
  CurrentValues,
  reverseString,
  reverseStringAsync,
} from '../currentValues';

//text testing
test('should content a text', () => {
  expect(CurrentValues.HelloWorld).toMatch(/World/);
});

//Array testing
test('should content an apple', () => {
  expect(CurrentValues.Fruits).toContain('apple');
});

//number testing
test('should be greater than 5', () => {
  expect(CurrentValues.Fruits.length).toBeGreaterThan(2);
});

//boolean testing
test('should be true', () => {
  expect(CurrentValues.Fruits.length === 3).toBeTruthy();
});

//callback testing
test('should reserve a word', () => {
  reverseString('HOLA', (result) => {
    expect(result).toBe('ALOH');
  });
});

//promise testing
test('should reserve a word - promise', () => {
  return reverseStringAsync('HOLA').then((result) =>
    expect(result).toBe('ALOH')
  );
});

//async testing
test('should reserve a word - async', async () => {
  const result = await reverseStringAsync('HOLA');
  expect(result).toBe('ALOH');
});

// afterEach(() => console.log('Despues de cada test'));
// afterAll(() => console.log('Despues de todas las tests'));

// beforeEach(() => console.log('Antes de cada test'));
// beforeAll(() => console.log('Antes de todos los tests'));
