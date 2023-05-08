const WorldcupService = require("../../../services/worldcup.service");

let mockWorldcupRepository = {
  create: jest.fn(),
  createChoice: jest.fn(),
  getAll: jest.fn(),
  getOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
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
      user_id: 1,
      worldcup_id: 1,
    };

    mockWorldcupRepository.create = jest.fn(
      () => createWorldcupReturnValue
    );

    const createdWorldcup = await worldcupService.createWorldcup(
      createWorldcupReturnValue.user_id,
      createWorldcupReturnValue.title,
      createWorldcupReturnValue.content,
      createWorldcupReturnValue.choices,
    );

    expect(createdWorldcup).toEqual(createWorldcupReturnValue);

    expect(mockWorldcupRepository.create).toHaveBeenCalledTimes(1);
    expect(mockWorldcupRepository.createChoice).toHaveBeenCalledTimes(1);
  });

  test("Worldcup Service createWorldcup 성공 케이스", async () => {});

  test("Worldcup Service createWorldcup 실패 케이스", async () => {});
});
