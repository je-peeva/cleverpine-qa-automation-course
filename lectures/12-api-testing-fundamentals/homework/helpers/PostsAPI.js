export class PostsAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  async getAllPosts() {
    const response = await this.request.get(this.baseUrl + "/posts");
    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  //USED
  async getPostById(postId) {
    const response = await this.request.get(this.baseUrl + `/posts/${postId}`);

    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  async getPostsByUser(userId) {
    const response = await this.request.get(
      this.baseUrl + `/posts?userId=${userId}`
    );

    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  //USED
  async createPost(postData) {
    const response = await this.request.post(this.baseUrl + "/posts", {
      data: postData,
    });

    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  //USED
  async updatePost(postId, postData) {
    const response = await this.request.put(this.baseUrl + `/posts/${postId}`, {
      data: postData,
    });

    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  //USED
  async deletePost(postId) {
    const response = await this.request.delete(
      this.baseUrl + `/posts/${postId}`
    );
    const responseData = await response.json();

    return { status: response.status(), responseData };
  }

  //USED
  async searchPostsByTitle(keyword) {
    const response = await this.request.get(this.baseUrl + "/posts");

    const responseData = await response.json();

    const matchingKeyword = responseData.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return { status: response.status(), matchingData: matchingKeyword };
  }
}
