import Contact from '../src/contact';

test('contact.encapsulation()', () => {
  let obj = new Contact(
    'Juan Gómez García',
    new Date(1997, 3, 10),
    '1234567890'
  );

  expect(typeof obj.getName).toBe('function');
  expect(typeof obj.setName).toBe('function');
  expect(typeof obj.setBirthDate).toBe('function');
  expect(typeof obj.getBirthDate).toBe('undefined');
  expect(typeof obj.setPhoneNumber).toBe('undefined');
  expect(typeof obj.getPhoneNumber).toBe('function');

  expect(obj.getName()).toBe('Juan Gómez García');

  obj.setName('Ramón Gómez García');
  expect(obj.getName()).toBe('Ramón Gómez García');

  obj.setBirthDate(new Date(1999, 3, 10));
  expect(obj._birthDate.getFullYear()).toBe(1999);
});
