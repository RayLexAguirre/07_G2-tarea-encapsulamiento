import Bus from '../src/bus';

test('bus.soldTickets()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  obj._passengers = 10;

  expect(obj.soldTickets()).toBe(1000);
});
