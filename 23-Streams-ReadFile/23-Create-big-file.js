const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
  writeFileSync(
    '../content/23-StreamsReadFile-BigFile.txt',
    `hello world ${i}\n`,
    {
      flag: 'a',
    }
  );
}
