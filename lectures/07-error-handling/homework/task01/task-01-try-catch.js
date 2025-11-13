export { safeParse, safeSuccessRate };

//Parse json to object and handle the error if accours
function safeParse(jsonString) {
  try {
    let jsonToObject = JSON.parse(jsonString);

    return {
      SuccessfulParsed: true,
      data: jsonToObject,
    };
  } catch (error) {
    return {
      SuccessfulParsed: false,
      error: error.message,
    };
  }
}

console.log(safeParse(`{"name":"test", "case": "testCase1"}`));
console.log(safeParse("{invalid json}"));
console.log(safeParse());

//Get user mail and handle the error if accours
function safeGetEmail(user) {
  try {
    if (user === undefined || user === null) {
      throw new Error(`Object ${user} is undefined or null.`);
    } else if (!user.email) {
      throw new Error("No email found.");
    } else {
      return user.email;
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

let userWithMail = {
  name: "jeTest with mail",
  email: "jeTest@mail.com",
};

let userNullMail = {
  name: "jeTest with mail",
  email: null,
};

//accessing missing property throw undefined, no exception is thrown, so the catch block never runs
let userNoMail = {
  name: "jeTest without mail",
};

let nullUser = null;

console.log(safeGetEmail(userWithMail));
console.log(safeGetEmail(userNullMail));
console.log(safeGetEmail(userNoMail));
console.log(safeGetEmail(nullUser));

//Add a value in array and handle error for undefined/null array or value
function safePush(resultsArray, value) {
  try {
    if (resultsArray === undefined) {
      throw new Error("Array is undefined.");
    } else if (value === undefined || value === null) {
      throw new Error("Value is undefined or null.");
    } else {
      resultsArray.push(value);
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

console.log(safePush([], "valueToAdd"));
console.log(safePush(null, "valueToAdd"));
console.log(safePush([1, 2, 3]));
console.log(safePush([1, 2, 3], null));
console.log(safePush());

//Calculate successful rate for passed tests
function safeSuccessRate(passed, total) {
  try {
    if (total === 0) {
      return "0.00%";
    }
    return ((passed / total) * 100).toFixed(2) + "%";
  } catch (error) {
    console.log(error.message);
    return "N/A";
  }
}

console.log(safeSuccessRate(10, 15));
console.log(safeSuccessRate(5, 0));
