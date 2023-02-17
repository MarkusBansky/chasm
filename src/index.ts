import { bow, vocabulary } from "./bow";
import { average, cosine, similarity } from "./similarity";
import { Chasm, Sentence } from "./types";

const chasm: Chasm = (sentences, threshold) => {
  if (sentences.length === 0 || !sentences) {
    return [];
  }

  const voc = vocabulary(sentences);
  const sentenceBows = sentences.map((s) => bow(s, voc));
  const similarities = similarity(sentenceBows, cosine);
  const median = threshold ?? average(similarities);

  let results: { [key: number]: Sentence[] } = { 0: [sentences[0]] };
  let paragraph = 0;
  similarities.forEach((sim, i) => {
    if (sim <= median) {
      paragraph++;
    }

    results = {
      ...results,
      [paragraph]: (results[paragraph] ?? []).concat(sentences[i + 1]),
    };
  });

  return Object.values(results);
};

export default chasm;
