/**
 * Date utility functions.
 * @namespace DateUtils
 */

/**
 * Returns month in 01, 02, 03... 12
 * @memberof DateUtils
 * @function getCurrentMonthInString
 * @param {Date} date
 * @returns Month in 01, 02, 03... 12
 */
export function getCurrentMonthInString(date) {
  const month = date.getMonth() + 1;
  return month.toString().padStart(2, "0");
}

/**
 * Returns date in YYYY-MM-DD format
 * @memberof DateUtils
 * @function getDateString
 * @param {Date} date
 * @returns date in YYYY-MM-DD format
 */
export function getDateString(date) {
  return (
    date.getFullYear().toString() +
    "-" +
    getCurrentMonthInString(date) +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

function main() {
  const january = new Date("2025-01-01T00:00:00");
  const november = new Date("2025-11-11T00:00:00");

  console.log(
    "getCurrentMonthInString current time",
    getCurrentMonthInString(new Date()),
  );
  console.log(
    "getCurrentMonthInString january",
    getCurrentMonthInString(january),
  );
  console.log(
    "getCurrentMonthInString november",
    getCurrentMonthInString(november),
  );

  console.log("getDateString current date", getDateString(new Date()));
  console.log("getDateString january", getDateString(january));
  console.log("getDateString november", getDateString(november));
}

main();
