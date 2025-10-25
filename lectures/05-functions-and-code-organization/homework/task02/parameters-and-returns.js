export { isValidEmail, formatDuration };

//Return boolean statement if email is valid
function isValidEmail(email) {
  let hasAtSymbol = email.includes("@");
  let hasDotSymbol = email.includes(".");
  let isNotEmpty = email.length > 0;

  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

//Return execution time in ms or seconds
function formatDuration(miliseconds) {
  if (miliseconds < 1000) {
    return miliseconds + "ms";
  } else {
    return (miliseconds / 1000).toFixed(1) + "s";
  }
}

//Generate email using baseName and domain value
function generateTestEmail(baseName, domain) {
  if (!domain) {
    domain = "testcompany.com";
  }

  return baseName + "@" + domain;
}

console.log(isValidEmail("jeTest@email.com"));
console.log(isValidEmail("jeInvalid!mail.com"));
console.log(formatDuration(98));
console.log(formatDuration(1247));
console.log(generateTestEmail("je1", "test.bg"));
console.log(generateTestEmail("je2", ""));
console.log(generateTestEmail("je3"));
