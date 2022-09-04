import Contact from '../src/contact';

test('contact.getPhoneNumber()', () => {
  let obj = new Contact(
    'Juan Gómez García',
    new Date(1997, 1, 2),
    '1234567890'
  );

  expect(obj.getPhoneNumber()).toBe('123-456-7890');

  obj._phoneNumber = '123456789';
  expect(obj.getPhoneNumber()).toBe('error');
});
