import Bus from '../src/bus';

test('bus.constructor()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  expect(obj._number).toBe('123');
  expect(obj._maxPassenger).toBe(20);
  expect(obj._minPassenger).toBe(5);
  expect(obj._destination).toBe('Guadalajara');
  expect(obj._seatPrice).toBe(100);
  expect(obj._passengers).toBe(0);
});
