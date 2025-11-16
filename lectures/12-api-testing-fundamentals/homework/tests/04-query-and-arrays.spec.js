import { test, expect } from "@playwright/test";

test("filter posts by userId", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );

  expect(response.status()).toBe(200);

  const posts = await response.json();

  //forEach() is usually used for synchronous operations, do not use for assertions!
  expect(posts.every((post) => post.userId === 1)).toBeTruthy();
});

test("limit results", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts = await response.json();

  expect(posts.length).toBe(5);
});

test("find a specific post in the collection", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  const targetPost = posts.find((post) => post.id === 1);

  expect(targetPost).toBeTruthy();
  expect(targetPost).toHaveProperty("userId");
  expect(targetPost).toHaveProperty("id");
  expect(targetPost).toHaveProperty("title");
  expect(targetPost).toHaveProperty("body");
});

test("extract and check titles with map", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  const titles = posts.map((post) => post.title);

  expect(titles.length).toBe(100);

  const matchingTitles = titles.filter((title) =>
    title.toLowerCase().includes("sunt")
  );
  expect(matchingTitles.length).toBeGreaterThanOrEqual(1);
});
