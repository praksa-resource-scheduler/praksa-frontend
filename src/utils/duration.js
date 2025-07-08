export default function duration(date1, date2, expDuration) {
  const start = new Date(date1);
  const end = new Date(date2);
  const diffMs = end - start;
  const twoHoursMs = expDuration * 60 * 60 * 1000;
  if (diffMs > twoHoursMs) {
    return false;
  }
  return true;
}
