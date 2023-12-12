import { MOCK_POSTS } from "./mocks";
import postService from "./post-service";

const fetch = jest.spyOn(window, "fetch");

describe("<App />", () => {
  it("should be render bla bla", async () => {
    fetch.mockResolvedValue({
      json: () => {
        return Promise.resolve({
          data: MOCK_POSTS,
        });
      }
    });

    const result = await postService.getPosts();
    expect(result).toHaveLength(MOCK_POSTS.length);
    expect(result).toMatchObject(MOCK_POSTS);
  })
});