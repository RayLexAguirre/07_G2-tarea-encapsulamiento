import Bus from '../src/bus';

test('bus.addPassengers()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  expect(obj.addPassengers(5)).toBe(true);
  expect(obj._passengers).toBe(5);

  expect(obj.addPassengers(5)).toBe(true);
  expect(obj._passengers).toBe(10);

  expect(obj.addPassengers(25)).toBe(false);
  expect(obj._passengers).toBe(10);
});
