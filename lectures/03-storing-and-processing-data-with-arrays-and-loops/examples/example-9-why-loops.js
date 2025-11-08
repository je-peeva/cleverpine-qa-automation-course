// Without loops (inefficient and error-prone):
let users = ["user1@test.com", "user2@test.com", "user3@test.com"];
console.log("Testing user:", users[0]);
console.log("Testing user:", users[1]);
console.log("Testing user:", users[2]);

console.log("\n--- Using a loop ---");

// With loops (efficient and scalable):
let testUsers = ["user1@test.com", "user2@test.com", "user3@test.com"];
for (let i = 0; i < testUsers.length; i++) {
  console.log("Testing user:", testUsers[i]);
}
