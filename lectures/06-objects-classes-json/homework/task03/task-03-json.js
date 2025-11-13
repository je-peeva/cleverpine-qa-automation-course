export { toJson, fromJson };

let userProfile = {
  username: "user1",
  email: "user1@mail.com",
  password: "user1password",
  role: "user1role",
  active: true,
};

let testCases = [
  { name: "testCase1", status: "PASS", duration: 145, priority: "HIGH" },
  { name: "testCase2", status: "FAIL", duration: 30, priority: "MEDIUM" },
  { name: "testCase3", status: "SKIP", duration: 850, priority: "LOW" },
  { name: "testCase4", status: "FAIL", duration: 1073, priority: "HIGH" },
  { name: "testCase5", status: "PASS", duration: 168, priority: "MEDIUM" },
];

//Convert object to json
function toJson(value) {
  return JSON.stringify(value);
}

//Convert json to object
function fromJson(jsonString) {
  return JSON.parse(jsonString);
}

//user
console.log("Original user object:", typeof userProfile);

let userToJson = toJson(userProfile);
console.log("JSON string:", userToJson);
console.log("Type:", typeof userToJson);

let parsedUserToJson = fromJson(userToJson);
console.log("Parsed back to user object:", parsedUserToJson);
console.log("Type:", typeof parsedUserToJson);

console.log("Parsed email:", parsedUserToJson.email);
console.log("Parsed role:", parsedUserToJson.role);

//array
console.log("Original array:", typeof testCases);

let arrayToJson = toJson(testCases);
console.log("JSON string:", arrayToJson);
console.log("Type:", typeof arrayToJson);

let parsedArrayToJson = fromJson(arrayToJson);
console.log("Parsed back to array with objects:", parsedArrayToJson);
console.log("Type:", typeof parsedArrayToJson);

console.log("Parsed array length:", parsedArrayToJson.length);
console.log("Parsed test case name:", parsedArrayToJson[0].name);
