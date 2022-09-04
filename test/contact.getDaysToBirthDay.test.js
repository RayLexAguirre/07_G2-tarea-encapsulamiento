import Contact from '../src/contact';

test('contact.getDaysToBirthDay()', () => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let oneDay = 1000 * 60 * 60 * 24;
  let tenDays = oneDay * 10;
  let birthDate_1 = new Date(today.getTime() + tenDays);
  let birthDate_2 = new Date(today.getTime() - tenDays);

  birthDate_1.setFullYear(1999);
  birthDate_2.setFullYear(1999);

  let obj = new Contact('Juan Gómez García', birthDate_1, '1234567890');

  expect(obj.getDaysToBirthDay()).toBe(10);

  obj._birthDate = birthDate_2;
  expect(obj.getDaysToBirthDay()).toBe(-10);
});
