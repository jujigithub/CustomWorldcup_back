const WorldcupService = require("../../../services/worldcup.service");

let mockWorldcupRepository = {
  createWorldcup: jest.fn(),
  getAllWorldcups: jest.fn(),
  getOneWorldcup: jest.fn(),
  updateWorldcup: jest.fn(),
  deleteWorldcup: jest.fn(),
  postWorldcupResult: jest.fn(),
};

let worldcupService = new WorldcupService();
worldcupService.worldcupRepository = mockWorldcupRepository;

describe("Worldcup Service 단위 테스트", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Worldcup Service createWorldcup Method", async () => {
    const createWorldcupReturnValue = {
      title: "타이틀 테스트",
      content: "컨텐트 테스트",
      choices: [
        {
          choice_name: "테스트",
          choice_url:
            "https://media.istockphoto.com/id/108221348/photo/cat-jumping.jpg?s=1024x1024&w=is&k=20&c=W4pZdN6qS1HJG1fBMEhNEhKl8iJt4Q2yazF_3vF0qAw=",
        },
        {
          choice_name: "테스트",
          choice_url:
            "https://media.istockphoto.com/id/108221348/photo/cat-jumping.jpg?s=1024x1024&w=is&k=20&c=W4pZdN6qS1HJG1fBMEhNEhKl8iJt4Q2yazF_3vF0qAw=",
        },
      ],
      user_id: 1,
      worldcup_id: 1,
    };

    mockWorldcupRepository.createWorldcup = jest.fn(
      () => createWorldcupReturnValue
    );

    const allWorldcups = await worldcupService.createWorldcup(
      createWorldcupReturnValue.user_id,
      createWorldcupReturnValue.title,
      createWorldcupReturnValue.content,
      createWorldcupReturnValue.choices,
    );

    expect(allWorldcups).toEqual(createWorldcupReturnValue);

    expect(mockWorldcupRepository.createWorldcup).toHaveBeenCalledTimes(1);
  });

  test("Worldcup Service createWorldcup 성공 케이스", async () => {});

  test("Worldcup Service createWorldcup 실패 케이스", async () => {});
});
