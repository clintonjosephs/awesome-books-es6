import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default function luxon() {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}