import { BagOfWords } from "./types";

export const average = (arr: number[]) =>
  arr.reduce((p, c) => p + c, 0) / (arr.length || 1);

export const similarity: (
  bows: BagOfWords[],
  fun: (a: BagOfWords, b: BagOfWords) => number
) => number[] = (bows, fun) => {
  if (!bows) {
    return [];
  }
  return bows.slice(1).map((bow, i) => fun(bows[i], bow));
};

/**
 *
 * Computes the cosine similarity between the input bag of words (bow)
 * `bowA` and `bowB` and returns a value between 0 and 1.
 *
 * @param {object} bowA te first bow in the form of array of numbers.
 * @param {object} bowB the second bow.
 * @return {number} cosine similarity between `bowA` and `bowB`.
 */
export const cosine = (bowA: BagOfWords, bowB: BagOfWords) => {
  if (
    !bowA ||
    !bowB ||
    bowA.length !== bowB.length ||
    bowA.length === 0 ||
    bowA.length === 0
  ) {
    return 0;
  }

  const dotp = (x: BagOfWords, y: BagOfWords) => {
    const dotp_sum = (a: number, b: number) => {
      return a + b;
    };

    const dotp_times = (a: number, i: number) => {
      return x[i] * y[i];
    };

    return x.map(dotp_times).reduce(dotp_sum, 0);
  };

  const dotProduct = dotp(bowA, bowB);
  if (dotProduct == 0) {
    return 0;
  }

  return (
    dotProduct / (Math.sqrt(dotp(bowA, bowA)) * Math.sqrt(dotp(bowB, bowB)))
  );
};
