const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
  writeFileSync(
    '../content/25-Streams-Http-Example-BigFile.txt',
    `Stream Http Example ${i}\n`,
    {
      flag: 'a',
    }
  );
}
