export const CurrentValues = {
  HelloWorld: 'Hello World',
  Fruits: ['apple', 'banana', 'watermelon'],
};

export const reverseString = (
  word: string,
  callback: (result: string) => void
) => callback(word.split('').reverse().join(''));

export const reverseStringAsync = (word: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!word) reject(Error('word must not be undefined'));

    resolve(word.split('').reverse().join(''));
  });
};

export const saysHello = () => 'Hello';
