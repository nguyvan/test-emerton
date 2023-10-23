# TEST EMERTON: COUNT UNIQUE FREQUENT WORD IN A PLAIN TEXT

## Problem

You are asked to write a program that counts unique words from an English text file, treating hyphen and apostrophe as part of the word. Your program must output the ten most frequent words and mention the number of occurrences. The expected output is:

-   and (514)
-   the (513)
-   i (446)
-   to (324)
-   a (310)
-   of (295)
-   my (288)
-   you (211)
-   that (188)
-   this (185)

You can use any programming language you want and must supply your program in a .tar.gz archive. It should be easy to build and, although it solves a very simple problem, be written with very high production-quality standards. Code as if your archive were to be delivered to one of our clients.

You will be evaluated on the following criterion: **design**, **structure**, **implementation**, **testability**. If your program doesn't match exactly the expected output stated above, it will not be evaluated.
You are given 48 hours to solve this problem and can use any online resources or books you may need. The text file is provided as an attachment.

## Chosen technology

-   Programmation language: Typescript
-   Environment development: nodejs(v16.20.1), npm(v8.19.4)
-   Dependencies:
    -   jest: 29.7.0 (for testing)
    -   webpack: 5.89.0 (for packaging)

## Architecture/Module

    .
    ├── data		  		  # Data used for testing
    ├── src                   # Compiled files (alternatively `dist`)
    	├── __test__		  # Testing module
    		solution.test.ts  # Testing file
    	├── module
    		├── index.ts      # Solution module
    	├── index.ts

> Use short lowercase names at least for the top-level files and folders except `LICENSE`, `README.md`

The solution is implemented in **src/module/index.ts**

```typescript
class Solution {
	countUniqueWord(texts: String): Array<[string, number]> {
		// implement your solution
	}
}
```

## Install dependencies

Before start project, install all the dependencies by this script:

```bash
npm install
```

## Test

All test cases are implemented in **src/**test**/solution.test.ts**

```bash
npm run test
```

## Run Code

To run code in mode development

```bash
npm run start:dev
```

To run code in mode production

```bash
npm run build
npm run start
```
