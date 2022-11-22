import { cipher } from './encode';

export const encode = (text: string, key: number): string => cipher(text, key, true);
export const decode = (text: string, key: number): string => cipher(text, key, false);