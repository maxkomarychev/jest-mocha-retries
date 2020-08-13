const RETRIES = 3;
jest.retryTimes(RETRIES);

let runCounter = 0;

describe("just failing test", () => {
  beforeEach(() => {
    console.log("before each", runCounter);
  });
  it("ok-1", () => {
    console.log("ok1");
  });
  it("I fail 2 times", () => {
    console.log("test", runCounter);
    runCounter += 1;
    expect(runCounter).toEqual(RETRIES);
  });
  it("ok-2", () => {
    console.log("ok2");
  });
});
