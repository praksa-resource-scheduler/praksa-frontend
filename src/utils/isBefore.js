export default function isBefore(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { isOk: false, msg: "Invalid date format" };
  }
  if (start.getTime() === end.getTime()) {
    return { isOk: false, msg: "Date1 is the same as Date2" };
  }
  if (start > end) {
    return { isOk: false, msg: "Date1 is not before Date2" };
  }

  return { isOk: true, msg: "Date1 is before Date2" };
}
