import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI.js";

test("PostAPI- small flow", async ({ request }) => {
  const api = new PostsAPI(request);

  const payload = {
    title: "je Title",
    body: "je test body",
    userId: 12,
  };

  const createdPost = await api.createPost(payload);
  expect(createdPost.status).toBe(201);
  expect(createdPost.responseData).toHaveProperty("id");
  expect(createdPost.responseData.title).toBe(payload.title);
  expect(createdPost.responseData.body).toBe(payload.body);
  expect(createdPost.responseData.userId).toBe(payload.userId);

  const createdPostId = createdPost.responseData.id;

  const getResponse = await api.getPostById(createdPostId);
  expect(getResponse.status).toBe(200);
  expect(getResponse.responseData.userId).toBe(payload.userId);

  const updatedPayload = {
    title: "je CHANGED Title",
    body: "je test body едит",
    userId: 21,
  };

  const updatedPost = await api.updatePost(createdPostId, updatedPayload);

  expect(updatedPost.status).toBe(200);
  expect(updatedPost.responseData.title).toBe(updatedPayload.title);
  expect(updatedPost.responseData.body).toBe(updatedPayload.body);
  expect(updatedPost.responseData.userId).toBe(updatedPayload.userId);

  const keyword = "je";
  const searchPosts = await api.searchPostsByTitle(keyword);
  expect(searchPosts.status).toBe(200);
  expect(Array.isArray(searchPosts.matchingData)).toBe(true);

  const deletedPost = await api.deletePost(createdPostId);
  expect(deletedPost.status).toBe(200);
});
