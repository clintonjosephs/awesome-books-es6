/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { DateTime } from './luxon.js';

export default function luxon() {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}