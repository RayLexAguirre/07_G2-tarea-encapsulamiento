import Bus from '../src/bus';

test('bus.encapsulation()', () => {
  let obj = new Bus('123', 20, 5, 'Guadalajara', 100);

  expect(typeof obj.getNumber).toBe('undefined');
  expect(typeof obj.setNumber).toBe('function');
  expect(typeof obj.setMaxPassenger).toBe('undefined');
  expect(typeof obj.getMaxPassenger).toBe('function');
  expect(typeof obj.setMinPassenger).toBe('undefined');
  expect(typeof obj.getMinPassenger).toBe('function');
  expect(typeof obj.setDestination).toBe('undefined');
  expect(typeof obj.getDestination).toBe('undefined');
  expect(typeof obj.setSeatPrice).toBe('function');
  expect(typeof obj.getSeatPrice).toBe('undefined');
  expect(typeof obj.setPassengers).toBe('undefined');
  expect(typeof obj.getPassengers).toBe('undefined');

  obj.setNumber('456');
  expect(obj._number).toBe('456');

  expect(obj.getMaxPassenger()).toBe(20);
  expect(obj.getMinPassenger()).toBe(5);

  obj.setSeatPrice(200);
  expect(obj._seatPrice).toBe(200);
});
