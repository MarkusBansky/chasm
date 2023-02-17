import { bow, vocabulary } from "./bow";
import { Sentence, Token, Vocabulary } from "./types";

describe("bow.ts", () => {
  describe("vocabulary", () => {
    const sentences = [
      { tokens: [{ token: "tok1" }, { token: "tok2" }, { token: "tok3" }] },
      { tokens: [{ token: "tok1" }, { token: "tok5" }, { token: "tok6" }] },
      { tokens: [{ token: "tok4" }, { token: "tok5" }, { token: "tok7" }] },
    ];

    it("should properly return result", () => {
      const voc = vocabulary(sentences as Sentence[]);

      expect(voc).not.toBeNull();
      expect(voc).toEqual({
        tok1: 0,
        tok2: 0,
        tok3: 0,
        tok4: 0,
        tok5: 0,
        tok6: 0,
        tok7: 0,
      });
    });

    it("should not break on empty array", () => {
      const voc = vocabulary([]);

      expect(voc).not.toBeNull();
      expect(voc).toEqual({});
    });

    it("should not break on empty tokens", () => {
      const sentence = {
        tokens: [] as Token[],
      };
      const voc = vocabulary([sentence] as Sentence[]);

      expect(voc).not.toBeNull();
      expect(voc).toEqual({});
    });

    it("should not break on undefined tokens", () => {
      const sentence = {};
      const voc = vocabulary([sentence] as Sentence[]);

      expect(voc).not.toBeNull();
      expect(voc).toEqual({});
    });

    it("should not break on undefined sentences", () => {
      const voc = vocabulary(undefined as unknown as Sentence[]);

      expect(voc).not.toBeNull();
      expect(voc).toEqual({});
    });
  });

  describe("bow", () => {
    const voc = {
      tok1: 0,
      tok2: 0,
      tok3: 0,
      tok4: 0,
      tok5: 0,
      tok6: 0,
      tok7: 0,
    };

    it("should properly return result", () => {
      const sentence = {
        tokens: [{ token: "tok1" }, { token: "tok3" }, { token: "tok5" }],
      };
      const bag = bow(sentence as Sentence, voc);

      expect(voc).not.toBeNull();
      expect(bag).toEqual([1, 0, 1, 0, 1, 0, 0]);
    });

    it("should not break on empty tokens", () => {
      const sentence = {
        tokens: [] as Token[],
      };
      const bag = bow(sentence as Sentence, voc);

      expect(voc).not.toBeNull();
      expect(bag).toEqual(Object.values(voc));
    });

    it("should not break on undefined tokens", () => {
      const sentence = {};
      const bag = bow(sentence as Sentence, voc);

      expect(voc).not.toBeNull();
      expect(bag).toEqual(Object.values(voc));
    });

    it("should not break on undefined vocabulary", () => {
      const sentence = {
        tokens: [] as Token[],
      };
      const bag = bow(sentence as Sentence, undefined as unknown as Vocabulary);

      expect(voc).not.toBeNull();
      expect(bag).toEqual([]);
    });

    it("should not break on undefined sentences", () => {
      const bag = bow(undefined as unknown as Sentence, voc);

      expect(voc).not.toBeNull();
      expect(bag).toEqual(Object.values(voc));
    });
  });
});
