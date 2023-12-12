import { MOCK_POSTS } from "./mocks";
import postService from "./post-service";
import axios from "axios";
jest.mock("axios");

describe("<App />", () => {
  it("should be render bla bla", async () => {
    const mockResponse = { data: MOCK_POSTS };
   axios.get.mockResolvedValueOnce(mockResponse);
   const result = await postService.getPosts();
   
   expect(result).toHaveLength(MOCK_POSTS.length);
   expect(result).toMatchObject(MOCK_POSTS);
  })

  it("should be reject axios", async () => {
    const mockResponse = { data: MOCK_POSTS };
    axios.get.mockRejectedValue(mockResponse);
    const result = await postService.getPosts();
    
    expect(result).toMatchObject({error: {
      message:"Data Bulunamadı",
    }});
   }
  )
});