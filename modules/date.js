export default function dateHandler() {
  return luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
}