import { HttpClient } from "../HttpClient";

class UsersService extends HttpClient {
  constructor() {
    super("https://636392ed37f2167d6f7ce510.mockapi.io");
  }

  getAllPosts() {
    return this.get("users");
  }

  postNewPosts(body) {
    return this.post("users", body);
  }

  editPost(id, body) {
    return this.put("users", body, id);
  }
}

export const userService = new UsersService();
