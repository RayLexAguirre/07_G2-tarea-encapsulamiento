import Bus from '../src/bus';

test('bus.isReadyToGo()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  obj._passengers = 3;
  expect(obj.isReadyToGo()).toBe(false);

  obj._passengers = 7;
  expect(obj.isReadyToGo()).toBe(true);
});
