export { TestUser, TestCase };

class TestUser {
  constructor(username, email, password, role, active) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }

  //Verify email length and ensure it contains "@"
  isValidEmail() {
    return this.email.includes("@") && this.email.length > 10;
  }

  //Verify password length and ensure it contains letters and digits
  isValidPassword() {
    return (
      this.password.length >= 8 &&
      /[a-z]/.test(this.password) &&
      /[A-Z]/.test(this.password) &&
      /[0-9]/.test(this.password)
    );
  }

  //Velidate user's email and password
  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }

  //Summaries username, role and status
  getInfo() {
    return `Username: ${this.username}
Role: ${this.role}
Status: ${this.active}`;
  }
}

let user1 = new TestUser(
  "jeTest1",
  "jeTest1@mail.test",
  "jeTest1Password",
  "qa",
  true
);

console.log(user1);
console.log(user1.validate());
console.log(user1.getInfo());

class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
  }

  //Set test case status to "Running"
  start() {
    this.status = "RUNNING";
  }

  //Set test case status and duration as parameter values
  complete(status, durationMs) {
    this.status = status;
    this.duration = durationMs;
  }

  //Summaries test case name, status and duration in ms/s
  getSummary() {
    let formattedDuration =
      this.duration < 1000
        ? this.duration + "ms"
        : (this.duration / 1000).toFixed(0) + "s";

    return `Name: ${this.name}
Status: ${this.status}
Duration: ${formattedDuration}`;
  }
}

let testCase = new TestCase("jeTestCase1", "je test case description");
console.log(testCase);
testCase.start();
testCase.complete("Pass", 961);
console.log(testCase.getSummary());
