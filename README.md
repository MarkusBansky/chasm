# 📄 Chasm – tiny, fast, paragraph!

Chasm is a very tiny and useful tool when you are processing raw sentences and would like to have a way to split those sentences
into paragraphs, but if you dont know how to do it quickly and easily this tool can help you with that task!

Chasm is easily extended within the project and can currently provide the following algorithms:

- `cosine similarity`

Library is extremely fast and simple, id does not have any other dependencies and is easy to install, use and extend when needed.

Test coverage is always kept at `> 99%`.

## Dev requirements

This project is targeting the `Node v18 LTS`. Target for `ts` is set to `ES3` to support all browsers with lower versions.

- Have `node` installed with at least `v18+`
- Install required packages with `npm ci`

## Installation

Installation is simple:

```bash
npm i -s nlp-chasm
```

## Usage

You have access to all modules exported from the project, but in reality you probably need only one of them.

Here is an example how to use the chasm library in your project:

```js
// improt it
import chasm from "nlp-chasm";

// use it
const paragraphs = chasm(sentences);

// use your paragraphs later...
```

##### Note

This project has just been made public, thus the documentation will be updated soon to cover all the aspects.
