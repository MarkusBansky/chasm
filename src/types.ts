export interface Token {
  index: number;
  token: string;
}

export interface Sentence {
  index: number;
  tokens: Token[];
}

export interface Vocabulary {
  [word: string]: number;
}

export type BagOfWords = number[];
export type ChasmResult = Sentence[][];
export type Chasm = (sentences: Sentence[], threshold?: number) => ChasmResult;
