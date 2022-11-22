export const cipher = (text: string, key: number, encode: boolean): string => {

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const encodedList = text.split('').map(c => {

    if (!alphabet.includes(c)) return c;

    const shiftedIndex = mod(alphabet.indexOf(c) + (encode ? 1 : -1) * key, alphabet.length);
    return alphabet[shiftedIndex];
  });

  const encodedString = encodedList.join('');

  return encodedString;

}

