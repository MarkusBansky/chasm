# 📄 Chasm – tiny, fast, paragraph!

[![npm version](https://badge.fury.io/js/nlp-chasm.svg)](https://badge.fury.io/js/nlp-chasm)
[![npm test & build](https://github.com/MarkusBansky/chasm/actions/workflows/nodejs.yaml/badge.svg?branch=main)](https://github.com/MarkusBansky/chasm/actions/workflows/nodejs.yaml)
[![codecov](https://codecov.io/gh/MarkusBansky/chasm/branch/main/graph/badge.svg?token=M1BGVWCQX8)](https://codecov.io/gh/MarkusBansky/chasm)
[![Known Vulnerabilities](https://snyk.io/test/github/MarkusBansky/chasm/badge.svg)](https://snyk.io/test/github/MarkusBansky/chasm)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=MarkusBansky_chasm&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=MarkusBansky_chasm)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=MarkusBansky_chasm&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=MarkusBansky_chasm)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/summary/new_code?id=MarkusBansky_chasm)

Chasm is a very tiny and useful tool when you are processing raw sentences and would like to have a way to split those sentences
into paragraphs, but if you dont know how to do it quickly and easily this tool can help you with that task!

Chasm is easily extended within the project and can currently provide the following algorithms:

- `cosine similarity`
- more to come...

Library is extremely fast and simple, id does not have any other dependencies and is easy to install, use and extend when needed.

Test coverage is always kept at `> 99%`.

## Dev requirements

This project is targeting the `Node v18 LTS`. Target for `ts` is set to `ES3` to support all browsers with lower versions.

- Have `node` installed with at least `v18+`
- Install required packages with `npm ci`

## Installation

Installation is simple:

```bash
npm i nlp-chasm
```

## Usage

You have access to all modules exported from the project, but in reality you probably need only one of them.

### Basic usage

Here is an example how to use the chasm library in your project:

```js
// improt it
import chasm from "nlp-chasm";

// use it
const paragraphs = chasm(sentences);

// use your paragraphs later...
```

Where the type of the `chasm` function is as follows:

```js
export type Chasm = (sentences: Sentence[], threshold?: number) => ChasmResult;
```

Your sentences must follow a specific structure which is defined in the types of this library. Here, below, you can see the
structure you must use:

```js
export interface Token {
  index: number;
  token: string;
}

export interface Sentence {
  index: number;
  tokens: Token[];
}
```

An example of this structure will look like this:

```js
[
    {
        index: 0,
        tokens: [
            { index: 0, "token1" },
            { index: 1, "token2" },
            { index: 2, "token3" },
        ]
    },
    {
        index: 1,
        tokens: [
            { index: 0, "token10" },
            { index: 1, "token11" }
        ]
    }
]
```

When you run the `chasm` method to split your sentences into paragraphs then you will receive a result of the following structure:

```js
[
    [
        {
            index: 0,
            tokens: [
                { index: 0, "token1" },
                { index: 1, "token2" },
                { index: 2, "token3" },
            ]
        }
    ],
    [
        {
            index: 1,
            tokens: [
                { index: 0, "token10" },
                { index: 1, "token11" }
            ]
        }
    ]
]
```

This is defined as the following:

```js
export type ChasmResult = Sentence[][];
```

### Advanced configuration

Currently there is not much to configure, the common property which is optional is the `threshold?: number` property.
This defines threshold for similarity between sentences. All values must be between `[0, 1]` for threshold.

##### Note

This project has just been made public, thus the documentation will be updated soon to cover all the aspects.
