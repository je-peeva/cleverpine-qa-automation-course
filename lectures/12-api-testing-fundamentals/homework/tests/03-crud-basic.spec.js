import { test, expect } from "@playwright/test";

test("create post with POST", async ({ request }) => {
  const payload = {
    title: "je Title",
    body: "je test body",
    userId: 12,
  };

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    { data: payload }
  );

  expect(response.status()).toBe(201);

  const createdPost = await response.json();
  expect(createdPost.title).toBe(payload.title);
  expect(createdPost.body).toBe(payload.body);
  expect(createdPost.userId).toBe(payload.userId);
  expect(createdPost).toHaveProperty("id");
});

test("update post with PUT", async ({ request }) => {
  const updatedPayload = {
    title: "je CHANGED Title",
    body: "je test body едит",
    userId: 21,
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    { data: updatedPayload }
  );

  expect(response.status()).toBe(200);

  const updatedPost = await response.json();
  expect(updatedPost.title).toBe(updatedPayload.title);
  expect(updatedPost.body).toBe(updatedPayload.body);
  expect(updatedPost.userId).toBe(updatedPayload.userId);
});

test("delete post with DELETE", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);
});
