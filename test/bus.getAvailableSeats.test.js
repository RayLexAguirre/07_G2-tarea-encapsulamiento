import Bus from '../src/bus';

test('bus.getAvailableSeats()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  obj._passengers = 3;
  expect(obj.getAvailableSeats()).toBe(17);
});
