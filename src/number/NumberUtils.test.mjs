import { formatToUSD } from "./NumberUtils.mjs";
import { describe, expect } from "@jest/globals";

describe("NumberUtils", () => {
  describe("formatToUSD", () => {
    it("formats specified number to $XX.XX", () => {
      expect(formatToUSD(0)).toBe("$0.00");
      expect(formatToUSD(1)).toBe("$1.00");
      expect(formatToUSD(12)).toBe("$12.00");
      expect(formatToUSD(123)).toBe("$123.00");
      expect(formatToUSD(1.25)).toBe("$1.25");
      expect(formatToUSD(1.5)).toBe("$1.50");
    });

    it("formats specified negative number to -$XX.XX", () => {
      expect(formatToUSD(-1)).toBe("-$1.00");
      expect(formatToUSD(-12)).toBe("-$12.00");
      expect(formatToUSD(-123)).toBe("-$123.00");
      expect(formatToUSD(-1.25)).toBe("-$1.25");
      expect(formatToUSD(-1.5)).toBe("-$1.50");
    });

    it("formats non-numeric value to $NaN", () => {
      expect(formatToUSD("blah")).toBe("$NaN");
      expect(formatToUSD("12$5")).toBe("$NaN");
      expect(formatToUSD("$123")).toBe("$NaN");
    });
  });
});
