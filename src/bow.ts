import { BagOfWords, Sentence, Vocabulary } from "./types";

export const vocabulary: (sentences: Sentence[]) => Vocabulary = (
  sentences
) => {
  const voc: Vocabulary = {};
  sentences?.forEach((s) =>
    s.tokens?.forEach((t) => {
      voc[t.token] = 0;
    })
  );
  return voc;
};

export const bow: (sentence: Sentence, vocabulary: Vocabulary) => BagOfWords = (
  sen,
  voc
) => {
  const bow = { ...voc };
  sen?.tokens?.forEach((t) => {
    bow[t.token] = 1;
  });
  return Object.values(bow);
};
