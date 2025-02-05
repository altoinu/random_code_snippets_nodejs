import { getCurrentMonthInString } from "./DateUtils.mjs";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

describe("DateUtils", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("getCurrentMonthInString", () => {
    it("returns single digit months with 0 prepended", () => {
      expect(getCurrentMonthInString(new Date("2025-01-01T00:00:00"))).toBe(
        "01",
      );
    });
  });
});
