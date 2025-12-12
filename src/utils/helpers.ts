import moment from 'moment';

export const isHolidaySeason = (): boolean => {
  const now = moment();
  const currentYear = now.year();
  const decemberFirst = moment(`${currentYear}-12-01`);
  const januaryTwelfth = moment(`${currentYear + 1}-01-12`);

  return now.isBetween(decemberFirst, januaryTwelfth, null, '[]');
};
