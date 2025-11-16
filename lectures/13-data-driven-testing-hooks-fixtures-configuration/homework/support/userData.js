export const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "guest", password: "guest123" },
];

export const invalidUsers = [
  { username: "", password: "pass123", description: "empty username" },
  { username: "something", password: "", description: "empty password" },
  { username: "short", password: "123", description: "too short username" },
];
