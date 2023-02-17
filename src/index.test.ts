import chasm from ".";
import { Sentence } from "./types";

const token = (token: string, index: number) => ({ index, token });
const sentence = (index: number, ...tokens: string[]) => ({
  index,
  tokens: tokens.map(token),
});

describe("index.ts", () => {
  const sen1 = sentence(
    0,
    "tok1",
    "tok2",
    "tok3",
    "tok4",
    "tok6",
    "tok8",
    "tok9"
  );
  const sen2 = sentence(
    1,
    "tok3",
    "tok8",
    "tok9",
    "tok14",
    "tok16",
    "tok7",
    "tok9"
  );
  const sen3 = sentence(
    2,
    "tok6",
    "tok2",
    "tok1",
    "tok9",
    "tok11",
    "tok12",
    "tok4"
  );
  const sen4 = sentence(
    3,
    "tok1",
    "tok5",
    "tok2",
    "tok19",
    "tok2",
    "tok2",
    "tok1"
  );

  it("work as expected of normal input", () => {
    const sentences: Sentence[] = [sen1, sen2, sen3, sen4];
    const result = chasm(sentences);

    expect(result).not.toBeNull();
    expect(result.length).toBeGreaterThan(1);
  });

  it("uses custom threshold when value provided low", () => {
    const sentences: Sentence[] = [sen1, sen2, sen3, sen4];
    const result = chasm(sentences, 0.1);

    expect(result).not.toBeNull();
    expect(result.length).toEqual(1);
  });

  it("uses custom threshold when value provided high", () => {
    const sentences: Sentence[] = [sen1, sen2, sen3, sen4];
    const result = chasm(sentences, 0.99);

    expect(result).not.toBeNull();
    expect(result.length).toEqual(4);
  });

  it("should not break on empty array", () => {
    const result = chasm([]);

    expect(result).not.toBeNull();
    expect(result).toEqual([]);
  });

  it("should not break on one of the arrays with no tokens", () => {
    const sentences: Sentence[] = [
      sen1,
      sen2,
      sen3,
      sen4,
      { index: 5, tokens: [] },
    ];
    const result = chasm(sentences);

    expect(result).not.toBeNull();
    expect(result.length).toBeGreaterThan(1);
  });

  it("should not break when tokens are empty for all sentences", () => {
    const sentences: Sentence[] = [
      { index: 1, tokens: [] },
      { index: 2, tokens: [] },
      { index: 3, tokens: [] },
      { index: 4, tokens: [] },
      { index: 5, tokens: [] },
    ];
    const result = chasm(sentences);

    expect(result).not.toBeNull();
    expect(result).toEqual(sentences.map((s) => [s]));
  });
});
