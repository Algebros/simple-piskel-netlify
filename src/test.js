/* eslint-disable no-undef */
import { bresenham } from './canvas/tools/pencil';
import { rgbStringToHex } from './canvas/tools/color_select';

test('array diagonal', () => {
  expect(bresenham([0, 0], [3, 3])).toEqual([[0, 0], [1, 1], [2, 2], [3, 3]]);
});

test('array horizonal', () => {
  expect(bresenham([0, 0], [3, 0])).toEqual([[0, 0], [1, 0], [2, 0], [3, 0]]);
});

test('array vertical', () => {
  expect(bresenham([0, 0], [0, 3])).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
});

test('RGB to hex BLACK', () => {
  expect(rgbStringToHex('0, 0, 0')).toBe('#000000');
});

test('RGB to hex WHITE', () => {
  expect(rgbStringToHex('255, 255, 255')).toBe('#ffffff');
});

test('RGB to hex RED', () => {
  expect(rgbStringToHex('255, 0, 0')).toBe('#ff0000');
});
