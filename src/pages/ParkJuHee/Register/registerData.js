const dateArray = (start, end) => {
  const date = [];
  for (let i = start; i <= end; i++) {
    date.push(i);
  }
  return date;
};

const dateObject = (array) =>
  array.map((value, index) => ({
    id: index + 1,
    value: value,
  }));

export const YEAR_DATE = dateObject(dateArray(1940, 2023));
export const MONTH_DATE = dateObject(dateArray(1, 12));
export const DAY_DATE = dateObject(dateArray(1, 31));

export const PHONEFRONT = [
  { id: 1, value: '010' },
  { id: 2, value: '011' },
  { id: 3, value: '016' },
];
