function formatDate(date = new Date()) {
  const day = date.getDate();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const formated = `${day}/${month}/${year}`;
  return formated;
}

module.exports = formatDate;
