const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('../content/6-SYNC-first.txt', 'utf8');
    const second = await readFile('../content/6-SYNC-second.txt', 'utf8');

    await writeFile(
      '../content/18-ASYNC-mindGrenade.txt',
      `This is awesome : ${first} ${second}`,
      { flag: 'a' } //'a' ====> append to exisiting content in each request
    );

    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
start();

/*
Another way to write above asycnhronous sever code by using util module
    
    const { readFile, writeFile } = require('fs');

    // util module ====> makes the codes into Promises
    const util = require('util');
    const readFilePromise = util.promisify(readFile);
    const writeFilePromise = util.promisify(writeFile);

    const start = async () => {
      try {
        const first = await readFilePromise('../content/6-SYNC-first.txt', 'utf8');
        const second = await readFilePromise(
          '../content/6-SYNC-second.txt',
          'utf8'
        );

        await writeFilePromise(
          '../content/18-ASYNC-mindGrenade.txt',
          `This is awesome : ${first} ${second}`
        );

        console.log(first, second);
      } catch (err) {
        console.log(err);
      }
    };
    start();

*/
