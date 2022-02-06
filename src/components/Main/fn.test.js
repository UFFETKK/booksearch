const sum = require("./sum");

test("1+1", () => {
  expect(sum.add(1, 1)).toBe(2);
});
