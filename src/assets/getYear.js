export function getYear(stringDate) {
  const dateArray = stringDate.split('-');
  const firstIndex = dateArray[0];
  return firstIndex;
}
