// 1. What is today's date in the following format: Jan 1st, 1999?
var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));