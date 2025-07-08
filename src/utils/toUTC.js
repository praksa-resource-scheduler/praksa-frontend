/**
 * Converts a given date to its UTC ISO string representation.
 */

export default function toUTC(date) {
  if (date === null) {
    return null;
  }
  const localDate = new Date(date);
  return localDate.toISOString();
}
