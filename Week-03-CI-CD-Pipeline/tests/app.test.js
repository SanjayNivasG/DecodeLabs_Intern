const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getStatus, add } = require('../src/app');

test('getStatus returns the expected pipeline status message', () => {
  assert.equal(getStatus(), 'DecodeLabs CI/CD Pipeline is running!');
});

test('add calculates sum of positive numbers', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(10, 25), 35);
});

test('add supports negative numbers', () => {
  assert.equal(add(-2, 5), 3);
  assert.equal(add(-4, -6), -10);
});

test('add handles zero correctly', () => {
  assert.equal(add(0, 7), 7);
  assert.equal(add(0, 0), 0);
});

test('add supports decimal numbers', () => {
  assert.equal(add(1.5, 2.25), 3.75);
  assert.ok(Math.abs(add(0.1, 0.2) - 0.3) < Number.EPSILON);
});

test('add throws TypeError for non-numeric or missing inputs', () => {
  assert.throws(() => add('2', 3), { name: 'TypeError' });
  assert.throws(() => add(2, null), { name: 'TypeError' });
  assert.throws(() => add(), { name: 'TypeError' });
});

test('add throws TypeError for NaN or infinite values', () => {
  assert.throws(() => add(NaN, 1), { name: 'TypeError' });
  assert.throws(() => add(Infinity, 2), { name: 'TypeError' });
});
