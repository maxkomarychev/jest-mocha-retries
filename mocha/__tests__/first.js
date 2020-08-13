const assert = require("assert");

const RETRIES = 3;

let runCounter = 0;

describe("just failing test", () => {
  beforeEach(() => {
    console.log("before each", runCounter);
  });
  it("ok-1", () => {
    console.log("ok1");
  });
  it("I fail 2 times", function () {
    this.retries(RETRIES);
    console.log("test", runCounter);
    runCounter += 1;
    assert(runCounter === RETRIES);
  });
  it("ok-2", () => {
    console.log("ok2");
  });
});
