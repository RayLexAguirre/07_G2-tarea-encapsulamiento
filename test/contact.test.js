import Contact from '../src/contact';

test('contact.constructor()', () => {
  let obj = new Contact(
    'Juan Gómez García',
    new Date(1997, 3, 10),
    '1234567890'
  );

  expect(obj._name).toBe('Juan Gómez García');
  expect(obj._birthDate.getFullYear()).toBe(1997);
  expect(obj._phoneNumber).toBe('1234567890');
});
