import Bus from '../src/bus';

test('bus.removePassengers()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  obj._passengers = 15;

  expect(obj.removePassengers(5)).toBe(true);
  expect(obj._passengers).toBe(10);

  expect(obj.removePassengers(5)).toBe(true);
  expect(obj._passengers).toBe(5);

  expect(obj.removePassengers(15)).toBe(false);
  expect(obj._passengers).toBe(5);
});
