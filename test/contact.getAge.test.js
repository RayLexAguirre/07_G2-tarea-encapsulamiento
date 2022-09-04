import Contact from '../src/contact';

test('contact.getAge()', () => {
  let obj = new Contact(
    'Juan Gómez García',
    new Date(1997, 0, 1),
    '1234567890'
  );

  let year = new Date().getFullYear();
  expect(obj.getAge()).toBe(year - 1997);
});
