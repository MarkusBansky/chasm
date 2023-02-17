import { average, cosine, similarity } from "./similarity";
import { BagOfWords, Sentence } from "./types";

describe("similarity.ts", () => {
  describe("average", () => {
    it("calculates correct value for an array", () => {
      const array = [1, 2, 3, 6];
      const avg = average(array);

      expect(avg).not.toBeNull();
      expect(avg).toEqual(3);
    });

    it("does not break on empty array", () => {
      const avg = average([]);

      expect(avg).not.toBeNull();
      expect(avg).toEqual(0);
    });
  });

  describe("cosine", () => {
    it("eq=1 when two arrays are identical", () => {
      const val = cosine([1, 0, 0, 1, 0], [1, 0, 0, 1, 0]);

      expect(val).not.toBeNull();
      expect(val).toBeGreaterThan(0.99);
    });

    it("eq=0 when two arrays are direct opposite", () => {
      const val = cosine([0, 1, 1, 0, 1], [1, 0, 0, 1, 0]);

      expect(val).not.toBeNull();
      expect(val).toEqual(0);
    });

    it("eq=0 when two arrays have different lengths", () => {
      const val = cosine([1, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0, 0, 0]);

      expect(val).not.toBeNull();
      expect(val).toEqual(0);
    });

    it("does not break on A empty array", () => {
      const val = cosine([], [1, 0, 0, 1, 0]);

      expect(val).not.toBeNull();
      expect(val).toEqual(0);
    });

    it("does not break on B empty array", () => {
      const val = cosine([1, 0, 0, 1, 0], []);

      expect(val).not.toBeNull();
      expect(val).toEqual(0);
    });

    it("does not break on both empty arrays", () => {
      const val = cosine([], []);

      expect(val).not.toBeNull();
      expect(val).toEqual(0);
    });
  });

  describe("similarity", () => {
    it("calculates function similarity over an array of bags of words", () => {
      const bow1 = [1, 0, 1, 0, 1, 0];
      const bow2 = [0, 0, 1, 0, 0, 1];
      const bow3 = [1, 0, 0, 1, 0, 0];

      const result = similarity([bow1, bow2, bow3], cosine);

      expect(result).not.toBeNull();
      expect(result.length).toEqual(2);
    });

    it("returns empty array when empty array provided", () => {
      const result = similarity([], cosine);

      expect(result).not.toBeNull();
      expect(result).toEqual([]);
    });

    it("should not break when undefined provided", () => {
      const result = similarity(undefined as unknown as BagOfWords[], cosine);

      expect(result).not.toBeNull();
      expect(result).toEqual([]);
    });
  });
});
